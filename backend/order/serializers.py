from rest_framework import serializers
from .models import Order
from .models import Item
from .models import AddItem
from .models import Location

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id','name','tables','guests')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id','location','table','guests','total','finalized_list','completed')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id','description','recipe','price')

class AddItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddItem
        fields = ('id','order','item','qty','price')
