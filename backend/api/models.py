from django.db import models

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
    image = models.CharField(max_length=255, blank=True)  # Ensure this is here

    def __str__(self):
        return self.name