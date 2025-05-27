from django.db import models

# Create your models here.

class Item(models.Model):
    description = models.CharField(max_length=120,default="")
    recipe = models.CharField(max_length=250,default="")
    modification = models.CharField(250, default="")
    price = models.FloatField()

    def _str_(self):
        return self.description


class Order(models.Model):
    table = models.IntegerField()
    location = models.IntegerField()
    guests = models.IntegerField()
    item = models.ManyToManyField(Item)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.table