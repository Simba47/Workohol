import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from api.models import Product

moisturizers = [
    {"name": "Simple - Kind To Skin Hydrating Light Moisturizer All Skin Types Moisturizer (125ml)", "price": 419.00, "image": "a1.jpg"},
    {"name": "Cetaphil Moisturising Lotion For Dry To Normal Sensitive Skin", "price": 619.00, "image": "a2.jpg"},
    {"name": "Ponds Youthful Miracle Anti Aging Night Cream With Retinol C Niacinamide (50gm)", "price": 250.00, "image": "a3.jpg"},
    {"name": "Ponds Super Light Gel Oil-Free Moisturize With Hyaluronic Acid & Vitamin E (300g)", "price": 570.00, "image": "a4.jpg"},
    {"name": "Olay Regenerist Micro Sculpting Day Cream For Plump & Bouncy Skin With Hyaluronic Acid & Niacinamide (50gm)", "price": 420.00, "image": "a5.jpg"},
    {"name": "Dot & Key Hyaluronic + Ceramide Barrier Repair Hydrating Face Moisturizer Ph 5.5 Cream, Normal To Dry Skin(100g)", "price": 399.00, "image": "a6.jpg"},
    {"name": "Vaseline Deep Moisture Serum In Lotion, 400 ml | Enriched with Glycerin for Nourished Soft Skin", "price": 346.00, "image": "a7.jpg"},
    {"name": "Minimalist 10% Vitamin B5 Gel Face Moisturizer For Oily & Acne Prone Skin | Oil-free", "price": 199.00, "image": "a8.jpg"},
    {"name": "The Derma Co Oil-Free Daily Face Moisturizer | With Hyaluronic Acid, Ceramides & Multivitamins for Non-Greasy & Hydrated Skin 100g", "price": 250.00, "image": "a9.jpg"},
    {"name": "NIVEA Nourishing Body Milk 600ml Body Lotion | 48 H Moisturization | With 2X Almond Oil", "price": 146.00, "image": "a10.jpg"},
    {"name": "DOT & KEY Cica + Niacinamide Oil Free Moisturizer For Acne Prone Skin Oil Free & Lightweight Fades Dark Spots & Blemishes, 50Gm", "price": 199.00, "image": "a11.jpg"},
    {"name": "Foxtale Nourishing Face Moisturizer with Niacinamide for 24 Hr Hydration, Lightweight & Non-Sticky, 50 ml", "price": 250.00, "image": "a12.jpg"}
]

def add_moisturizers():
    for product in moisturizers:
        Product.objects.get_or_create(
            name=product["name"],
            defaults={
                "price": product["price"],
                "category": "moisturizer",
                "image": product["image"]
            }
        )
    print("Moisturizer products added successfully!")

if __name__ == "__main__":
    add_moisturizers()