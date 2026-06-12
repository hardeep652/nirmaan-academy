"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";

const timeline = [
  { year: "2013", label: "Founded" },
  { year: "2014", label: "First Batch" },
  { year: "2018", label: "500 Students" },
  { year: "2022", label: "1000 Students" },
  { year: "2025", label: "2500+ Students" },
];

export default function AboutSection() {
  return (
    <section className="section-space bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="relative overflow-hidden">
              <div className="relative h-96 sm:h-[480px] bg-gradient-to-br from-blue-400 to-orange-400 rounded-[var(--radius-lg)] flex items-center justify-center text-white font-semibold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-500 opacity-40" />
                <span className="relative z-10">Academy Team Image</span>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white rounded-[var(--radius-lg)] px-4 py-3 shadow-lg z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-bold text-blue-900 text-sm">2500+ Students</p>
                <p className="text-gray-600 text-xs">Trained Successfully</p>
              </motion.div>

              <motion.div
                className="absolute top-6 right-6 bg-white rounded-[var(--radius-lg)] px-4 py-3 shadow-lg z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <p className="font-bold text-blue-900 text-sm">12+ Years</p>
                <p className="text-gray-600 text-xs">Experience</p>
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge text="About Us" />

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
              Trusted by Engineering Aspirants Across Gujarat
            </h2>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Nirmaan Academy was founded with a mission to transform engineering
              education in Ahmedabad. We believe every student has the potential
              to excel, and we provide the structured guidance, expert faculty,
              and personalized attention needed to unlock that potential.
            </p>

            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              Our approach combines comprehensive curriculum coverage, regular
              assessments, and mentorship to ensure students not only pass
              exams but develop a deep understanding of engineering concepts
              and secure admission to top colleges.
            </p>

            {/* Journey Timeline */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Our Journey
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      {idx + 1}
                    </div>
                    <p className="font-bold text-blue-900 text-sm">{item.year}</p>
                    <p className="text-gray-600 text-xs mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 px-8 py-3 gradient-orange text-white font-bold rounded-lg hover:shadow-xl transition-shadow"
            >
              Talk to Our Team
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
