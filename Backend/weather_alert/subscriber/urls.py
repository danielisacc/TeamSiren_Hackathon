from django.urls import path
from . import views

urlpatterns = [
    path('alerts/', views.active_alerts_view, name='active_alerts'),
    path('send-alerts/', views.alert_subscribers_view, name='send_alerts'),
]