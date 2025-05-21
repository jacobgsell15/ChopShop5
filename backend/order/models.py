from django.db import models

# Create your models here.

class Order(models.Model):
    location = models.CharField(max_length=120, default="")
    table = models.CharField(max_length=120)
    guests = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title