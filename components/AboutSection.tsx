"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";

const historyTimeline = [
  { year: "2013", label: "Academy Established", desc: "Started with a vision to transform engineering education." },
  { year: "2016", label: "100+ Top Rankers", desc: "Achieved a milestone in DDCET with over 100 students in top ranks." },
  { year: "2020", label: "Digital Transformation", desc: "Launched online coaching to reach students across Gujarat." },
  { year: "2024", label: "2500+ Alumni", desc: "Successfully guided thousands of students to their dream colleges." },
];

export default function AboutSection() {
  return (
    <section className="section-space bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Nirmaan Academy Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="relative overflow-hidden h-full">
              <div className="relative h-[400px] sm:h-[500px] bg-gradient-to-br from-blue-400 to-orange-400 rounded-[var(--radius-lg)] flex items-center justify-center text-white font-semibold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#062b5b] to-[#ff7a00] opacity-80" />
                <div className="relative z-10 text-center px-6">
                  <h3 className="text-3xl font-bold mb-4">Vision & Mission</h3>
                  <p className="text-sm sm:text-base opacity-90 leading-relaxed mb-6">
                    Our vision is to be the leading institute for engineering entrance exams by fostering a culture of excellence. Our mission is to empower students with knowledge, confidence, and the right strategies to ace DDCET.
                  </p>
                  <h3 className="text-2xl font-bold mb-3">Our Goals</h3>
                  <ul className="text-sm opacity-90 text-left list-disc list-inside space-y-2 inline-block">
                    <li>Provide top-tier educational resources</li>
                    <li>Ensure conceptual clarity and application</li>
                    <li>Maximize selection rate in top engineering colleges</li>
                  </ul>
                </div>
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

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#062b5b] via-[#ff7a00] to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {historyTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center font-bold text-[#062b5b] shadow-xl z-10 relative my-4 md:my-0">
                  {item.year}
                </div>

                <GlassCard className="w-full md:w-5/12 p-6 hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-[#062b5b] mb-2">{item.label}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
