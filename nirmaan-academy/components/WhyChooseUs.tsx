"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

const features = [
  {
    title: "Expert Faculty",
    description: "Experienced mentors with strong DDCET track record",
    icon: "bi-mortarboard-fill",
  },
  {
    title: "DDCET Special Preparation",
    description: "Structured strategy: concept building, revision, tracking",
    icon: "bi-bullseye",
  },
  {
    title: "Engineering Subject Experts",
    description: "Subject-wise support across diploma & degree modules",
    icon: "bi-book-fill",
  },
  {
    title: "Regular Mock Tests",
    description: "Weekly assessments with detailed improvement analysis",
    icon: "bi-clipboard-check-fill",
  },
  {
    title: "Small Batch Sizes",
    description: "Personalized attention for every student",
    icon: "bi-people-fill",
  },
  {
    title: "Career Guidance",
    description: "End-to-end support from exam to admission",
    icon: "bi-trophy-fill",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-space bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Why Choose Us" />
          <h2 className="text-4xl sm:text-5xl font-bold mt-6" style={{ color: "var(--dark-blue)" }}>
            Why Choose <span className="text-[#0a4d9d]">Nirmaan</span>{" "}
            <span className="text-[#ff7a00]">Academy</span>
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-soft)" }}>
            We combine expert faculty, structured curriculum, and personalized
            attention to ensure every student reaches their full potential.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PremiumCard className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-2xl text-white mb-4">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm mt-3" style={{ color: "var(--text-soft)" }}>
                    {feature.description}
                  </p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
