from django.shortcuts import render
from rest_framework import viewsets
from .serializers import OrderSerializer
from .serializers import ItemSerializer
from .serializers import AddItemSerializer
from .serializers import LocationSerializer
from .models import Order
from .models import Item
from .models import AddItem
from .models import Location

# Create your views here.

class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class AddItemView(viewsets.ModelViewSet):
    serializer_class = AddItemSerializer
    queryset = AddItem.objects.all()

class LocationView(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

# Create your views here.from django.shortcuts import render