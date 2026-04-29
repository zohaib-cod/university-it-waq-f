"use client";
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
         <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Stowave</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Simple, clean and modern products for your daily life.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@stowave.com</p>
          <p className="text-gray-400 text-sm mt-2">Phone: +92 300 1234567</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Stowave. All rights reserved.
      </div>
    </footer>
      </>
    )
  }
}
