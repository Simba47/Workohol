
from django.db import models
from django.db.models import JSONField  

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField(blank=True)
    category = models.CharField(
        max_length=50,
        choices=[
            ('sunscreen', 'Sunscreen'),
            ('moisturizer', 'Moisturizer'),
            ('cleanser', 'Cleanser'),
            ('serum', 'Serum'),
            ('kits-combos', 'Kits and Combos'),
            ('facewash', 'Facewash'),
        ],
        default='moisturizer'
    )
    image = models.CharField(max_length=255, blank=True)  

    def __str__(self):
        return self.name

class Appointment(models.Model):
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    doctor = models.CharField(max_length=255)
    consultation_mode = models.CharField(max_length=50)
    time_slot = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.doctor} - {self.time_slot}"

class Order(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    pincode = models.CharField(max_length=10)
    products = JSONField()  
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order by {self.name} on {self.created_at}"