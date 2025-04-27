from django.db import models

class ZipCode(models.Model):
    zip_code = models.CharField(max_length=10, primary_key=True)
    county_fips = models.CharField(max_length=6)

    def __str__(self):
        return self.zip_code

class Subscriber(models.Model):
    phone_number = models.CharField(max_length=15)
    zip_code = models.ForeignKey(ZipCode, on_delete=models.CASCADE)

    def __str__(self):
        return self.phone_number
    

class WeatherEvent(models.Model):
    event = models.CharField(max_length=255)
    headline = models.TextField()
    description = models.TextField()
    instruction = models.TextField(blank=True, null=True)
    fips_code = models.CharField(max_length=10)  # Store FIPS as a short text
    urgency = models.CharField(max_length=50)  # New field ✅
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.event} ({self.fips_code})"
    
