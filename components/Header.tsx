'use client';

import Link from 'next/link';
import { useState } from 'react';
import { businessInfo } from '@/data/business';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Air Care Pro Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold">{businessInfo.name}</h1>
              <p className="text-xs text-brand-green">{businessInfo.slogan}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-brand-blue transition">Home</Link>
            <Link href="/services" className="hover:text-brand-blue transition">Services</Link>
            <Link href="/locations" className="hover:text-brand-blue transition">Locations</Link>
            <Link href="/pricing" className="hover:text-brand-blue transition">Pricing</Link>
            <Link href="/contact" className="hover:text-brand-blue transition">Contact</Link>
            <a href={`tel:${businessInfo.phone}`} className="bg-brand-green hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition">
              {businessInfo.phone}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-brand-blue transition">Home</Link>
            <Link href="/services" className="block py-2 hover:text-brand-blue transition">Services</Link>
            <Link href="/locations" className="block py-2 hover:text-brand-blue transition">Locations</Link>
            <Link href="/pricing" className="block py-2 hover:text-brand-blue transition">Pricing</Link>
            <Link href="/contact" className="block py-2 hover:text-brand-blue transition">Contact</Link>
            <a href={`tel:${businessInfo.phone}`} className="block bg-brand-green hover:bg-green-600 px-4 py-2 rounded-lg font-semibold text-center transition">
              {businessInfo.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
