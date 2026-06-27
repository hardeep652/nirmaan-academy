"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";

const historyTimeline = [
  { year: "2016", label: "Academy Established", desc: "Foundation of Nirmaan Academy with a vision to guide students towards academic excellence." },
  { year: "2018", label: "Building Academic Excellence", desc: "Expanded course offerings and strengthened student mentoring programs, creating a strong learning ecosystem." },
  { year: "2020", label: "Digital Transformation", desc: "Successfully transitioned courses to online platforms, ensuring uninterrupted learning and wider student reach." },
  { year: "2022", label: "Growing Student Community", desc: "Achieved significant growth in student enrollments and improved academic results through innovative teaching methodologies." },
  { year: "2024", label: "DDCET Division Launch", desc: "Introduced specialized DDCET coaching programs, helping diploma students secure admissions in top engineering colleges." },
  { year: "2026", label: "Shaping Future Engineers", desc: "Recognized as a trusted destination for DDCET and Engineering aspirants, empowering the next generation of engineers." },
];

export default function AboutSection() {
  return (
    <section className="section-space bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Nirmaan Academy Introduction */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="relative overflow-hidden h-full">
              <div className="relative w-full rounded-[var(--radius-lg)] overflow-hidden flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dkzmths4e/image/upload/v1781946450/fvzx3d95i9v5dhc01rea.png"
                  alt="Vision & Mission"
                  className="w-full h-auto object-contain"
                />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge text="Introduction" />

            <h2 className="text-4xl sm:text-5xl font-bold mt-6 text-[#062b5b]">
              Welcome to Nirmaan Academy
            </h2>

            <p className="text-lg mt-6 leading-relaxed text-gray-600">
              <span className="text-[#0a4d9d] font-semibold">Nirmaan</span>{" "}
              <span className="text-[#ff7a00] font-semibold">Academy</span> is Gujarat's premier institute for DDCET and Engineering guidance. We provide a structured environment where aspiring engineers are shaped into top achievers.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#062b5b] mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Expert Faculty with industry and academic experience.",
                  "Comprehensive study materials and targeted mock tests.",
                  "Personalized mentoring and doubt-solving sessions.",
                  "Proven track record of consistent DDCET toppers."
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-600">
                    <i className="bi bi-check-circle-fill text-orange-500 mt-1"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 2. Our History */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Our Legacy" />
          <h2 className="text-4xl font-bold text-[#062b5b] mt-6">
            A Journey of Excellence
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Established with a passion for teaching, Nirmaan Academy has grown from a small classroom to a trusted institution guiding thousands of students every year.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#062b5b] via-[#ff7a00] to-transparent" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-[1.125rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#062b5b] via-[#ff7a00] to-transparent" />

          <div className="space-y-8 md:space-y-14">
            {historyTimeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center gap-4 md:gap-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Desktop spacer (empty div for alternating layout) */}
                  <div className="hidden md:block md:w-[44%]" />

                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] md:w-10 md:h-10 rounded-full bg-white border-2 border-[#ff7a00] shadow flex-shrink-0 relative z-10">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff7a00]" />
                  </div>

                  {/* Content card */}
                  <div className="w-full md:w-[44%]">
                    <motion.div
                      className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100"
                      whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg md:text-2xl font-bold text-[#ff7a00]">{item.year}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-orange-200 to-transparent" />
                      </div>
                      <h3 className="text-sm md:text-lg font-bold text-[#062b5b] mb-1">{item.label}</h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
