from django.contrib import admin
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ('title','description','completed')

# Register your models here.

admin.site.register(Order, OrderAdmin)
