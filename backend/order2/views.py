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

# Create your views here.
