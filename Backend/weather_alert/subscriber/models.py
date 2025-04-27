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