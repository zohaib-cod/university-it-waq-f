"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarHero() {
  const slides = [
    {
      title: "Build Your Future",
      desc: "Learn modern skills and grow your career",
    },
    {
      title: "Top Quality Courses",
      desc: "Practical learning with real projects",
    },
    {
      title: "Join Today",
      desc: "Start your journey with us now",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            LOGO
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex gap-6 text-white font-medium">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/courses">Course Details</Link>
            <Link href="/admissions">Admissions</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>

          {/* Apply Button */}
          <Link
            href="/registration"
            className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {/* Hero Slider */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-500">
            {slides[index].title}
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            {slides[index].desc}
          </p>

          <Link
            href="/registration"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
