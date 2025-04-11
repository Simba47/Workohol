"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import "../styles/globals.css";

// Dynamically import Navbar with SSR disabled
const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
  loading: () => (
    <nav className="navbar-placeholder">
      <div className="logo">SkinCare</div>
    </nav>
  ),
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(() => {
      handleComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}

        <style jsx>{`
          .loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.5);
            z-index: 9999;
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4caf50;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>

        <style jsx global>{`
          body {
            padding-top: 60px; /* Matches Navbar height */
            margin: 0;
            font-family: Arial, sans-serif;
          }
          .navbar-placeholder {
            height: 60px;
            background-color: #fff;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            padding: 10px 20px;
          }
          .navbar-placeholder .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #000000;
          }
        `}</style>
      </body>
    </html>
  );
}