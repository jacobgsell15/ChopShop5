from django.contrib import admin
from .models import Order
from .models import Item

class OrderAdmin(admin.ModelAdmin):
    list_display = ('location','table','guests','itemlist','item','completed')

class ItemAdmin(admin.ModelAdmin):
    list_display = ('menu_item','price','guest')

# Register your models here.

admin.site.register(Order, OrderAdmin)
admin.site.register(Item, ItemAdmin)
