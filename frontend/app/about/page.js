"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/About.css"; // We'll extract the CSS into a separate file

export default function About() {
  // Smooth scrolling and active link highlighting
  useEffect(() => {
    // Smooth Scrolling
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 40,
          behavior: "smooth",
        });
      }

      // Highlight active link
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // Highlight active link on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 40;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     
      {/* Our Mission Section */}
      <section className="mission" id="mission">
        <div className="section-content">
          <Image
            src="/src/our mission image.jpg"
            alt="Our Mission"
            width={720} // 60% of 1200px
            height={450}
            style={{ objectFit: "cover" }}
          />
          <div className="content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower individuals with healthier, radiant skin
              by providing high-quality skincare products and expert
              dermatological guidance. We believe that skincare is not just about
              beauty—it&apos;s about confidence, well-being, and self-care.
              Through a seamless online experience, we connect users with trusted
              dermatologists and scientifically formulated products tailored to
              their unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="philosophy" id="philosophy">
        <div className="section-content">
          <div className="content">
            <h2>Our Philosophy</h2>
            <p>
              Skincare is about nurturing and protecting your skin with a simple,
              consistent routine. Prioritizing hydration, sun protection, and
              gentle ingredients helps maintain a healthy, radiant complexion.
              Instead of chasing trends, focus on what works for your unique skin
              type and needs. A balanced lifestyle, including proper sleep and
              nutrition, enhances your skin’s natural glow.
            </p>
          </div>
          <Image
            src="/src/our philosophy image.jpg"
            alt="Our Philosophy"
            width={720}
            height={450}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Why Celestial Moonlight Section */}
      <section className="why" id="why">
        <div className="section-content">
          <Image
            src="/src/Celestial Moonlight image.jpg"
            alt="Why Celestial Moonlight"
            width={720}
            height={450}
            style={{ objectFit: "cover" }}
          />
          <div className="content">
            <h2>Why Celestial Moonlight</h2>
            <p>
              Celestial Moonlight is more than just skincare—it’s a cosmic ritual
              for your skin. Inspired by the serene glow of the moon and the
              vastness of the heavens, our brand harnesses the power of nature and
              science to illuminate your natural beauty. We believe that radiant
              skin begins with the gentle, transformative energy of moonlight,
              captured in every product. From soothing botanicals to cutting-edge
              formulations, Celestial Moonlight offers a celestial escape,
              nourishing your skin with the purity of the universe. Elevate your
              routine and shine like the stars—because your skin deserves the
              magic of the cosmos.
            </p>
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="founder" id="founder">
        <div className="section-content">
          <div className="content">
            <h2>Our Founder</h2>
            <p>
              Celestial Moonlight was born from a vision to blend the mystique of
              the cosmos with the science of skincare. Our founder, a dreamer and
              innovator, was inspired by the moon’s timeless glow and its power to
              illuminate the night. With a deep passion for holistic beauty and
              years of expertise in natural formulations, they set out to create a
              skincare line that nurtures both skin and soul. Driven by a belief
              that true radiance comes from harmony with nature, they harnessed
              celestial-inspired ingredients and cutting-edge techniques to craft
              products that transform and uplift. Today, Celestial Moonlight
              reflects their mission: to bring the magic of the universe to your
              daily ritual, revealing your skin’s luminous potential.
            </p>
          </div>
          <Image
            src="/src/our founder image.jpg"
            alt="Our Founder"
            width={720}
            height={450}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Our R&D Experts Section */}
      <section className="rnd" id="rnd">
        <div className="section-content">
          <Image
            src="/src/R&D Experts image.jpg"
            alt="R&D Experts"
            width={720}
            height={450}
            style={{ objectFit: "cover" }}
          />
          <div className="content">
            <h2>Our R&D Experts</h2>
            <p>
              At Celestial Moonlight, our Research & Development team is the heart
              of our cosmic craft. Comprising brilliant scientists,
              dermatologists, and botanical specialists, our experts blend
              cutting-edge skincare technology with the wisdom of nature’s finest
              ingredients. Inspired by the moon’s radiant energy and the mysteries
              of the universe, they tirelessly explore innovative formulations to
              deliver transformative results. Every product is a testament to their
              dedication—meticulously tested, thoughtfully designed, and infused
              with celestial essence to enhance your skin’s natural glow. With a
              passion for excellence and a commitment to sustainability, our R&D
              team ensures that Celestial Moonlight shines as brightly as the stars
              it draws inspiration from.
            </p>
          </div>
        </div>
      </section>

      {/* A Note from Our Founder Section */}
      <section className="note" id="note">
        <div className="section-content">
          <div className="content">
            <h2>A Note from Our Founder</h2>
            <p>
              &quot;When I first dreamed of Celestial Moonlight, I was gazing at
              the night sky, captivated by the moon’s gentle glow—a quiet reminder
              of beauty, resilience, and renewal. That moment sparked a vision: to
              create skincare that doesn’t just care for your skin but elevates it,
              reflecting the radiance of the cosmos. I’ve always believed that true
              beauty shines from within, nurtured by nature’s gifts and refined by
              science. With Celestial Moonlight, my goal was to craft a ritual that
              feels like a celestial embrace—products that soothe, restore, and
              reveal your skin’s inherent luminescence. This journey is for you, to
              help you feel as radiant as the stars. Thank you for letting us light
              up your world.&quot;
            </p>
            <div className="signature">Celestial Moonlight</div>
            <p>Celestial Moonlight</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>
          Join Our Community to Get Exclusive Access to Products, Events,
          Self-Care Rituals & More
        </h3>
        <div className="social-links">
          <Image
            src="/src/instagram logo.jpg"
            alt="Instagram"
            width={50}
            height={50}
          />
          <Image
            src="/src/facebook logo.jpg"
            alt="Facebook"
            width={50}
            height={50}
          />
          <Image
            src="/src/twitter logo.jpg"
            alt="Twitter"
            width={50}
            height={50}
          />
        </div>
        <div className="links">
          <Link href="#">Self-Care Simplified</Link>
          <Link href="#">Clean</Link>
          <Link href="#">Vegan</Link>
          <Link href="#">Cruelty Free</Link>
          <Link href="#">Clinically Tested</Link>
        </div>
        <div className="links">
          <Link href="#">Join Our Community</Link>
          <Link href="#">Follow Us On</Link>
          <Link href="#">Skincare</Link>
          <Link href="#">Bodycare</Link>
          <Link href="#">Sets</Link>
        </div>
        <div className="payment-methods">
          <Image src="/src/visa logo.jpg" alt="Visa" width={30} height={30} />
          <Image
            src="/src/mastercard logo.jpg"
            alt="Mastercard"
            width={30}
            height={30}
          />
          <Image src="/src/amex logo.jpg" alt="Amex" width={30} height={30} />
          <Image src="/src/paypal logo.jpg" alt="Paypal" width={30} height={30} />
        </div>
        <div className="footer-bottom">
          <Link href="#">Terms of Service</Link> |{" "}
          <Link href="#">Privacy Policy</Link> |{" "}
          <Link href="#">Customer Ventures</Link> |{" "}
          <Link href="#">Rights Reserved</Link>
        </div>
      </footer>
    </>
  );
}