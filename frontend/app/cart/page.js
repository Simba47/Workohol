"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += change;
    if (updatedCart[index].quantity < 1) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2);

  const proceedToPayment = () => {
    window.location.href = "/payment"; // Adjust route as needed
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index}>
                  <td className="cart-item">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={50}
                      height={50}
                      style={{ verticalAlign: "middle", marginRight: "10px" }}
                    />
                    {item.name}
                  </td>
                  <td>₹{item.price}</td>
                  <td className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(index, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(index, 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {cart.length > 0 && (
          <h2 style={{ marginTop: "20px" }}>Total Price: ₹{totalPrice}</h2>
        )}
      </div>
      <Link href="/products/sunscreen" legacyBehavior>
        <a className="continue-shopping">Continue Shopping</a>
      </Link>
      <button onClick={proceedToPayment} className="payment-btn">
        Proceed to Payment
      </button>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 20px auto;
          padding: 20px;
          background: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .cart-container {
          max-width: 1200px;
          margin: 20px auto;
          padding: 20px;
          background: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        h1 {
          color: #333;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }

        th {
          background-color: #28a745;
          color: white;
        }

        button, .continue-shopping {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1em;
          text-decoration: none;
          display: inline-block;
        }

        button:hover, .continue-shopping:hover {
          background-color: #218838;
          transform: scale(1.05);
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px; /* Adds gap between buttons and number */
        }

        .quantity-btn {
          width: 30px; /* Fixed width for uniform size */
          height: 30px; /* Fixed height for uniform size */
          padding: 0; /* Remove padding to rely on fixed size */
          cursor: pointer;
          background-color: #218838;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1em; /* Consistent font size */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quantity-btn:hover {
          background-color: #1e7e34;
        }

        .cart-item img {
          width: 50px;
          height: 50px;
          object-fit: scale-down;
          margin-right: 10px;
          vertical-align: middle;
        }

        .payment-btn {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease, transform 0.2s ease;
          border-radius: 5px;
          margin-left: 10px;
        }

        .payment-btn:hover {
          background-color: #45a049;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}