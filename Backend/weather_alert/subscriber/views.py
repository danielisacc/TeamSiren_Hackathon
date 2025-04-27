from django.shortcuts import render
from django.http import JsonResponse
from .external_api import WeatherAlertService

def active_alerts_view(request):
    use_dummy = request.GET.get('dummy', 'false').lower() == 'true'

    weather_service = WeatherAlertService(area="TX", use_dummy_data=use_dummy)
    alerts = weather_service.get_clean_alerts()

    return JsonResponse({'alerts': alerts})