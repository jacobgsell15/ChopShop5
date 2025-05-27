from rest_framework import serializers
from .models import Order
from .models import Item

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('location', 'table', 'guests', 'itemlist', 'gueslist', 'modificationlist', 'guest', 'modification', 'item', 'completed')