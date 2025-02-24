import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Dr. Alies Daily Sunscreen', price: 146.00, image: '/E1.jpg' },
  { id: 2, name: 'Sunblock SPF 50', price: 199.00, image: '/E2.jpg' },
  { id: 3, name: 'Ultra UV Defense', price: 250.00, image: '/E3.jpg' },
  { id: 4, name: 'The Skin Story Moringa Sunscreen SPF 50+(100g) ', price: 132.00, image: '/E4.jpg' },
  { id: 5, name: 'Detan+ Dewy Sunscreen - 50 g (Pack of 3)', price: 1499.00, image: '/E5.jpg' },
  { id: 6, name: 'Wishcare Spf50 Sunscreen Body Lotion - Broad Spectrum - Uva & Uvb Protection | No White Cast (200ml)', price: 399.00, image: '/E6.jpg' },
  { id: 7, name: 'Sunscreen Anti-Tan Lotion for all skin type With UVA+UVB Protection and Light Weight & Non Greasy Sunscreen Protection', price: 299.00, image: '/E7.jpg' },
  { id: 8, name: 'MC Mama Ultra Light Natural Sunscreen Lotion - 60g', price: 369.00, image: '/E8.jpg' },
  { id: 9, name: 'Assure Natural Sunscreen SPF 40+', price: 435.00, image: '/E9.jpg' },
  { id: 10, name: 'Aroma Magic Carrot Sunscreen Lotion SPF 15 UVA/UVB (50ml) - Niram Global Private Limited', price: 99.00, image: '/E10.jpg' },
  { id: 11, name: 'CLEAR FACE® Sunscreen Lotion SPF 50 | NEUTROGENA®', price: 599.00, image: '/E11.jpg' },
  { id: 12, name: 'Biofaith Sunsheer - Best Sunscreen Lotion For All Skin Types SPF-50 (50G)', price: 319.00, image: '/E12.jpg' }
];

export default function Products({ addToCart }) {
  return (
    <div className="container">
      <h1>Sunscreen Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
