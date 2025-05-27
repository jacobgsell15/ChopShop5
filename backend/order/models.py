from django.db import models

# Create your models here.

class Item(models.Model):
    menu_item = models.CharField(max_length=122,default="")
    price = models.IntegerField()

    def _str_(self):
        return self.title

class Order(models.Model):
    location = models.CharField(max_length=120, default="")
    table = models.IntegerField(default=0)
    guests = models.IntegerField(default=1)
    itemlist = models.JSONField(default=1)
    guestlist = models.JSONField(default=1)
    modificationlist = models.JSONField(default=1)
    guest = models.IntegerField(default=0)
    modification = models.CharField(max_length=250, default=1)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, default=1)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title