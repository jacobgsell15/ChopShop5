from django.contrib import admin
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ('location','table','guests','completed')

# Register your models here.

admin.site.register(Order, OrderAdmin)
