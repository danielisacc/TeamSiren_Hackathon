from .models import Subscriber
import random
import pandas as pd
from pathlib import Path

def register_subscriber(data: dict):
    """
    Register a subscriber using a dictionary with 'phone_number' and 'zip_code' keys.
    Expects validated input.
    """
    phone_number = data.get('phone_number')
    zip_code = data.get('zip_code')

    subscriber = Subscriber(phone_number=phone_number, zip_code_id=zip_code)
    subscriber.save()
    print(f"✅ Registered subscriber: {phone_number}, ZIP: {zip_code}")
    return subscriber

def get_mock_subscriber_data(count=50):
    """Generate a list of mock subscriber dictionaries based on real Texas ZIPs."""
    
    base_dir = Path(__file__).resolve().parent
    csv_path = base_dir / "zip_mappings" / "texas_zipcodes_to_fips.csv"

    df = pd.read_csv(csv_path)
    df['ZIP'] = df['ZIP'].astype(str)

    zip_codes = df['ZIP'].tolist()

    mock_subscribers = []

    for i in range(count):
        phone_number = f"+1512{random.randint(1000000, 9999999)}"
        zip_code = random.choice(zip_codes)
        mock_subscribers.append({
            "phone_number": phone_number,
            "zip_code": zip_code
        })

    return mock_subscribers
