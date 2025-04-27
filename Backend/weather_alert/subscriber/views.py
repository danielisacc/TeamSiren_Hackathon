from django.utils.timezone import now, timedelta
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.conf import settings
from .external_api import WeatherAlertService
from .messaging_service import LoopMessagingService
from .models import Subscriber
from .models import WeatherEvent, ZipCode 
from .subscriber_service import register_subscriber

import json


def active_alerts_view(request):
    zip_code = request.GET.get('zip_code')
    hours = request.GET.get('hours')

    try:
        hours = int(hours)
    except (TypeError, ValueError):
        hours = 24

    time_threshold = now() - timedelta(hours=hours)

    queryset = WeatherEvent.objects.filter(created_at__gte=time_threshold)

    if zip_code:
        try:
            zip_obj = ZipCode.objects.get(zip_code=zip_code)
            fips_code = zip_obj.fips_code
            queryset = queryset.filter(fips_code=fips_code)
        except ZipCode.DoesNotExist:
            return JsonResponse({'alerts': [], 'message': 'Invalid zip code provided.'}, status=400)

    events = list(queryset.values(
        'event', 'headline', 'description', 'instruction', 'fips_code', 'urgency', 'created_at'
    ))

    return JsonResponse({'alerts': events})


@csrf_exempt  # (✅ Turn off CSRF protection temporarily for simplicity - later you can lock it down)
def register_subscriber_view(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

    try:
        # Parse JSON body
        data = json.loads(request.body)

        # Very basic validation
        phone_number = data.get('phone_number')
        zip_code = data.get('zip_code')

        if not phone_number or not zip_code:
            return JsonResponse({'error': 'Missing phone_number or zip_code'}, status=400)

        # Save the subscriber using your existing logic
        register_subscriber(data)

        return JsonResponse({'message': 'Subscriber registered successfully!'}, status=201)

    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    

def handle_imessage(request): 
    print(request)
    return JsonResponse({'message': 'Subscriber registered successfully!'}, status=200)
# def alert_subscribers_view(request):
#     # Initialize services
#     loop_service = LoopMessagingService(
#         api_url=settings.LOOP_API_URL,
#         authorization_token=settings.LOOP_AUTHORIZATION_TOKEN,
#         secret_key=settings.LOOP_SECRET_KEY
#     )
#     weather_service = WeatherAlertService(area="TX")

#     # Fetch cleaned weather alerts
#     alerts = weather_service.get_clean_alerts()

#     if not alerts:
#         return JsonResponse({'message': 'None'}, status=200)

#     # For this example, just take the most recent/first alert
#     latest_alert = alerts[0]

#     # Build the alert message dynamically
#     message = weather_service.build_alert_message(latest_alert, settings.SITE_LINK)

#     # Send to all subscribers
#     for subscriber in Subscriber.objects.all():
#         loop_service.send_sms(subscriber.phone_number, message)

#     return JsonResponse({'message': 'Alerts sent successfully!'})