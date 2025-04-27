from django.core.management.base import BaseCommand
from subscriber.external_api import WeatherAlertService
from subscriber.messaging_service import LoomMessagingService
from subscriber.models import Subscriber
from django.conf import settings

class Command(BaseCommand):
    help = 'Fetches severe alerts and sends SMS to subscribers'

    def handle(self, *args, **kwargs):
        # Initialize services
        loom_service = LoomMessagingService(
            api_url=settings.LOOM_API_URL,
            authorization_token=settings.LOOM_AUTHORIZATION_TOKEN,
            secret_key=settings.LOOM_SECRET_KEY
        )
        weather_service = WeatherAlertService(area=settings.ALERT_AREA)

        # Fetch alerts
        alerts = weather_service.get_clean_alerts()

        if not alerts:
            self.stdout.write(self.style.SUCCESS('No active alerts at this time.'))
            return

        # Filter for extreme/severe alerts only
        severe_alerts = [
            alert for alert in alerts
            if alert.get('severity') in settings.ALERT_SEVERITIES
        ]

        if not severe_alerts:
            self.stdout.write(self.style.SUCCESS('No severe/extreme alerts found.'))
            return


        for alert in severe_alerts:
            message = weather_service.build_alert_message(alert, settings.SITE_LINK)

            for subscriber in Subscriber.objects.all():
                loom_service.send_sms(subscriber.phone_number, message)

        self.stdout.write(self.style.SUCCESS('Severe alerts sent successfully!'))
