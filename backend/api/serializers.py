
from rest_framework import serializers
from .models import Product, Appointment, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'name', 'phone_number', 'doctor', 'consultation_mode', 'time_slot', 'created_at']
        read_only_fields = ['created_at']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'name', 'address', 'pincode', 'products', 'total_price', 'created_at']
        read_only_fields = ['created_at']