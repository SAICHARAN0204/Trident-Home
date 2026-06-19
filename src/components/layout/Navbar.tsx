'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Towels', href: '/towels' },
  { label: 'Bedsheets', href: '/bedsheets' },
  { label: 'Pillow Covers', href: '/pillow-covers' },
  { label: 'Collections', href: '/collections' },
  { label: 'Our Story', href: '/our-story' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const cartCount = 0;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#a0cfc4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <span
              className="text-xl lg:text-2xl tracking-widest font-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="text-[#1d5e52]">TRIDENT</span>
              <span className="text-[#c9a84c] ml-1">HOME</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1d5e52] hover:text-[#c9a84c] tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden sm:flex items-center">
              {searchOpen ? (
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products…"
                  onBlur={() => setSearchOpen(false)}
                  className="w-48 lg:w-64 pl-3 pr-8 py-1.5 text-sm border border-[#3a8a7a] rounded-full outline-none text-[#1d5e52] bg-[#eaf4f1] placeholder-[#a0cfc4] focus:ring-2 focus:ring-[#c9a84c]/40 transition-all"
                />
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  className="p-2 text-[#1d5e52] hover:text-[#c9a84c] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Wishlist */}
            <button aria-label="Wishlist" className="p-2 text-[#1d5e52] hover:text-[#c9a84c] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
              </svg>
            </button>

            {/* Cart */}
            <button aria-label="Cart" className="relative p-2 text-[#1d5e52] hover:text-[#c9a84c] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-[#c9a84c] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-[#1d5e52] hover:text-[#c9a84c] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Promo Strip */}
      <div className="hidden lg:flex justify-center text-[10px] text-[#a0cfc4] py-1 border-t border-[#a0cfc4] tracking-widest">
        FREE SHIPPING ON ORDERS ABOVE ₹999 &nbsp;·&nbsp; 30-DAY RETURNS &nbsp;·&nbsp; MILL DIRECT PRICING
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-[#eaf4f1] border-t border-[#a0cfc4] px-4 py-4 space-y-1">
          {/* Mobile search */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search products…"
              className="w-full pl-9 pr-3 py-2 text-sm border border-[#3a8a7a] rounded-full outline-none text-[#1d5e52] bg-white placeholder-[#a0cfc4] focus:ring-2 focus:ring-[#c9a84c]/40"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a0cfc4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-[#1d5e52] hover:bg-white hover:text-[#c9a84c] rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
