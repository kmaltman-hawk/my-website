"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Solutions", href: "#" },
  { label: "Platform", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">
              hawk<span className="text-[#FF6900]">search</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#FF6900] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#FF6900] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-[#FF6900] hover:bg-[#e05e00] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#FF6900]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="bg-[#FF6900] text-white text-sm font-semibold px-4 py-2 rounded text-center mt-2"
          >
            Get a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
