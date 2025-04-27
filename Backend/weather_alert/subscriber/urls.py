from django.urls import path
from . import views

urlpatterns = [
    path('alerts/', views.active_alerts_view, name='active_alerts'),
    path('register/', views.register_subscriber_view, name='register_subscriber'),
    # path('send-alerts/', views.alert_subscribers_view, name='send_alerts'),
]