from django.core.management.base import BaseCommand
from subscriber.models import WeatherEvent
from django.utils.timezone import now

class Command(BaseCommand):
    help = 'Trigger a fake test WeatherEvent for integration testing.'

    def add_arguments(self, parser):
        parser.add_argument('event_type', type=str, help="Type of event: 'tornado', 'hurricane', or 'redflag'")

    def handle(self, *args, **options):
        event_type = options['event_type'].lower()

        if event_type not in ['tornado', 'hurricane', 'redflag']:
            self.stdout.write(self.style.ERROR("Invalid event type. Choose 'tornado', 'hurricane', or 'redflag'."))
            return

        # Map the options to specific fake event data
        event_mapping = {
            'tornado': {
                "event": "Test Tornado Warning",
                "headline": "🚨 [TEST] Tornado Warning!",
                "description": "This is a test tornado warning for system integration.",
                "instruction": "Seek shelter immediately (test only).",
                "fips_code": "48001",
                "urgency": "Immediate"
            },
            'hurricane': {
                "event": "Test Hurricane Warning",
                "headline": "🌀 [TEST] Hurricane Warning!",
                "description": "This is a test hurricane alert for integration.",
                "instruction": "Evacuate low areas immediately (test only).",
                "fips_code": "48001",
                "urgency": "Immediate"
            },
            'redflag': {
                "event": "Test Red Flag Warning",
                "headline": "🔥 [TEST] Red Flag Warning!",
                "description": "This is a test fire danger warning for system integration.",
                "instruction": "Avoid outdoor fires and use caution (test only).",
                "fips_code": "48001",
                "urgency": "Expected"
            }
        }

        test_event_data = event_mapping[event_type]

        # Optionally: Delete previous test events for cleanliness
        WeatherEvent.objects.filter(headline__icontains='[TEST]').delete()

        # Create the test event
        WeatherEvent.objects.create(**test_event_data)

        self.stdout.write(self.style.SUCCESS(f"✅ Test {event_type.title()} event created successfully!"))