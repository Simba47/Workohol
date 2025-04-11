import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from api.models import Product

serums = [
    {"id": 1, "name": "The Derma Co Oil Control 10% Niacinamide Face Serum With Zinc | Fades Acne Marks & Dark Spots", "price": 224.00, "image": "D1.jpg"},
    {"id": 2, "name": "Mamaearth Vitamin C Daily Glow Face Serum | Tumeric, Niacinamide For Skin Brightening - 30ml", "price": 338.00, "image": "D2.jpg"},
    {"id": 3, "name": "Estee Lauder Advanced Night Repair Synchronized Multi Recovery Complex Mini Serum -7ml", "price": 1650.00, "image": "D3.jpg"},
    {"id": 4, "name": "Lakme 8 to 5 Vitamin C + Face Serum - 15 ml", "price": 200.00, "image": "D4.jpg"},
    {"id": 5, "name": "Loreal Paris Glycolic Bright 8% [Melasyl + Niacinamide] Face Serum For Brightening Dark Spots 15 ml", "price": 326.00, "image": "D5.jpg"},
    {"id": 6, "name": "Plum 5% Niacinamide Serum With Rice Water for Bright Skin | For Blemish-Free 7 Smooth Skkin | All Skin Types|", "price": 520.00, "image": "D6.jpg"},
    {"id": 7, "name": "Gariner Skin naturals , Face Serum, Brightening And Anti Dark Spots; Bright Complete Vitamin C Booster", "price": 365.00, "image": "D7.jpg"},
    {"id": 8, "name": "Pilgrim Red Vine Serum With Peptides & Hyaluronic Acid For Anti Ageing & Growing Skin - 30ml", "price": 510.00, "image": "D8.jpg"},
    {"id": 9, "name": "Lakm 7% Niacinamide Complex Perfect Radiance Anti Pigmentation Serum 2x Brighter Skin", "price": 310.00, "image": "D9.jpg"},
    {"id": 10, "name": "Dot & Key Hydrating Hyaluronic Acid Serum With Vitamin C + E | For Plump, Glowing Skin | with Ceramide & Acai Berry | 30ml", "price": 488.00, "image": "D10.jpg"},
    {"id": 11, "name": "Cetaphil Bright Healthy Radiance perfecting Serum 30 ml", "price": 782.00, "image": "D11.jpg"},
    {"id": 12, "name": "Glossier Super Glow Vitamin C Brightening Face Serum with magnesium 30ml", "price": 365.00, "image": "D12.jpg"}
]

def add_serums():
    for product in serums:
        Product.objects.get_or_create(
            name=product["name"],
            defaults={
                "price": product["price"],
                "category": "serum",  # Match your model's category choice
                "image": product["image"]
            }
        )
    print("Serum products added successfully!")

if __name__ == "__main__":
    add_serums()