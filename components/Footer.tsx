"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Courses", href: "#courses" },
      { label: "Results", href: "#results" },
    ],
    courses: [
      { label: "DDCET Preparation", href: "#courses" },
      { label: "Engineering Tuition", href: "#courses" },
      { label: "Degree Engineering", href: "#courses" },
      { label: "Admission Guidance", href: "#courses" },
    ],
  };

  const socialIcons = [
    { name: "Facebook", icon: "f", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "LinkedIn", icon: "in", href: "#" },
    { name: "YouTube", icon: "▶", href: "#" },
  ];

  return (
    <footer
      className="text-white py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, #082347 0%, #04172f 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 rounded-xl p-2 w-12 h-12 flex items-center justify-center text-white font-bold text-sm">
                NA
              </div>
              <div>
                <p className="font-bold">Nirmaan Academy</p>
                <p className="text-xs text-gray-400">Ahmedabad</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nirmaan Academy is dedicated to providing quality engineering
              education and DDCET coaching to aspiring engineers across Gujarat.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="font-bold text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400 text-sm">
                <span className="block font-semibold text-white mb-1">
                  Email
                </span>
                info@nirmaanacademy.in
              </p>
              <p className="text-gray-400 text-sm">
                <span className="block font-semibold text-white mb-1">
                  Phone
                </span>
                +91 00000 00000
              </p>
            </div>

            {/* Social Icons */}
            <h5 className="font-semibold text-sm mb-3">Follow Us</h5>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white bg-opacity-10 flex items-center justify-center hover:bg-orange-500 hover:bg-opacity-100 transition-colors text-white"
                  title={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Nirmaan Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
