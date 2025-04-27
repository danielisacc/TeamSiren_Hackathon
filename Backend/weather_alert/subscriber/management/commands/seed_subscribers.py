from django.core.management.base import BaseCommand
from subscriber.subscriber_service import get_mock_subscriber_data, register_subscriber
from subscriber.models import Subscriber

class Command(BaseCommand):
    help = 'Seeds the database with mock subscribers for testing.'

    def add_arguments(self, parser):
        # Add optional --count argument
        parser.add_argument(
            '--count',
            type=int,
            default=50,
            help='Number of subscribers to create (default: 50)'
        )

    def handle(self, *args, **options):
        count = options['count']

        confirm = input(f"This will DELETE all existing subscribers and seed {count} new ones. Continue? (y/n): ")
        if confirm.lower() != 'y':
            self.stdout.write(self.style.WARNING('Aborted. No changes made.'))
            return

        Subscriber.objects.all().delete()
        self.stdout.write(self.style.WARNING('⚠️ Existing subscribers deleted.'))

        mock_subscribers = get_mock_subscriber_data(count=count)

        for subscriber_data in mock_subscribers:
            register_subscriber(subscriber_data)

        self.stdout.write(self.style.SUCCESS(f'✅ Successfully seeded {count} mock subscribers.'))
