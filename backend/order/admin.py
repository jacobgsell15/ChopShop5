from django.contrib import admin
from .models import Order
from .models import Item
from .models import AddItem
from .models import Location

class LocationAdmin(admin.ModelAdmin):
    list_display = ('id','name','tables','guests')

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id','location','table','guests','total','finalized_list','completed')

class ItemAdmin(admin.ModelAdmin):
    list_display = ('id','description','recipe','price')

class AddItemAdmin(admin.ModelAdmin):
    list_display = ('id','order','item','qty','price')


# Register your models here.


admin.site.register(Location,LocationAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(AddItem,AddItemAdmin)