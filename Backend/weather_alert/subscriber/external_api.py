import requests

class WeatherAlertService():
    BASE_URL = "https://api.weather.gov/alerts/active"

    def __init__(self, area="TX", use_dummy_data=False):
        self.area = area
        self.use_dummy_data = use_dummy_data

    def fetch_alerts(self):
        if self.use_dummy_data:
            return self._load_dummy_alerts()
        
        params = {
            'area' : self.area
        }
        response = requests.get(self.BASE_URL, params=params)
        
        if response.status_code == 200:
            data = response.json()
            return data.get('features', [])
        else:
            return []
        
    def _load_dummy_alerts(self):
        return [
            {
                "properties": {
                    "event": "Tornado Warning",
                    "headline": "⚠️ Tornado Warning for Austin!",
                    "description": "A tornado has been sighted near downtown Austin. Seek shelter immediately.",
                    "areaDesc": "Austin, TX 78701",
                    "severity": "Severe",
                    "effective": "2025-04-27T15:00:00Z",
                    "expires": "2025-04-27T16:00:00Z"
                }
            }
        ]

    def get_clean_alerts(self):
        raw_alerts = self.fetch_alerts()
        cleaned_alerts = []

        for alert in raw_alerts:
            props = alert.get('properties', {})
            cleaned_alert = {
                'event': props.get('event', ''),
                'headline': props.get('headline', ''),
                'description': props.get('description', ''),
                'instruction': props.get('instruction', ''),  # ← Add this
                'area': props.get('areaDesc', ''),
                'severity': props.get('severity', ''),
                'effective': props.get('effective', ''),
                'expires': props.get('expires', ''),
            }
            cleaned_alerts.append(cleaned_alert)

        return cleaned_alerts
    
    def build_alert_message(self, alert, site_link):
        event = alert.get('event', 'Weather Alert')
        headline = alert.get('headline', '')
        description = alert.get('description', '')
        instruction = alert.get('instruction', '')

        message = (
                f"⚠️ {event}: {headline}\n\n"
                f"{description}\n\n"
                f"Instructions: {instruction}\n"
                )
        if len(message) > 290:
            message = message[:290]
            message = message + "... " + site_link

        return message