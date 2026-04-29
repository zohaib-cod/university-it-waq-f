"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarHero() {
  const slides = [
    { title: "Build Your Future", desc: "Learn modern skills and grow your career" },
    { title: "Top Quality Courses", desc: "Practical learning with real projects" },
    { title: "Join Today", desc: "Start your journey with us now" },
  ];

  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav
        style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50, backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.2)" }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Logo */}
          <Link href="/" style={{ fontSize: "20px", fontWeight: "bold", color: "white", textDecoration: "none" }}>
            LOGO
          </Link>

          {/* Desktop Links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "24px" }}>
              {["Home", "About Us", "Course Details", "Admissions", "Contact Us"].map((item, i) => {
                const hrefs = ["/", "/about-us", "/courses", "/admissions", "/contact-us"];
                return (
                  <Link key={i} href={hrefs[i]} style={{ color: "white", fontWeight: "500", textDecoration: "none" }}>
                    {item}
                  </Link>
                );
              })}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Hamburger - Mobile only */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "8px" }}
              >
                <span style={{
                  display: "block", width: "24px", height: "2px", background: "white",
                  transition: "all 0.3s",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
                }} />
                <span style={{
                  display: "block", width: "24px", height: "2px", background: "white",
                  transition: "all 0.3s",
                  opacity: menuOpen ? 0 : 1
                }} />
                <span style={{
                  display: "block", width: "24px", height: "2px", background: "white",
                  transition: "all 0.3s",
                  transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
                }} />
              </button>
            )}

            {/* Apply Now */}
            {/* <Link
              href="/registration"
              style={{ background: "white", color: "black", padding: "8px 16px", borderRadius: "12px", fontWeight: "600", textDecoration: "none" }}
            >
              Apply Now
            </Link> */}


{/* Apply Now - Desktop only */}
{!isMobile && (
  <Link
    href="/registration"
    style={{ background: "white", color: "black", padding: "8px 16px", borderRadius: "12px", fontWeight: "600", textDecoration: "none" }}
  >
    Apply Now
  </Link>
)}


          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobile && menuOpen && (
          <div style={{ backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.1)", borderTop: "1px solid rgba(255,255,255,0.2)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {["Home", "About Us", "Course Details", "Admissions", "Contact Us"].map((item, i) => {
              const hrefs = ["/", "/about-us", "/courses", "/admissions", "/contact-us"];
              return (
                <Link key={i} href={hrefs[i]} onClick={() => setMenuOpen(false)} style={{ color: "white", fontWeight: "500", textDecoration: "none" }}>
                  {item}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Slider */}
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(to right, black, #111827, black)", color: "white", textAlign: "center", padding: "0 24px" }}>
        <div style={{ maxWidth: "672px" }}>
          <h1 style={{ fontSize: isMobile ? "36px" : "60px", fontWeight: "bold", marginBottom: "16px", transition: "all 0.5s" }}>
            {slides[index].title}
          </h1>
          <p style={{ color: "#D1D5DB", marginBottom: "24px", fontSize: "18px" }}>
            {slides[index].desc}
          </p>
          <Link
            href="/registration"
            style={{ background: "white", color: "black", padding: "12px 24px", borderRadius: "12px", fontWeight: "600", textDecoration: "none" }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}