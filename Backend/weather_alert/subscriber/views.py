from django.shortcuts import render
from django.http import JsonResponse
from .external_api import WeatherAlertService
from .messaging_service import LoomMessagingService
from .models import Subscriber
from django.conf import settings

# Variables
SITE_LINK = "https://your-emergency-site.com"
ALERT_FETCH_AREA = 'TX'
DEFAULT_ALERT_MESSAGE = f'⚠️ Weather Alert in your area. Check website for details.{SITE_LINK}'

def active_alerts_view(request):
    use_dummy = request.GET.get('dummy', 'false').lower() == 'true'

    weather_service = WeatherAlertService(area=ALERT_FETCH_AREA, use_dummy_data=use_dummy)
    alerts = weather_service.get_clean_alerts()

    return JsonResponse({'alerts': alerts})

def alert_subscribers_view(request):
    # Initialize services
    loom_service = LoomMessagingService(
        api_url=settings.LOOM_API_URL,
        authorization_token=settings.LOOM_AUTHORIZATION_TOKEN,
        secret_key=settings.LOOM_SECRET_KEY
    )
    weather_service = WeatherAlertService(area="TX")

    # Fetch cleaned weather alerts
    alerts = weather_service.get_clean_alerts()

    if not alerts:
        return JsonResponse({'message': 'None'}, status=200)

    # For this example, just take the most recent/first alert
    latest_alert = alerts[0]

    # Build the alert message dynamically
    message = weather_service.build_alert_message(latest_alert, SITE_LINK)

    # Send to all subscribers
    for subscriber in Subscriber.objects.all():
        loom_service.send_sms(subscriber.phone_number, message)

    return JsonResponse({'message': 'Alerts sent successfully!'})