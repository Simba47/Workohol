"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import "../../styles/Products.css"; // Reuse existing product styling

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Fetch all products from backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8002/api/products/")
      .then((response) => {
        setProducts(response.data);
        filterProducts(response.data, query);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [query]);

  const filterProducts = (allProducts, searchQuery) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (name, price, image) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...currentCart, { name, price, quantity: 1, img: `/src/${image}` }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storageUpdated"));
    alert(`${name} added to cart!`);
  };

  const getImageSrc = (product) => `/src/${product.image}`;

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-5">
        Search Results for "{query}"
      </h1>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found matching "{query}".</p>
      ) : (
        <div className="products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <Image
                src={getImageSrc(product)}
                alt={product.name}
                width={250}
                height={250}
                className="w-full"
              />
              <h2>{product.name}</h2>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product.name, product.price, product.image)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 text-center">
        <Link href="/" className="text-teal-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}