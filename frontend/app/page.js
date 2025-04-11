"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/src/banner img/promo 1.jpg",
      heading: "Big Sale! Up to 50% Off",
      text: "Don't miss out on our limited-time offer.",
      buttonText: "Shop Now",
    },
    {
      image: "/src/banner img/promo 2.jpg",
      heading: "New Arrivals",
      text: "Explore our latest collection.",
      buttonText: "Discover More",
    },
    {
      image: "/src/banner img/promo 3.jpg",
      heading: "Free Shipping",
      text: "On orders over Rs.400",
      buttonText: "Learn More",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Embedded CSS */}
      <style >{`
      body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
                
    }
a {
    text-decoration: none;
    color: inherit;
    }
/* Promo Banner */

    .promo-banner {
        position: relative;
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
        }
    .banner-container {
        display: flex;
        transition: transform 0.5s ease-in-out;
        width: 100%;
        }
    .banner-slide {
        min-width: 100%; 
        box-sizing: border-box; 
        position: relative;
        }
    .banner-slide img {
        width: 100%;
        height: auto;
        display: block;
        }
    .banner-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.345);
        padding: 20px;
        border-radius: 10px;
        }
    .banner-text h2 {
        font-size: 2.5rem;
        margin: 0;
        }
    .banner-text p {
        font-size: 1.2rem;
        margin: 10px 0;
        }
    .banner-text .btn {
        display: inline-block;
        padding: 10px 20px;
        background-color: #e91e63;
        color: #fff;
        border-radius: 5px;
        text-transform: uppercase;
        font-weight: bold;
        }

    /* Sliding Dots */
    .banner-dots {
        text-align: center;
        position: absolute;
        bottom: 20px;
        width: 100%;
        }
    .dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background-color: #bbb;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;
        }
    .dot.active {
        background-color: #e91e63;
        }
/* Categories Section */
    .categories {
        padding: 40px 20px;
        text-align: center;
        background-color: #f9f9f9;
        flex-wrap: wrap;
    }
    .categories h2 {
        font-size: 28px;
        margin-bottom: 20px;
    }

    .category-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .category-item {
        background-color: #fff;
        padding:20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(2, 104, 19, 0.429);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .category-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    .categories .category-list {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .categories .category-item {
        background-color: #ffffff00;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(131, 3, 62, 0.429);
        width: 200px;
        transition: transform 0.5s ease;
    }

    .category-item img {
        border-radius: 8px;
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .category-item h3 {
        font-size: 18px;
        margin: 10px 0 0;
        color: #333;
    }
/sections/
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
    }
    body {
        background-color: #f8f8f8;
        text-align: center;
        color: #333;
    }
    .section {
        padding: 50px 20px;
        background-color: #fff;
        margin-bottom: 20px;
    }
    .section h1 {
        font-size: 2.2em;
        margin-bottom: 10px;
    }
    .section p {
        font-size: 1.1em;
        color: #666;
    }
    .concern-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        margin-top: 30px;
    }
    .concern-item {
        text-align: center;
        max-width: 150px;
    }
    .concern-item img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ddd;
        transition: transform 0.3s;
    }
    .concern-item img:hover {
        transform: scale(1.1);
        border-color: #e55a88;
    }
    .concern-item h3 {
        margin-top: 10px;
        font-size: 1.1em;
        font-weight: bold;
    }
    .concern-item p {
        font-size: 0.9em;
        color: #666;
    }
    .reasons-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        margin-top: 30px;
    }
    .reason-item {
        text-align: center;
        max-width: 200px;
    }
    .reason-item img {
        width: 60px;
        height: 60px;
    }
    .reason-item p {
        font-size: 1em;
        color: #333;
        margin-top: 10px;
    }
    
    @media (max-width: 768px) {
        .concern-container, .reasons-container {
            flex-direction: column;
            align-items: center;
        }
    }

/* timeline */

.timeline-container {
    text-align: center;
    background: #f8e6f3;
    padding: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.timeline {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
}

.timeline-item {
    text-align: center;
    flex: 1;
}

.icon {
    font-size: 24px;
    margin-bottom: 5px;
}

.highlight {
    color: e91e63;
    font-weight: bold;
}
/* Skincare approach */
body {
    font-family: 'Arial', sans-serif;
    text-align: center;
    background-color: #f8f8f8;
    padding: 20px;
    margin: 0;
}

/* Main Container */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    max-width: 1200px;
    margin: auto;
    background-color: #f4f4f4;
}

/* Text Content */
.content {
    max-width: 600px;
    text-align: center;
}

.subheading {
    font-size: 14px;
    color: #24247b;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
}

.title {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.divider {
    width: 40px;
    height: 2px;
    background-color: #333;
    margin: 10px auto;
}

.highlight {
    font-size: 18px;
    font-weight: bold;
    color: #e91e63;
    margin-bottom: 15px;
}

.description {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 20px;
}

/* Call-To-Action Button */
.cta-button {
    background-color: #e91e63;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold; 
    cursor: pointer;
    transition: 0.3s ease;
}

.cta-button:hover {
    background-color: #991742;
}

/* Left Image (Skincare Bottle) */
.left-image {
    position: absolute;
    left: 0;
    bottom: 10%;
    width: 250px;
}

.left-image img {
    width: 100%;
}

/* Right Image (Serum) */
.right-image {
    position: absolute;
    right: 0;
    top: 10%;
    width: 200px;
}

.right-image img {
    width: 100%;
}


/* Footer */
    .footer {
        background-color: #333;
        color: white;
        padding: 20px;
        text-align: center;
        }
    .footer a {
        color: #e91e63;
        }
     `}</style>

      {/* Navbar Placeholder */}
      <div id="navbar-placeholder"></div>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="banner-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="banner-slide">
              <Image
                src={slide.image}
                alt={`Promo ${index + 1}`}
                width={1200}
                height={400}
                className="banner-image"
              />
              <div className="banner-text">
                <h2>{slide.heading}</h2>
                <p>{slide.text}</p>
                <Link href="#" className="btn">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="banner-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Categories */}
      <div className="categories">
        <h2 style={{ color: "#000000" }}>Shop By Category</h2>
        <div className="category-list">
          <div className="category-item" onClick={() => (window.location.href = "/products/sunscreen")}>
            <Image src="/src/Categories img/sunscreen.jpg" alt="SunScreen" width={200} height={150} />
            <h3>SunScreen</h3>
          </div>
          <div className="category-item" onClick={() => (window.location.href = "/products/cleanser")}>
            <Image src="/src/Categories img/cleanser.jpg" alt="Cleanser" width={200} height={150} />
            <h3>Cleanser</h3>
          </div>
          <div className="category-item" onClick={() => (window.location.href = "/products/serum")}>
            <Image src="/src/Categories img/serums.jpg" alt="Serum" width={200} height={150} />
            <h3>Serum</h3>
          </div>
          <div className="category-item" onClick={() => (window.location.href = "/products/moisturizers")}>
            <Image src="/src/Categories img/Moisturizers.jpg" alt="Moisturizers" width={200} height={150} />
            <h3>Moisturizers</h3>
          </div>
          <div className="category-item" onClick={() => (window.location.href = "/products/kits-combos")}>
            <Image src="/src/Categories img/kits combos.jpg" alt="Kits & Combos" width={200} height={150} />
            <h3>Kits & Combos</h3>
          </div>
          <div className="category-item"  onClick={() => (window.location.href = "/products/facewash")}>
            <Image src="/src/Categories img/facewash.jpg" alt="Kits & Combos" width={200} height={150} />
            <h3>Facewash</h3>
          </div>
          
        </div>
      </div>

      {/* Skincare Approach */}
      <div className="container">
        <div className="content">
          <p className="subheading">HOLISTIC SKINCARE PLAN</p>
          <h2 className="title">The Skincare Formula</h2>
          <div className="divider"></div>
          <p className="highlight">DERMATOLOGY + AYURVEDA + SCIENCE</p>
          <p className="description">
            Our skincare approach blends modern dermatology with Ayurvedic wisdom. Using clinically proven ingredients,
            we create personalized skincare solutions for healthy, glowing skin.
          </p>
          <Link href="/doctors" className="cta-button">
            TAKE THE SKIN TEST
          </Link>
        </div>
        <div className="left-image">
          <Image src="/src/Categories img/sunscreen.jpg" alt="Skincare Bottle" width={250} height={250} />
        </div>
        <div className="right-image">
          <Image src="/src/Categories img/cleanser.jpg" alt="Skincare Serum" width={200} height={200} />
        </div>
      </div>

      {/* Skincare Concerns */}
      <section className="section">
        <h1>Make the Best Choice</h1>
        <p>Select the concern you’re facing, and find the best skincare products.</p>
        <div className="concern-container">
          <div className="concern-item">
            <Image src="/src/skincare Concerns/Dullness.jpg" alt="Dullness" width={100} height={100} />
            <h3>Dullness</h3>
            <p>Brighten, refresh, and moisturize</p>
          </div>
          <div className="concern-item">
            <Image src="/src/skincare Concerns/Acne.jpg" alt="Acne" width={100} height={100} />
            <h3>Acne</h3>
            <p>Treat, exfoliate, and hydrate</p>
          </div>
          <div className="concern-item">
            <Image src="/src/skincare Concerns/Pigmentation.jpg" alt="Pigmentation" width={100} height={100} />
            <h3>Pigmentation</h3>
            <p>Lighten, exfoliate, and protect</p>
          </div>
          <div className="concern-item">
            <Image src="/src/skincare Concerns/Anti Ageing.jpg" alt="Anti Aging" width={100} height={100} />
            <h3>Anti Ageing</h3>
            <p>Rejuvenate and reverse aging</p>
          </div>
          <div className="concern-item">
            <Image src="/src/skincare Concerns/Dryness.jpg" alt="Dryness" width={100} height={100} />
            <h3>Dryness</h3>
            <p>Hydrate and protect from sun</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div className="timeline-container">
        <h3>
          Start Seeing Results In <span className="highlight">5 Months</span>
        </h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="icon">💧</div>
            <p>
              <strong>Month 3</strong>
              <br />Control, Improving Skin Barrier
            </p>
          </div>
          <div className="timeline-item">
            <div className="icon">🌿</div>
            <p>
              <strong>Month 4</strong>
              <br />Even Skin Tone & Hydration
            </p>
          </div>
          <div className="timeline-item">
            <div className="icon">✨</div>
            <p>
              <strong>Month 5</strong>
              <br />Reduced Acne & Fine Lines
            </p>
          </div>
          <div className="timeline-item">
            <div className="icon">🌟</div>
            <p>
              <strong>Month 6</strong>
              <br />Glowing & Healthy Skin
            </p>
          </div>
        </div>
      </div>

      {/* Skincare Solutions */}
      <section className="section">
        <h1>DermaCure's Skin care Solutions</h1>
        <div className="concern-container">
          <div className="concern-item">
            <Image src="/src/skincare solutions/moisturizer.jpg" alt="Moisturizers" width={100} height={100} />
            <h3>Moisturizers</h3>
          </div>
          <div className="concern-item">
            <Image src="/src/skincare solutions/serum.jpg" alt="Serum" width={100} height={100} />
            <h3>Serum</h3>
          </div>
          <div className="concern-item">
            <Image src="/src/skincare solutions/Sunscreen.jpg" alt="Sunscreen" width={100} height={100} />
            <h3>Sunscreen</h3>
          </div>
          <div className="concern-item">
            <Image src="/src/skincare solutions/cleanser.jpg" alt="Cleanser" width={100} height={100} />
            <h3>Cleanser</h3>
          </div>
        </div>
      </section>

      {/* Reasons to Believe */}
      <section className="section">
        <h1>Reasons to Believe</h1>
        <div className="reasons-container">
          <div className="reason-item">
            <Image src="/src/reasons to believe img/For Indian Skin.jpg" alt="For Indian Skin" width={60} height={60} />
            <p>Researched and developed for Indian skin</p>
          </div>
          <div className="reason-item">
            <Image src="/src/reasons to believe img/100 safe.jpg" alt="100% Safe" width={60} height={60} />
            <p>Dermatologically tested to be 100% safe</p>
          </div>
          <div className="reason-item">
            <Image
              src="/src/reasons to believe img/Dermatologically Tested.jpg"
              alt="Dermatologist Tested"
              width={60}
              height={60}
            />
            <p>Great dermatology expertise</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="footer">
        <p>
          © DermaCure. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
    </div>
  );
}