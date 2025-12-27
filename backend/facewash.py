import os
import django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from api.models import Product

facewash = [
    {"id": 1, "name": "Simple Kind To Skin Refreshing Facial Wash 150 ml", "price": 291.00, "image": "F3.jpg"},
    {"id": 2, "name": "Ponds Bright Beauty Facewash with Niacinamide for Glass Skin-like Shine - 200 g", "price": 203.00, "image": "F2.jpg"},
    {"id": 3, "name": "Minimalist 2% Salicylic Acid Face Wash With LHA - 100 ml", "price": 284.00, "image": "F3.jpg"},
    {"id": 4, "name": "DOT & KEY Barrier Repair Probiotics 5 Ceramides pH5.5 Hydrating Gentle Face Wash - 100ml", "price": 211.00, "image": "F4.jpg"},
    {"id": 5, "name": "Ponds Bright Miracle Detox Facewash with 10X Power of Charcoal, 200gm", "price": 572.00, "image": "F5.jpg"},
    {"id": 6, "name": "Cetaphil Gentle Skin Cleanser Hydrating Face Wash with Niacinamide, Vitamin B5 - 250 ml", "price": 250.00, "image": "F6.jpg"},
    {"id": 7, "name": "DOT & KEY Cica Anti-Acne Facewash with 2% Salicylic & Green Tea- Cleanses Pores - 100ml", "price": 211.00, "image": "F7.jpg"},
    {"id": 8, "name": "The Derma co. 2% Vitamin C + Rosehip & Orange Peel Extract Gel Daily Face Wash - 80 ml", "price": 199.00, "image": "F8.jpg"},
    {"id": 9, "name": "DOT & KEY Vitamin C+E Super Bright Gel Facewash with Blood Orange & Niacinamide - 100ml", "price": 211.00, "image": "F9.jpg"},
    {"id": 10, "name": "Mamaearth Ubtan Natural Face Wash With Turmeric & Saffron For Tan Removal - 100ml", "price": 269.00, "image": "F10.jpg"},
    {"id": 11, "name": "The Derma co. Sali-Cinamide Anti-Acne Face Wash - 150ml", "price": 199.00, "image": "F11.jpg"},  # Fixed image name from 'F.jpg' to 'F11.jpg'
    {"id": 12, "name": "Garnier Men Turbo Bright Double Action Face Wash with Charcoal and Vitamin C - 150g", "price": 250.00, "image": "F12.jpg"}
]

def add_facewash():
    for product in facewash:
         Product.objects.get_or_create(
            name=product["name"],
            defaults={
                "price": product["price"],
                "category": "facewash",  
                "image": product["image"]
            }
        )
    print("Facewash products added successfully!")

if __name__ == "__main__":
    add_facewash()