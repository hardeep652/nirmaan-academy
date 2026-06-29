"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { name: "Facebook", icon: "bi-facebook", href: "https://www.facebook.com/nirmaanacademy7", colorClass: "text-[#1877F2]" },
    { name: "Instagram", icon: "bi-instagram", href: "https://www.instagram.com/nirmaanacademy/", colorClass: "text-[#E4405F]" },
    { name: "LinkedIn", icon: "bi-linkedin", href: "https://www.linkedin.com/company/nirmaan-academy-ahmedabad/posts/?feedView=all", colorClass: "text-[#0A66C2]" },
    { name: "YouTube", icon: "bi-youtube", href: "https://www.youtube.com/@NIRMAANACADEMY/featured", colorClass: "text-[#FF0000]" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-xl p-1 overflow-hidden flex items-center justify-center w-12 h-12">
                <Image
                  src="https://res.cloudinary.com/dkzmths4e/image/upload/v1781945973/lsqjzszlc5gwtbg7z4qg.png"
                  alt="Nirmaan Academy Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                />
              </div>
              <div>
                <p className="font-bold">
                  <span className="text-blue-400">Nirmaan</span>{" "}
                  <span className="text-orange-400">Academy</span>
                </p>
                <p className="text-xs text-gray-400">Ahmedabad</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="text-blue-400">Nirmaan</span> <span className="text-orange-400">Academy</span> is dedicated to providing quality engineering
              education and DDCET coaching to aspiring engineers across Gujarat.
            </p>
          </div>

          {/* Column 2: Our Programs */}
          <div className="lg:ml-12 xl:ml-24">
            <h4 className="font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Diploma in Engineering (D.E)</Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Diploma to Degree Entrance Test (DDCET)</Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Bachelor of Engineering (B.E)</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="lg:ml-12 xl:ml-24">
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400 text-sm">
                <span className="block font-semibold text-white mb-1">Email</span>
                <a href="mailto:nirmaanacademy7@gmail.com" className="hover:text-orange-400 transition-colors">nirmaanacademy7@gmail.com</a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="block font-semibold text-white mb-1">Phone</span>
                <a href="tel:+917043412251" className="hover:text-orange-400 transition-colors">+91 7043412251</a><br />
                <a href="tel:+919106558028" className="hover:text-orange-400 transition-colors">+91 9106558028</a>
              </p>
            </div>
            <h5 className="font-semibold text-sm mb-3">Follow Us</h5>
            <div className="flex gap-4 mt-4">
              {socialIcons.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl hover:scale-110 transition-transform ${social.colorClass}`}
                  title={social.name}
                >
                  <i className={`bi ${social.icon}`}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} <span className="text-blue-400">Nirmaan</span> <span className="text-orange-400">Academy</span>. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Developed by <span className="text-blue-400">Harsh Darji</span> & <span className="text-orange-400">HardeepSinh Parmar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
