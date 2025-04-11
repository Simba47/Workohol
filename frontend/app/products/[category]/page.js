"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import "../../../styles/Products.css";

// Embedded banner data (previously in bannerData.js)
const facewashSlides = [
  {
    imageSrc: "/src/facewash banner img1.jpg",
    heading: "Glow Up with Facewash",
    description: "Gentle cleansing for a radiant complexion.",
    discount: "20% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #f0e6d2)",
    textSectionBackground: "#f0e6d2",
  },
  {
    imageSrc: "/src/facewash banner img2.jpg",
    heading: "Pure Bliss Facewash",
    description: "Deep clean without drying your skin.",
    discount: "15% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #d4e4f7)",
    textSectionBackground: "#d4e4f7",
  },
  {
    imageSrc: "/src/facewash banner img3.jpg",
    heading: "Fresh Start Facewash",
    description: "Start your day with a fresh glow.",
    discount: "25% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #e2f0cb)",
    textSectionBackground: "#e2f0cb",
  },
];

const sunscreenSlides = [
  {
    imageSrc: "/src/sunscreen banner img1.jpg",
    heading: "Shield with Sunscreen",
    description: "Broad-spectrum protection for all-day safety.",
    discount: "30% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #f7d4d4)",
    textSectionBackground: "#f7d4d4",
  },
  {
    imageSrc: "/src/sunscreen banner img2.jpg",
    heading: "Sun-Proof Your Skin",
    description: "Lightweight, non-greasy SPF 50+.",
    discount: "20% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #d4e4f7)",
    textSectionBackground: "#d4e4f7",
  },
  {
    imageSrc: "/src/sunscreen banner img3.jpg",
    heading: "Daily Sun Defense",
    description: "Protect and nourish with every application.",
    discount: "15% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #e2f0cb)",
    textSectionBackground: "#e2f0cb",
  },
];

const cleanserSlides = [
  {
    imageSrc: "/src/cleanser banner img1.jpg",
    heading: "Pure Cleanse",
    description: "Remove impurities with a gentle touch.",
    discount: "10% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #f0e6d2)",
    textSectionBackground: "#f0e6d2",
  },
  {
    imageSrc: "/src/cleanser banner img2.jpg",
    heading: "Deep Clean Magic",
    description: "Unclog pores for a fresh feel.",
    discount: "20% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #d4e4f7)",
    textSectionBackground: "#d4e4f7",
  },
  {
    imageSrc: "/src/cleanser banner img3.jpg",
    heading: "Glow Cleanse",
    description: "Cleanse and brighten in one step.",
    discount: "15% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #e2f0cb)",
    textSectionBackground: "#e2f0cb",
  },
];

const moisturizerSlides = [
  {
    imageSrc: "/src/moisturizer banner img1.jpg",
    heading: "Hydrate & Glow",
    description: "Lock in moisture for all-day hydration.",
    discount: "25% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #f7d4d4)",
    textSectionBackground: "#f7d4d4",
  },
  {
    imageSrc: "/src/moisturizer banner img2.jpg",
    heading: "Nourish Your Skin",
    description: "Rich moisture without the grease.",
    discount: "20% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #d4e4f7)",
    textSectionBackground: "#d4e4f7",
  },
  {
    imageSrc: "/src/moisturizer banner img3.jpg",
    heading: "Daily Moisture Boost",
    description: "Keep your skin soft and supple.",
    discount: "15% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #e2f0cb)",
    textSectionBackground: "#e2f0cb",
  },
];

const serumSlides = [
  {
    imageSrc: "/src/serum banner img1.jpg",
    heading: "Serum Power",
    description: "Boost your glow with potent actives.",
    discount: "30% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #f0e6d2)",
    textSectionBackground: "#f0e6d2",
  },
  {
    imageSrc: "/src/serum banner img2.jpg",
    heading: "Radiance Serum",
    description: "Target dullness for a vibrant look.",
    discount: "25% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #d4e4f7)",
    textSectionBackground: "#d4e4f7",
  },
  {
    imageSrc: "/src/serum banner img3.jpg",
    heading: "Youthful Glow Serum",
    description: "Hydrate and firm with every drop.",
    discount: "20% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #e2f0cb)",
    textSectionBackground: "#e2f0cb",
  },
];

const kits_combosSlides = [
  {
    imageSrc: "/src/kits banner img1.jpg",
    heading: "Complete Care Kit",
    description: "All you need for a full skincare routine.",
    discount: "40% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #f7d4d4)",
    textSectionBackground: "#f7d4d4",
  },
  {
    imageSrc: "/src/kits banner img2.jpg",
    heading: "Travel Essentials Kit",
    description: "Skincare on the go, perfectly packed.",
    discount: "35% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #d4e4f7)",
    textSectionBackground: "#d4e4f7",
  },
  {
    imageSrc: "/src/kits banner img3.jpg",
    heading: "Glow Kit Combo",
    description: "Get glowing with this curated set.",
    discount: "30% OFF",
    imageSectionAfterBackground: "linear-gradient(to right, transparent, #e2f0cb)",
    textSectionBackground: "#e2f0cb",
  },
];

// Function to get banner data based on category
const getBannerData = (category) => {
  switch (category.toLowerCase()) {
    case "facewash":
      return { slides: facewashSlides, brandName: "Celestial Moonlight" };
    case "sunscreen":
      return { slides: sunscreenSlides, brandName: "Celestial Moonlight" };
    case "cleanser":
      return { slides: cleanserSlides, brandName: "Celestial Moonlight" };
    case "moisturizer":
      return { slides: moisturizerSlides, brandName: "Celestial Moonlight" };
    case "serum":
      return { slides: serumSlides, brandName: "Celestial Moonlight" };
    case "kits_combos":
      return { slides: kits_combosSlides, brandName: "Celestial Moonlight" };
    default:
      return null;
  }
};

export default function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Fetch products from backend
  useEffect(() => {
    if (category) {
      const backendCategory = category.toLowerCase().replace(/-/, "");
      axios
        .get(`http://127.0.0.1:8002/api/products/?category=${backendCategory}`)
        .then((response) => setProducts(response.data))
        .catch((error) => {
          console.error("Error fetching products:", error);
          setProducts([]);
        });
    }
  }, [category]);

  // Banner slider logic
  const bannerData = getBannerData(category);
  const slides = bannerData ? bannerData.slides : [];
  const totalSlides = slides.length;
  const slideDuration = 5000;

  useEffect(() => {
    if (totalSlides > 0) {
      const autoSlideInterval = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, slideDuration);
      return () => clearTimeout(autoSlideInterval);
    }
  }, [currentSlide, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
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

  // Function to render the banner slider
  const renderBanner = () => {
    const normalizedCategory = category ? category.toLowerCase() : "";
    const bannerData = getBannerData(normalizedCategory);
    if (!bannerData || !bannerData.slides || bannerData.slides.length === 0) {
      return null;
    }

    return (
      <div style={styles.sliderContainer}>
        <div style={styles.brandName}>{bannerData.brandName}</div>
        <div style={styles.slider}>
          {bannerData.slides.map((slide, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                display: currentSlide === index ? "flex" : "none",
              }}
              data-slide={index + 1}
            >
              <div style={styles.imageSection}>
                <Image src={slide.imageSrc} alt={slide.heading} fill />
                <div
                  style={{
                    ...styles.imageSectionAfter,
                    background: slide.imageSectionAfterBackground,
                  }}
                />
              </div>
              <div
                style={{
                  ...styles.textSection,
                  background: slide.textSectionBackground,
                }}
              >
                <h2 style={styles.textSectionH2}>{slide.heading}</h2>
                <p style={styles.textSectionP}>{slide.description}</p>
                <p style={styles.discount}>{slide.discount}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.dots}>
          {bannerData.slides.map((_, index) => (
            <span
              key={index}
              style={currentSlide === index ? styles.dotActive : styles.dot}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Render the banner */}
      {renderBanner()}

      <div className="container p-5">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-5 capitalize">
          {category || "Products"}
        </h1>
        <div className="products">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product">
                <Image
                  src={getImageSrc(product)}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full"
                />
                <h2>{product.name}</h2>
                <div className="product-footer">
                  <p>MRP ₹{product.price}</p>
                  <button onClick={() => addToCart(product.name, product.price, product.image)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Inline styles for the banner slider
const styles = {
  sliderContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "none",
    margin: "0 auto",
    overflow: "hidden",
  },
  brandName: {
    position: "absolute",
    top: "20px",
    left: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    zIndex: 10,
  },
  slider: {
    display: "flex",
    width: "100%",
    height: "400px",
  },
  slide: {
    display: "none",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    animation: "fade 1s ease-in-out",
  },
  imageSection: {
    width: "70%",
    height: "100%",
    position: "relative",
  },
  imageSectionAfter: {
    content: "''",
    position: "absolute",
    top: 0,
    right: 0,
    width: "100px",
    height: "100%",
    zIndex: 1,
  },
  textSection: {
    width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  textSectionH2: {
    fontSize: "35px",
    color: "#0b0b0b",
    marginBottom: "10px",
  },
  textSectionP: {
    fontSize: "20px",
    color: "#000000",
    marginBottom: "10px",
  },
  discount: {
    fontSize: "22px",
    color: "#d32f2f",
    fontWeight: "bold",
  },
  dots: {
    textAlign: "center",
    position: "absolute",
    bottom: "20px",
    width: "100%",
  },
  dot: {
    height: "10px",
    width: "10px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 5px",
    cursor: "pointer",
  },
  dotActive: {
    height: "10px",
    width: "10px",
    backgroundColor: "#d32f2f",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 5px",
    cursor: "pointer",
  },
};

// Add keyframes for fade animation using a style tag in the browser
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes fade {
      from { opacity: 0.4; }
      to { opacity: 1; }
    }
    @media (max-width: 768px) {
      .sliderContainer {
        height: 300px;
      }
      .slider {
        height: 300px;
      }
      .textSection {
        justify-content: center;
        text-align: center;
        max-width: 80%;
        padding: 10px;
      }
      .textSection h2 {
        font-size: 24px;
      }
      .textSection p {
        font-size: 16px;
      }
      .dots {
        bottom: 10px;
      }
      .dot, .dotActive {
        width: 8px;
        height: 8px;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}