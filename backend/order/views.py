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

class LocationView(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class AddItemView(viewsets.ModelViewSet):
    serializer_class = AddItemSerializer
    queryset = AddItem.objects.all()

    def put(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

# Create your views here.from django.shortcuts import render