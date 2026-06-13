"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

export default function CtaBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-4 sm:mx-6 lg:mx-8 my-20 rounded-[var(--radius-lg)] overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(255,122,0,0.2), transparent 50%),
          linear-gradient(135deg, #062b5b 0%, #0a4d9d 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <SectionBadge
              text="Admissions 2027"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
              Admissions Open For DDCET 2027
            </h2>
            <p className="text-white text-opacity-90 text-lg mt-4">
              Take the next step with expert preparation, trusted faculty, and focused admission guidance.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <button className="px-8 py-3 rounded-lg gradient-orange text-white font-bold hover:shadow-xl transition-shadow">
              Apply Now
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-blue-900 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
