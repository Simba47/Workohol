import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from api.models import Product

kits_combos = [
    {"id": 1, "name": "Dot & Key Watermelon CTM Kit | Cleanser 100ml, Toner 150ml, Moisturizer 60ml | For Normal, Combination & Oily Skin | For Oil Free Glowing Skin Care | For Women & Men", "price": 146.00, "image": "b1.jpg"},
    {"id": 2, "name": "Minimalist Oily Skincare Kit | Routine Kit For Women & Men | Face Wash, Serum & Moisturizer Combo | 180g", "price": 199.00, "image": "b2.jpg"},
    {"id": 3, "name": "The Derma Co Anti Acne Skincare Routine Kit For All Skin 1% Salicylic Acid Gel Face Wash+2% Salicylic Acid Serum+1% Hyaluronic Sunscreen Aqua Gel|Broad Spectrum Protection Spf 50 Pa++++|Unisex,3 Count", "price": 250.00, "image": "b3.jpg"},
    {"id": 4, "name": "DOT & KEY Skin Hydration Ctm Kit Liquid Cleanser 100Ml, Toner 150Ml, Moisturizer 60Ml", "price": 146.00, "image": "b4.jpg"},
    {"id": 5, "name": "The Derma Co. Snail Peptide 96 Daily Skincare Combo | Snail Mucin, Niacinamide, Peptide Complex | Intense Hydration | Improves Skin Texture | 24 hrs Moisturization", "price": 199.00, "image": "b5.jpg"},
    {"id": 6, "name": "Nature's Essence CTM Combo - The Ultimate Skincare Trio, Cleansing Milk - Toner - Moisturiser, 300ml", "price": 250.00, "image": "b6.jpg"},
    {"id": 7, "name": "Dr. Sheth's Glow & Sun Protect Duo | Lightweight Sunscreen & Oil-Free Moisturizer Combo | Nourished & Protected Skin | For Normal to Combination Skin | For Men & Women | 50g x 2", "price": 146.00, "image": "b7.jpg"},
    {"id": 8, "name": "Kimayra Skin Care Combo Powder (Pomegranate + Beetroot, Neem + Tulsi, Orange + Papaya, Turmeric + Orange, Sandalwood + Saffron) - Face Pack Combo Powder for Natural Glowing Skin - 375Gm (75G X 5 Pack)", "price": 199.00, "image": "b8.jpg"},
    {"id": 9, "name": "The Face Shop Rice&Ceramide Moisturizing Skincare And Cream Set, 75 Ml (Pack Of 3), Pink", "price": 250.00, "image": "b9.jpg"},
    {"id": 10, "name": "PUREUS Khadi Herbals Skin Glowing Vitamin C Combo Kit For Glowing Skin & Anti Aging Fairness | Day Cream (Spf 25), Vitamin C Face Serum, & Vitamin C Face Wash + Rose Lip Balm (300 Gm)", "price": 146.00, "image": "b10.jpg"},
    {"id": 11, "name": "Cetaphil Gentle Skin Cleanser 125 ml and DAM 100g Combo", "price": 199.00, "image": "b11.jpg"},
    {"id": 12, "name": "Minimalist Sensitive Skincare Kit, Routine Kit For Unisex, Face Wash, Serum & Moisturizer Combo, 200g", "price": 250.00, "image": "b12.jpg"}
]

def add_kits_combos():
    for product in kits_combos:
        Product.objects.get_or_create(
            name=product["name"],
            defaults={
                "price": product["price"],
                "category": "kits_combos",  
                "image": product["image"]
            }
        )
    print("Kits and Combos products added successfully!")

if __name__ == "__main__":
    add_kits_combos()