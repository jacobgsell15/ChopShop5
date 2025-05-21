from django.db import models

# Create your models here.

class Item(models.Model):
    menu_item = models.CharField(max_length=122,default="")
    price = models.IntegerField()
    guest = models.IntegerField()

    def _str_(self):
        return self.title

class Order(models.Model):
    location = models.CharField(max_length=120, default="")
    table = models.IntegerField()
    guests = models.IntegerField()
    itemlist = models.JSONField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE, default="")
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title