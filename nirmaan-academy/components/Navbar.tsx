"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowLogo(document.body.dataset.preloader !== "active");

    const observer = new MutationObserver(() => {
      setShowLogo(document.body.dataset.preloader !== "active");
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-preloader"],
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Admission Outcome Report", href: "/placement-report" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={false}
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
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-4 group">
            <BrandLogo
              sizeClassName="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              className={`rounded-xl ${showLogo ? "" : "invisible"} group-hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.3),0_0_40px_10px_rgba(37,99,235,0.3),0_0_60px_15px_rgba(234,88,12,0.25)]`}
              imageClassName="brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
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
            <Link
              href="https://web.classplusapp.com/login?orgCode=nir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg text-white text-sm font-bold gradient-orange hover:shadow-lg transition-shadow inline-block text-center"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl flex flex-col gap-1 p-2"
            aria-label="Toggle navigation menu"
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
          <div className="lg:hidden border-t border-white border-opacity-10 overflow-y-auto max-h-[calc(100vh-4rem)]">
            <div className="flex flex-col gap-1 py-4 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-orange-400 py-3 px-3 rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 px-3">
                <Link
                  href="https://web.classplusapp.com/login?orgCode=nir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 rounded-lg text-white text-sm font-bold gradient-orange text-center inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
