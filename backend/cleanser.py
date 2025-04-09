import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from api.models import Product

cleansers = [
    {"id": 1, "name": "Neutrogena Deep Clean Facial Cleanser for Normal to Oily skin-50 ml", "price": 241.00, "image": "C1.jpg"},
    {"id": 2, "name": "Dot and Key Vitamin C + E Super Bright Gel Face Wash-175 ml", "price": 311.00, "image": "C2.jpg"},
    {"id": 3, "name": "Simple Kind To Skin Refreshing Facial Wash 100 ml", "price": 248.00, "image": "C3.jpg"},
    {"id": 4, "name": "Cetaphil Oily Skin Cleanser For Combination To Oily Sensitive Skin-125 ml", "price": 557.00, "image": "C4.jpg"},
    {"id": 5, "name": "Gentle Cleanser with Avacado & 5 Essential Ceramides - 100 m", "price": 287.00, "image": "C5.jpg"},
    {"id": 6, "name": "Aiken Prebotic Facial Cleanser Hydra Plus with rice water & BX premium Biotics Strengthen Skin Barrier", "price": 330.00, "image": "C6.jpg"},
    {"id": 7, "name": "Avon Naturals Rose & Pearl Cleanser-100 gm", "price": 346.00, "image": "C7.jpg"},
    {"id": 8, "name": "Ren Clean skincare Perfect Canvas Clean Jelly Oil Cleanser - 100 ml", "price": 586.00, "image": "C8.jpg"},
    {"id": 9, "name": "Acne Repair Gentle Micro Cleanser 150 ml", "price": 420.00, "image": "C9.jpg"},
    {"id": 10, "name": "Loreal Paris Glycolic Bright Daily Foaming Facial Cleanser, 50 ml", "price": 460.00, "image": "C10.jpg"},
    {"id": 11, "name": "Gariner Bright Complete Vitmain C Gel Gentle Cleanser| For Instant Brighter Skin Face Wash 100 gm", "price": 613.00, "image": "C11.jpg"},
    {"id": 12, "name": "Saffron & Papaya glow Bright Face Wash enhances glow, brightens skin with vitamin B5 & glycerin", "price": 261.00, "image": "C12.jpg"}
]

def add_cleansers():
    for product in cleansers:
        Product.objects.get_or_create(
            name=product["name"],
            defaults={
                "price": product["price"],
                "category": "cleanser",  # Match your model's category choice
                "image": product["image"]
            }
        )
    print("Cleanser products added successfully!")

if __name__ == "__main__":
    add_cleansers()