from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework.routers import DefaultRouter
from api.views import ProductViewSet

def root_view(request):
    return HttpResponse("Welcome to the SkinCare E-commerce Backend! Use /api/ for API endpoints.")

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='products')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', root_view),
]