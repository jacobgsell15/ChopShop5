from django.contrib import admin
from .models import Order
from .models import Item

class OrderAdmin(admin.ModelAdmin):
    list_display = ('table','location','guests','get_items','completed')
    
    def get_items(self, obj):  # Define your custom function
        items = obj.items.all()
        return ", ".join([item.description for item in items])  # Format the related data

    get_items.short_description = "Items"  # Optional: Set a descriptive label
    get_items.admin_order_field = 'table'

class ItemAdmin(admin.ModelAdmin):
    list_display = ('description','recipe','modification','price')

# Register your models here.

admin.site.register(Order, OrderAdmin)
admin.site.register(Item, ItemAdmin)