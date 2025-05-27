from django.contrib import admin
from .models import Order
from .models import Item

class OrderAdmin(admin.ModelAdmin):
    list_display = ('location','table','guests','itemlist','guestlist','modificationlist','guest','modification','item','completed')

class ItemAdmin(admin.ModelAdmin):
    list_display = ('menu_item','price')

# Register your models here.

admin.site.register(Order, OrderAdmin)
admin.site.register(Item, ItemAdmin)
