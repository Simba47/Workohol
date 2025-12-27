# core/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ProductViewSet, AppointmentViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='products')
router.register(r'appointments', AppointmentViewSet, basename='appointments')
router.register(r'orders', OrderViewSet, basename='orders')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]