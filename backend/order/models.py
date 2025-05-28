from django.db import models

# Create your models here.

class Location(models.Model):
    name = models.CharField(max_length=150)
    tables = models.IntegerField()
    guests = models.IntegerField()

    def _str_(self):
        return self.name

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL)
    table = models.IntegerField()
    guests = models.IntegerField()
    total = FloatField(default = 0.00)
    finalized_list = models.JSONField()
    completed = BooleanField()

    def _str_(self):
        return self.id

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=120,default="")
    recipe = models.TextField()
    price = models.FloatField()

    def _str_(self):
        return self.id

class AddItem(models.Model):
    order = models.ForeignKey(Order)
    item = models.ForeignKey(Item)
    qty = models.IntegerField()
    price = models.FloatField()
    guest = models.IntegerField()

    def _str_(self):
        return self.guest