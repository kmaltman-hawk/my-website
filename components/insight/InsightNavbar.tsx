"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Product", href: "#" },
  { label: "Journal", href: "#" },
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
];

export default function InsightNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/insight-26" className="text-xl font-bold text-gray-950 tracking-tight">
          Aetherfield
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-800 hover:text-gray-950 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="text-sm font-medium text-gray-950 hover:opacity-70 transition-opacity"
          >
            Get started →
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#" className="text-sm font-medium text-gray-950">
            Get started →
          </Link>
        </div>
      )}
    </header>
  );
}
