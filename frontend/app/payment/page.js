"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Payment() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [upiId, setUpiId] = useState("");
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [notification, setNotification] = useState(false);
  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    addressLine1: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    const total = storedCart
      .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);
    setTotalPrice(total);
  }, []);

  const handleAddressChange = (e) => {
    const { id, value } = e.target;
    console.log(`Changing: ${id} to: ${value}`);
    setAddress((prev) => ({ ...prev, [id]: value }));
  };

  const confirmAddress = () => {
    const { fullName, mobile, pincode, addressLine1, city, state } = address;
    console.log("Address state:", address);
    if (!fullName || !mobile || !pincode || !addressLine1 || !city || !state) {
      alert("Please fill in all required address fields.");
      return;
    }
    setAddressConfirmed(true);
    alert("Address confirmed! You can now select a payment method.");
  };

  const verifyUPI = () => {
    const upiRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;
    if (!upiRegex.test(upiId)) {
      alert("Invalid UPI ID. Please enter a valid UPI ID in the format name/phone number@bankname.");
      return;
    }
    alert("UPI ID verified! A payment request has been sent to your UPI ID.");
  };

  const proceedToPayment = () => {
    setNotification(true);
    setTimeout(() => {
      if (paymentMethod === "UPI") {
        if (!upiId) {
          alert("Please enter and verify your UPI ID.");
          setNotification(false);
          return;
        }
        alert("Payment request sent to your UPI ID. Please complete the payment in your UPI app.");
      } else if (paymentMethod === "Credit Card") {
        window.location.href = "__";
      } else if (paymentMethod === "PayPal") {
        window.location.href = "__";
      } else if (paymentMethod === "Cash on Delivery") {
        alert("Order placed successfully! You will pay on delivery.");
        window.location.href = "/products/moisturizer";
        localStorage.removeItem("cart");
      }
      setNotification(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Payment</h1>
      <div className="total-cost">Total Price: ₹{totalPrice}</div>
      <div>
        <h1>Shipping Address</h1>
      </div>
      <div className="address-section">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            value={address.fullName}
            onChange={handleAddressChange}
            suppressHydrationWarning
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            placeholder="Enter your mobile number"
            value={address.mobile}
            onChange={handleAddressChange}
            suppressHydrationWarning
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            placeholder="Enter your pincode"
            value={address.pincode}
            onChange={handleAddressChange}
            suppressHydrationWarning
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
            value={address.city}
            onChange={handleAddressChange}
            suppressHydrationWarning
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="addressLine1">Address Line</label>
          <input
            type="text"
            id="addressLine1"
            placeholder="Enter your address line"
            value={address.addressLine1}
            onChange={handleAddressChange}
            suppressHydrationWarning
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            placeholder="Enter your state"
            value={address.state}
            onChange={handleAddressChange}
            suppressHydrationWarning
          />
        </div>
        <div className="save-address full-width">
          <input type="checkbox" id="save-address" suppressHydrationWarning />
          <label htmlFor="save-address">Save this address for future use</label>
        </div>
      </div>
      <button
        className="confirm-btn"
        onClick={confirmAddress}
        suppressHydrationWarning
      >
        Confirm Address
      </button>
      <div className={`payment-method ${addressConfirmed ? "enabled" : ""}`}>
        <label>Payment Method</label>
        <div className="payment-method-option">
          <input
            type="radio"
            name="payment"
            id="upi"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={() => setPaymentMethod("UPI")}
            suppressHydrationWarning
          />
          <label htmlFor="upi">UPI (GPay, PhonePe, Paytm)</label>
        </div>
        <div className="payment-method-option">
          <input
            type="radio"
            name="payment"
            id="credit-card"
            value="Credit Card"
            checked={paymentMethod === "Credit Card"}
            onChange={() => setPaymentMethod("Credit Card")}
            suppressHydrationWarning
          />
          <label htmlFor="credit-card">Credit Card</label>
        </div>
        <div className="payment-method-option">
          <input
            type="radio"
            name="payment"
            id="paypal"
            value="PayPal"
            checked={paymentMethod === "PayPal"}
            onChange={() => setPaymentMethod("PayPal")}
            suppressHydrationWarning
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="payment-method-option">
          <input
            type="radio"
            name="payment"
            id="cod"
            value="Cash on Delivery"
            checked={paymentMethod === "Cash on Delivery"}
            onChange={() => setPaymentMethod("Cash on Delivery")}
            suppressHydrationWarning
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>

        {paymentMethod === "UPI" && (
          <div className="upi-details">
            <input
              type="text"
              id="upi-id"
              placeholder="Please enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              suppressHydrationWarning
            />
            <div className="upi-format">The UPI ID is in the format of name/phone number@bankname</div>
            <button
              className="verify-btn"
              onClick={verifyUPI}
              suppressHydrationWarning
            >
              Verify UPI ID
            </button>
          </div>
        )}
        {paymentMethod === "Credit Card" && (
          <div className="payment-details">
            <input
              type="text"
              placeholder="Card Number"
              suppressHydrationWarning
            />
            <input
              type="text"
              placeholder="Expiry Date"
              suppressHydrationWarning
            />
            <input
              type="text"
              placeholder="CVV"
              suppressHydrationWarning
            />
          </div>
        )}
        {paymentMethod === "PayPal" && (
          <div className="payment-details">
            <p>Click "Proceed to Payment" to redirect to PayPal.</p>
          </div>
        )}
        {paymentMethod === "Cash on Delivery" && (
          <div className="payment-details">
            <p>Payment will be collected on delivery.</p>
          </div>
        )}
      </div>
      <button
        className="confirm-btn"
        onClick={proceedToPayment}
        disabled={!addressConfirmed}
        suppressHydrationWarning
      >
        Proceed to Payment
      </button>
      <div>
        <Link href="/products/moisturizer" legacyBehavior>
          <a className="continue-shopping">Continue Shopping</a>
        </Link>
      </div>
      <div className={`notification ${notification ? "active" : ""}`}>
        Payment confirmed! Redirecting to payment gateway...
      </div>

      <style jsx>{`
        .container {
          width: 100%; /* Full width */
          height: 100vh; /* Full viewport height */
          margin: 0; /* Remove default margin */
          padding: 20px; /* Keep some padding for content spacing */
          background: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 0; /* Remove rounding for edge-to-edge look */
          box-sizing: border-box; /* Ensure padding doesn't overflow */
        }
        h1 {
          font-size: 28px;
          color: #0F1111;
          margin-bottom: 20px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        .total-cost {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
          text-align: left;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
        }
        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          color: #000;
          background-color: #fff;
        }
        .form-group input:focus {
          border-color: #00ff51;
          box-shadow: 0 0 5px rgba(9, 161, 68, 0.5);
          outline: none;
        }
        .address-section {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }
        .address-section .form-group {
          flex: 1 1 calc(50% - 15px);
        }
        .address-section .form-group.full-width {
          flex: 1 1 100%;
        }
        .save-address {
          margin-bottom: 20px;
        }
        .confirm-btn {
          background-color: #218838;
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          width: 100%;
        }
        .confirm-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .payment-method {
          margin-bottom: 20px;
          opacity: 0.5;
          pointer-events: none;
        }
        .payment-method.enabled {
          opacity: 1;
          pointer-events: auto;
        }
        .payment-method > label {
          display: block;
          margin-top: 20px; /* Space above "Payment Method" */
          margin-bottom: 20px; /* Space below "Payment Method" */
          font-weight: bold;
          font-size: 18px; /* Optional: Slightly larger for emphasis */
        }
        .payment-method-option {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .payment-method-option label {
          font-weight: bold;
        }
        .upi-details, .payment-details {
          margin-top: 10px;
          padding-left: 24px;
        }
        .upi-details input, .payment-details input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .upi-format {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
        }
        .verify-btn {
          background-color: #28a745;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .continue-shopping {
          background-color: #28a745;
          color: white;
          padding: 10px 15px;
          border-radius: 5px;
          text-decoration: none;
          display: inline-block;
          margin-top: 20px;
        }
        .notification {
          display: none;
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #232F3E;
          color: white;
          padding: 15px;
          border-radius: 4px;
        }
        .notification.active {
          display: block;
        }
      `}</style>
    </div>
  );
}