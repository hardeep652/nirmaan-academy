"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Results", href: "#results" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-blue-900/96 to-blue-700/94"
      }`}
      style={{
        background: hasScrolled
          ? "linear-gradient(90deg, rgba(6,43,91,0.96), rgba(10,77,157,0.94))"
          : "linear-gradient(90deg, rgba(6,43,91,0.96), rgba(10,77,157,0.94))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <div className="bg-white rounded-xl p-1 overflow-hidden flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/logo.png"
                alt="Nirmaan Academy Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <div className="font-bold text-sm flex gap-1">
                <span className="text-blue-400">Nirmaan</span>
                <span className="text-orange-400">Academy</span>
              </div>
              <span className="text-orange-400 text-xs">Ahmedabad</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-sm font-medium hover:text-orange-400 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2 rounded-lg text-white text-sm font-bold gradient-orange hover:shadow-lg transition-shadow">
              Admission Open
            </button>
            <button className="px-6 py-2 rounded-lg text-white text-sm font-bold border-2 border-white hover:bg-white hover:text-blue-900 transition-colors">
              Call Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl flex flex-col gap-1"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-4 border-t border-white border-opacity-10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-orange-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full px-4 py-2 rounded-lg text-white text-sm font-bold gradient-orange">
                  Admission Open
                </button>
                <button className="w-full px-4 py-2 rounded-lg text-white text-sm font-bold border-2 border-white">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
