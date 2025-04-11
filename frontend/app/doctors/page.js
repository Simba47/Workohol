"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../styles/Doctors.css";

export default function Doctors() {
  const [frequency, setFrequency] = useState("weekly");
  const [consultationMode, setConsultationMode] = useState("video");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [skinPlan, setSkinPlan] = useState(null);
  const [products, setProducts] = useState({
    acne: [],
    pigmentation: [],
    dryness: [],
    aging: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8002/api/products/");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();

        // Categorize products based on a 'concern' field or name
        const categorizedProducts = {
          acne: [],
          pigmentation: [],
          dryness: [],
          aging: [],
        };

        data.forEach((product) => {
          const productConcern = product.concern?.toLowerCase() || determineConcernFromName(product.name.toLowerCase());
          if (productConcern) {
            categorizedProducts[productConcern].push({
              id: product.id,
              name: product.name,
              price: product.price,
              description: product.description || "No description available.",
              image: product.image ? `/src/${product.image}` : "https://via.placeholder.com/80?text=Product", // Ensure image is valid
            });
          }
        });

        // Ensure each category has at least 3 products (fallback to hardcoded if needed)
        Object.keys(categorizedProducts).forEach((concern) => {
          if (categorizedProducts[concern].length < 3) {
            categorizedProducts[concern] = getFallbackProducts(concern);
          } else {
            categorizedProducts[concern] = categorizedProducts[concern].slice(0, 3); // Limit to 3 products per category
          }
        });

        setProducts(categorizedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Using default products instead.");
        setProducts({
          acne: [
            { id: 1, name: "SkinSync Clarifying Cleanser", price: 15, description: "Clears pores and reduces oil with 2% salicylic acid.", image: "/src/a1.png" },
            { id: 2, name: "Acne-Control Serum", price: 25, description: "Targets breakouts and prevents future acne.", image: "/src/b1.png" },
            { id: 3, name: "Light Hydrating Moisturizer", price: 20, description: "Non-greasy hydration for acne-prone skin.", image: "/src/c1.jpg" },
          ],
          pigmentation: [
            { id: 4, name: "Gentle Exfoliating Cleanser", price: 18, description: "Removes dead skin cells to reveal brighter skin.", image: "/src/C2.jpg" },
            { id: 5, name: "Vitamin C Brightening Serum", price: 30, description: "Reduces dark spots with 20% Vitamin C.", image: "/src/E1.jpg" },
            { id: 6, name: "Hydrating Day Cream", price: 22, description: "Locks in moisture with SPF 15.", image: "/src/a3.png" },
          ],
          dryness: [
            { id: 7, name: "Creamy Hydrating Cleanser", price: 16, description: "Gently cleanses without stripping moisture.", image: "/src/b10.png" },
            { id: 8, name: "Hyaluronic Acid Serum", price: 28, description: "Boosts hydration for plump, dewy skin.", image: "/src/a11.png" },
            { id: 9, name: "Rich Nourishing Cream", price: 25, description: "Deeply moisturizes for long-lasting comfort.", image: "/src/E8.jpg" },
          ],
          aging: [
            { id: 10, name: "Gentle Exfoliating Cleanser", price: 18, description: "Removes dead skin cells to reveal brighter skin.", image: "/src/C3.jpg" },
            { id: 11, name: "Retinol Night Serum", price: 35, description: "Reduces fine lines with 0.5% retinol.", image: "/src/a4.png" },
            { id: 12, name: "Anti-Aging Day Cream", price: 30, description: "Firms and hydrates with peptides.", image: "/src/E5.jpg" },
          ],
        });
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Helper function to determine concern based on product name
  const determineConcernFromName = (name) => {
    if (name.includes("acne") || name.includes("clarifying") || name.includes("salicylic")) return "acne";
    if (name.includes("brightening") || name.includes("vitamin c") || name.includes("pigmentation")) return "pigmentation";
    if (name.includes("hydrating") || name.includes("hyaluronic") || name.includes("moisturizing")) return "dryness";
    if (name.includes("anti-aging") || name.includes("retinol") || name.includes("aging")) return "aging";
    return null;
  };

  // Fallback products if the API doesn't return enough products
  const getFallbackProducts = (concern) => {
    const fallback = {
      acne: [
        { id: 1, name: "SkinSync Clarifying Cleanser", price: 15, description: "Clears pores and reduces oil with 2% salicylic acid.", image: "/src/a1.png" },
        { id: 2, name: "Acne-Control Serum", price: 25, description: "Targets breakouts and prevents future acne.", image: "/src/b1.png" },
        { id: 3, name: "Light Hydrating Moisturizer", price: 20, description: "Non-greasy hydration for acne-prone skin.", image: "/src/c1.jpg" },
      ],
      pigmentation: [
        { id: 4, name: "Gentle Exfoliating Cleanser", price: 18, description: "Removes dead skin cells to reveal brighter skin.", image: "/src/C2.jpg" },
        { id: 5, name: "Vitamin C Brightening Serum", price: 30, description: "Reduces dark spots with 20% Vitamin C.", image: "/src/E1.jpg" },
        { id: 6, name: "Hydrating Day Cream", price: 22, description: "Locks in moisture with SPF 15.", image: "/src/a3.png" },
      ],
      dryness: [
        { id: 7, name: "Creamy Hydrating Cleanser", price: 16, description: "Gently cleanses without stripping moisture.", image: "/src/b10.png" },
        { id: 8, name: "Hyaluronic Acid Serum", price: 28, description: "Boosts hydration for plump, dewy skin.", image: "/src/a11.png" },
        { id: 9, name: "Rich Nourishing Cream", price: 25, description: "Deeply moisturizes for long-lasting comfort.", image: "/src/E8.jpg" },
      ],
      aging: [
        { id: 10, name: "Gentle Exfoliating Cleanser", price: 18, description: "Removes dead skin cells to reveal brighter skin.", image: "/src/C3.jpg" },
        { id: 11, name: "Retinol Night Serum", price: 35, description: "Reduces fine lines with 0.5% retinol.", image: "/src/a4.png" },
        { id: 12, name: "Anti-Aging Day Cream", price: 30, description: "Firms and hydrates with peptides.", image: "/src/E5.jpg" },
      ],
    };
    return fallback[concern];
  };

  const scrollToQuiz = () => {
    document.getElementById("skin-quiz").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    setShowPopup(false);
  };

  const selectFrequency = (value) => {
    setFrequency(value);
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const concern = formData.get("concern");
    const skinType = formData.get("skin-type");

    let planName = "";
    const selectedProducts = products[concern];

    if (concern === "acne") {
      planName = "Acne Control";
    } else if (concern === "pigmentation") {
      planName = "Brightening Boost";
    } else if (concern === "dryness") {
      planName = "Hydration Restore";
    } else if (concern === "aging") {
      planName = "Age Defense";
    }

    const totalPrice = selectedProducts.reduce((sum, product) => sum + parseFloat(product.price), 0);
    const bundlePrice = Math.round(totalPrice * 0.9);

    const planDetails = {
      planName,
      skinType,
      frequency,
      concern,
      products: selectedProducts,
      totalPrice,
      bundlePrice,
    };

    setSkinPlan(planDetails);
    setShowPopup(true);

    // Add products to the existing cart with the correct structure
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const newCartItems = selectedProducts.map((product) => ({
      name: product.name,
      price: product.price,
      img: product.image || "https://via.placeholder.com/80?text=Product", // Rename 'image' to 'img' and ensure it's a valid string
      quantity: 1,
    }));

    // Merge new items with the existing cart, avoiding duplicates
    const updatedCart = [...currentCart];
    newCartItems.forEach((newItem) => {
      const existingItemIndex = updatedCart.findIndex((item) => item.name === newItem.name);
      if (existingItemIndex !== -1) {
        // If the product already exists, increment the quantity
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        // If the product doesn't exist, add it to the cart
        updatedCart.push(newItem);
      }
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("skinPlan", JSON.stringify(planDetails));
    window.dispatchEvent(new Event("storageUpdated")); // Notify other components (e.g., Navbar)
  };

  const addToCart = () => {
    window.location.href = "/cart";
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleMode = (mode) => {
    setConsultationMode(mode);
  };

  const selectSlot = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert("Appointment confirmed! Check your phone for details.");
    e.target.reset();
    setSelectedSlot(null);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="doctors-page">
      {/* Floating Button */}
      <div className="floating-btn">
        <button className="floating-main-btn">☰</button>
        <div className="floating-options">
          <Link href="/">
            <button className="floating-option-btn">Continue Shopping</button>
          </Link>
          <Link href="/cart">
            <button className="floating-option-btn">Cart</button>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header>
        <h1>Get Clear, Healthy Skin</h1>
        <p>Personalized Skincare Starts Here – Consult a Dermatologist Today</p>
        <button className="cta-btn" onClick={scrollToQuiz}>
          Book Your Free Consultation
        </button>
      </header>

      {/* How It Works */}
      <section id="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Take the Skin Quiz</h3>
            <p>Answer a few questions about your skin.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Consult a Dermatologist</h3>
            <p>Book a free 1:1 video or chat session.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Get Your Custom Plan</h3>
            <p>Receive a tailored skincare routine.</p>
          </div>
        </div>
      </section>

      {/* Skin Quiz */}
      <section id="skin-quiz">
        <h2>Let’s Decode Your Skin</h2>
        <form id="quiz-form" onSubmit={handleQuizSubmit}>
          <div className="quiz-question">
            <label>What’s your primary skin concern?</label>
            <select name="concern" required>
              <option value="">Select</option>
              <option value="acne">Acne</option>
              <option value="pigmentation">Pigmentation</option>
              <option value="dryness">Dryness</option>
              <option value="aging">Aging</option>
            </select>
          </div>
          <div className="quiz-question">
            <label>How would you describe your skin type?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="skin-type" value="oily" required />
                <span>Oily</span>
              </label>
              <label>
                <input type="radio" name="skin-type" value="dry" />
                <span>Dry</span>
              </label>
              <label>
                <input type="radio" name="skin-type" value="combination" />
                <span>Combination</span>
              </label>
              <label>
                <input type="radio" name="skin-type" value="normal" />
                <span>Normal</span>
              </label>
            </div>
          </div>
          <div className="quiz-question frequency-section">
            <label>How often do you experience skin issues?</label>
            <div className="frequency-buttons">
              {["rarely", "weekly", "often", "daily"].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`freq-btn ${frequency === value ? "selected" : ""}`}
                  onClick={() => selectFrequency(value)}
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </button>
              ))}
              <input type="hidden" name="frequency" value={frequency} />
            </div>
          </div>
          <button type="submit" className="cta-btn">
            Get My Skin Plan
          </button>
        </form>
      </section>

      {/* Meet Our Dermatologists */}
      <section id="doctors">
        <h2>Meet Our Dermatologists</h2>
        <div className="doctor-grid">
          <div className="doctor-card">
            <h3>Dr. Priya Sharma</h3>
            <p>Acne & Pigmentation Expert</p>
            <button className="cta-btn small" onClick={scrollToBooking}>
              Book Now
            </button>
          </div>
          <div className="doctor-card">
            <h3>Dr. Anil Gupta</h3>
            <p>Aging & Texture Specialist</p>
            <button className="cta-btn small" onClick={scrollToBooking}>
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking">
        <h2>Pick a Time</h2>
        <div className="booking-options">
          <div className="mode-toggle">
            <button
              className={consultationMode === "video" ? "active" : ""}
              onClick={() => toggleMode("video")}
            >
              Video Call
            </button>
            <button
              className={consultationMode === "chat" ? "active" : ""}
              onClick={() => toggleMode("chat")}
            >
              Chat
            </button>
          </div>
          <div className="time-slots">
            {["10:00 AM", "2:00 PM", "6:00 PM"].map((time) => (
              <button
                key={time}
                className={`slot ${selectedSlot === time ? "selected" : ""}`}
                onClick={() => selectSlot(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <form id="booking-form" onSubmit={handleBookingSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <button type="submit" className="cta-btn">
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Why Choose Celestial Moonlight */}
      <section id="why-choose">
        <h2>Why Choose Celestial Moonlight?</h2>
        <div className="benefits">
          <div className="benefit">
            <strong>Expert-Led</strong> – Top dermatologists at your fingertips.
          </div>
          <div className="benefit">
            <strong>Custom Solutions</strong> – Plans made just for you.
          </div>
          <div className="benefit">
            <strong>Science-Backed</strong> – Proven ingredients, no hype.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <h2>Real Skin, Real Results</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"My acne cleared up in 3 weeks!"</p>
            <span>Priya, 28</span>
          </div>
          <div className="testimonial">
            <p>"Finally, a routine that works for my dry skin."</p>
            <span>Rahul, 34</span>
          </div>
        </div>
      </section>

      {/* Skin Plan Pop-Up */}
      {showPopup && skinPlan && (
        <div id="skin-plan-popup" className="popup" style={{ display: "flex" }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              ×
            </span>
            <h2>Your Personalized Skin Plan</h2>
            <div id="skin-plan-details">
              <h3>Your Skin Plan: {skinPlan.planName}</h3>
              <p>
                Based on your {skinPlan.skinType} skin and {skinPlan.frequency}{" "}
                {skinPlan.concern} issues, here’s your custom plan:
              </p>
              {skinPlan.products.map((product) => (
                <div key={product.id} className="product-item">
                  <img
                    src={product.image || "https://via.placeholder.com/80?text=Product"}
                    alt={product.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                    onError={(e) => {
                      console.error("Failed to load product image:", product.image);
                      e.target.src = "https://via.placeholder.com/80?text=Product";
                    }}
                  />
                  <div className="product-info">
                    <h4>
                      {product.name} (₹{product.price})
                    </h4>
                    <p>{product.description}</p>
                  </div>
                </div>
              ))}
              <p>
                Total: ₹{skinPlan.totalPrice} 
              </p>
            </div>
            <div className="popup-actions">
              <button className="cta-btn" onClick={addToCart}>
                Add to Cart
              </button>
              <button className="cta-btn" onClick={scrollToBooking}>
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}