# Generated by Django 5.2 on 2025-04-26 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Subscriber",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("zip_code", models.CharField(max_length=5)),
                ("phone", models.CharField(max_length=10)),
            ],
        ),
    ]
