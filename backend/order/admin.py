from django.contrib import admin
from .models import Order
from .models import Item

class OrderAdmin(admin.ModelAdmin):
    list_display = ('table','location','guests','item','completed')

class ItemAdmin(admin.ModelAdmin):
    list_display = ('description','recipe','modification','price')

# Register your models here.

admin.site.register(Order, OrderAdmin)
admin.site.register(Item, ItemAdmin)
