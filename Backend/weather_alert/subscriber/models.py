from django.db import models

class Subscriber(models.Model):
    zip_code = models.CharField(max_length=5)
    phone = models.CharField(max_length=10)