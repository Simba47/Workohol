# Generated by Django 5.1.6 on 2025-02-28 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('sunscreen', 'Sunscreen'), ('moisturizer', 'Moisturizer'), ('cleanser', 'Cleanser'), ('serum', 'Serum'), ('kits-combos', 'Kits and Combos')], default='sunscreen', max_length=50),
        ),
    ]
