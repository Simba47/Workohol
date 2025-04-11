"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8002/api/products/");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllProducts([
          { id: 1, name: "Sunscreen" },
          { id: 2, name: "Moisturizer" },
          { id: 3, name: "Cleanser" },
          { id: 4, name: "Serum" },
          { id: 5, name: "Kits and Combos" },
        ]);
      }
    };
    fetchProducts();

    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };
    updateCartCount();
    window.addEventListener("storageUpdated", updateCartCount);
    return () => window.removeEventListener("storageUpdated", updateCartCount);
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleResultClick = (resultName) => {
    setSearchQuery("");
    setSearchResults([]);
    window.location.href = `/search?q=${encodeURIComponent(resultName)}`;
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/about">Celestial Moonlight</Link>
      </div>
      <div className="nav-links">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Products</button>
          <div className="dropdown-content">
            <Link href="/products/sunscreen">Sunscreen</Link>
            <Link href="/products/moisturizer">Moisturizer</Link>
            <Link href="/products/cleanser">Cleanser</Link>
            <Link href="/products/serum">Serum</Link>
            <Link href="/products/kits_combos">Kits and Combos</Link>
            <Link href="/products/facewash">facewash</Link>
          </div>
        </div>
        <Link href="/doctors">Doctor Appointment</Link>
        <form onSubmit={handleSearchSubmit} className="search-bar">
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="search-bar-input"
            />
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={`/search?q=${encodeURIComponent(result.name)}`}
                    className="search-result-item"
                    onClick={() => handleResultClick(result.name)}
                  >
                    {result.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="search-bar-button">
            🔍
          </button>
        </form>
        <Link href="/cart" className="cart-icon">
          <ShoppingCartIcon className="h-6 w-6 mr-1" />
          <span>Cart</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgb(61, 47, 47);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: top 0.3s ease;
        }
        .navbar.visible {
          top: 0;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #000000;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #08812c;
        }
        .search-bar {
          display: flex;
          align-items: center;
          position: relative;
        }
        .search-container {
          position: relative;
        }
        .search-bar-input {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-right: 5px;
          width: 200px;
        }
        .search-bar-button {
          padding: 8px 12px;
          background-color: #ffffff00;
          color: #333;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .search-bar-button:hover {
          background-color: #1b6f2959;
        }
        .search-results {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #fff;
          min-width: 200px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          border-radius: 5px;
          overflow: hidden;
        }
        .search-result-item {
          color: #333;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          transition: background-color 0.3s ease;
        }
        .search-result-item:hover {
          background-color: #f9f9f9;
        }
        .cart-icon {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          color: #333;
          font-weight: 500;
        }
        .cart-count {
          background-color: #0c9936;
          color: #fff;
          padding: 2px 6px;
          border-radius: 50%;
          font-size: 0.8rem;
        }
        .dropdown {
          position: relative;
          display: inline-block;
        }
        .dropbtn {
          background-color: transparent;
          color: #333;
          padding: 10px;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .dropbtn:hover {
          color: #ff6f61;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #fff;
          min-width: 160px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          border-radius: 5px;
          overflow: hidden;
        }
        .dropdown:hover .dropdown-content {
          display: block;
        }
        .dropdown-content a {
          color: #333;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          transition: background-color 0.3s ease;
        }
        .dropdown-content a:hover {
          background-color: #f9f9f9;
        }
      `}</style>
   

      <style jsx global>{`
      body {
          padding-top: 60px; /* Adjust this value based on navbar height */
        }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(66, 64, 64, 0.1);
    z-index: 1000;
    border-radius: 5px;
    overflow: hidden;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-content a {
    color: #333;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;
  }
  .dropdown-content a:hover {
    background-color: #f9f9f9;
  }
`}</style>
    
    </nav>
  );
}
