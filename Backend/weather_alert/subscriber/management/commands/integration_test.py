from django.core.management.base import BaseCommand
from django.core import management

class Command(BaseCommand):
    help = 'Performs full integration test: seeds subscriber + weather event + sends mock alerts.'

    def add_arguments(self, parser):
        parser.add_argument('event_type', type=str, help="Event type: 'tornado', 'hurricane', or 'redflag'")
        parser.add_argument('--phone', type=str, default="+15125551234", help="Phone number to register (default fake one)")
        parser.add_argument('--zip', type=str, default="78701", help="ZIP code to register subscriber under (default 78701)")

    def handle(self, *args, **options):
        event_type = options['event_type'].lower()
        phone_number = options['phone']
        zip_code = options['zip']

        self.stdout.write(self.style.NOTICE("🚀 Starting full integration test..."))

        # Step 1: Seed specific subscriber
        self.stdout.write(self.style.NOTICE(f"👤 Seeding subscriber: {phone_number} in ZIP: {zip_code}"))
        management.call_command('seed_subscribers', '--phone', phone_number, '--zip', zip_code)

        # Step 2: Seed fake weather event
        self.stdout.write(self.style.NOTICE(f"🌪️ Seeding weather event of type: {event_type}"))
        management.call_command('seed_weather_event', event_type)

        # Step 3: Send alerts (NO --mock)
        self.stdout.write(self.style.NOTICE(f"📨 Sending alerts using configured messaging service..."))
        management.call_command('send_alerts')  # ✅ No --mock

        self.stdout.write(self.style.SUCCESS("✅ Full integration test completed successfully!"))
