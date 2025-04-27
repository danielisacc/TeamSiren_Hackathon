from django.core.management.base import BaseCommand
from subscriber.external_api import WeatherAlertService
from subscriber.messaging_service import LoopMessagingService, MockMessagingService
from subscriber.models import Subscriber
from django.conf import settings
import json

class Command(BaseCommand):
    help = 'Fetches severe weather alerts and sends SMS to affected subscribers (dynamic service selection)'

    def handle(self, *args, **kwargs):
        # Dynamic selection of messaging service
        messenger_service = self.get_messaging_service()

        weather_service = WeatherAlertService(area=settings.ALERT_AREA)

        # Fetch active weather alerts
        alerts = weather_service.get_clean_alerts()

        if not alerts:
            self.stdout.write(self.style.SUCCESS('✅ No active alerts at this time.'))
            return

        # Filter for severe/extreme alerts only
        severe_alerts = [
            alert for alert in alerts
            if alert.get('severity') in settings.ALERT_SEVERITY_FILTER
        ]

        if not severe_alerts:
            self.stdout.write(self.style.SUCCESS('✅ No severe/extreme alerts found.'))
            return

        for alert in severe_alerts:
            # Build alert SMS message
            message = weather_service.build_alert_message(alert, settings.SITE_LINK)

            # Extract affected county FIPS codes from alert
            affected_fips = alert.get('geocode', {}).get('SAME', [])

            if not affected_fips:
                self.stdout.write(self.style.WARNING('⚠️ No FIPS geocode found in alert. Printing raw alert info for debug:'))
                print(json.dumps(alert, indent=2))
                continue

            # Query all subscribers whose linked ZIP's county_fips matches the alert FIPS
            affected_subscribers = Subscriber.objects.filter(zip_code__county_fips__in=affected_fips)

            if not affected_subscribers.exists():
                self.stdout.write(self.style.WARNING(f'⚠️ No subscribers matched for event: {alert.get("event", "Unknown Event")}'))
                continue

            for subscriber in affected_subscribers:
                messenger_service.send_sms(subscriber.phone_number, message)

            self.stdout.write(self.style.SUCCESS(
                f'✅ Sent {affected_subscribers.count()} alerts for event: {alert.get("event", "Unknown Event")}'
            ))

    def get_messaging_service(self):
        """Helper method to dynamically select the messaging service."""
        service_type = settings.MESSAGING_SERVICE.lower()

        if service_type == "mock":
            self.stdout.write(self.style.WARNING('⚡ Using Mock Messaging Service (no real texts will be sent)'))
            return MockMessagingService()

        elif service_type == "loop":
            self.stdout.write(self.style.SUCCESS('📡 Using Real Loop Messaging Service'))
            return LoopMessagingService(
                api_url=settings.LOOP_API_URL,
                authorization_token=settings.LOOP_AUTHORIZATION_TOKEN,
                secret_key=settings.LOOP_SECRET_KEY
            )

        else:
            raise ValueError(f"Invalid MESSAGING_SERVICE setting: {service_type}")
