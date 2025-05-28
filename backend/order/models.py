from django.db import models

# Create your models here.

class Location(models.Model):
    id = models.AutoField()
    name = models.CharField(max_length=150)
    tables = models.IntegerField()
    guests = models.IntegerField()

    def _str_(self):
        return self.id

class Order(models.Model):
    id = models.AutoField()
    location = models.ForeignKey(Location)
    table = models.IntegerField()
    guests = models.IntegerField()
    total = FloatField(default = 0.00)
    finalized_list = models.JSONField()
    completed = BooleanField()

    def _str_(self):
        return self.id

class Item(models.Model):
    id = models.AutoField()
    description = models.CharField(max_length=120,default="")
    recipe = models.TextField()
    price = models.FloatField()

    def _str_(self):
        return self.id

class AddItem(models.Model):
    id = models.AutoField()
    order = models.ForeignKey(Order)
    item = models.ForeignKey(Item)
    qty = models.IntegerField()
    price = models.FloatField()

    def _str_(self):
        return self.id