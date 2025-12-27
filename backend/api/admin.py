
from django.contrib import admin
from .models import Product, Appointment, Order

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'doctor', 'consultation_mode', 'time_slot', 'created_at')
    search_fields = ('name', 'phone_number', 'doctor')
    list_filter = ('consultation_mode', 'doctor')

class OrderAdmin(admin.ModelAdmin):
    list_display = ('name', 'pincode', 'total_price', 'created_at')
    search_fields = ('name', 'pincode')
    list_filter = ('created_at',)

    def products_display(self, obj):
        return ", ".join([f"{item['name']} (x{item['quantity']})" for item in obj.products])
    products_display.short_description = 'Products'

admin.site.register(Product)
admin.site.register(Appointment, AppointmentAdmin)
admin.site.register(Order, OrderAdmin)