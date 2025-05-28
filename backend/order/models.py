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
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    table = models.IntegerField()
    guests = models.IntegerField()
    total = models.FloatField()
    finalized_list = models.JSONField()
    completed = models. BooleanField()

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
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    qty = models.IntegerField()
    price = models.FloatField()
    guest = models.IntegerField()

    def _str_(self):
        return self.guest