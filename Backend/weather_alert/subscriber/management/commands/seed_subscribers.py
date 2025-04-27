from django.core.management.base import BaseCommand
from subscriber.models import Subscriber
from subscriber.subscriber_service import get_mock_subscriber_data, register_subscriber

class Command(BaseCommand):
    help = 'Seeds subscribers for testing purposes.'

    def add_arguments(self, parser):
        parser.add_argument('--count', type=int, default=50, help="Number of random subscribers to generate (default 50)")
        parser.add_argument('--phone', type=str, help="Specific phone number to insert (optional)")
        parser.add_argument('--zip', type=str, help="Specific ZIP code to insert (optional)")

    def handle(self, *args, **options):
        count = options['count']
        phone = options.get('phone')
        zip_code = options.get('zip')

        self.stdout.write(self.style.NOTICE("🚀 Seeding subscribers..."))
        Subscriber.objects.all().delete()

        if phone and zip_code:
            # Insert a specific subscriber
            data = {
                'phone_number': phone,
                'zip_code': zip_code
            }
            register_subscriber(data)
            self.stdout.write(self.style.SUCCESS(f"✅ Inserted specific subscriber: {phone} in ZIP: {zip_code}"))
        else:
            # Generate random mock subscribers
            mock_data = get_mock_subscriber_data(count)

            for data in mock_data:
                register_subscriber(data)

            self.stdout.write(self.style.SUCCESS(f"✅ Inserted {count} random mock subscribers."))
