"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./BannerSlider.module.css";

const BannerSlider = ({ brandName, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const slideDuration = 5000;

  useEffect(() => {
    const autoSlideInterval = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideDuration);
    return () => clearTimeout(autoSlideInterval);
  }, [currentSlide, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.brandName}>{brandName}</div>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{ display: currentSlide === index ? "flex" : "none" }}
            data-slide={index + 1}
          >
            <div className={styles.imageSection}>
              <Image src={slide.imageSrc} alt={slide.heading} fill />
              <div
                className={styles.imageSectionAfter}
                style={{ background: slide.imageSectionAfterBackground }}
              />
            </div>
            <div
              className={styles.textSection}
              style={{ background: slide.textSectionBackground }}
            >
              <h2>{slide.heading}</h2>
              <p>{slide.description}</p>
              <p className={styles.discount}>{slide.discount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? styles.dotActive : styles.dot}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;