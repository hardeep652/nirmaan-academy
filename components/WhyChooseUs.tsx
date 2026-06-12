"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

const features = [
  {
    title: "Expert Faculty",
    description: "Experienced mentors with strong DDCET track record",
    icon: "🎓",
  },
  {
    title: "DDCET Special Preparation",
    description: "Structured strategy: concept building, revision, tracking",
    icon: "🎯",
  },
  {
    title: "Engineering Subject Experts",
    description: "Subject-wise support across diploma & degree modules",
    icon: "📖",
  },
  {
    title: "Regular Mock Tests",
    description: "Weekly assessments with detailed improvement analysis",
    icon: "📋",
  },
  {
    title: "Small Batch Sizes",
    description: "Personalized attention for every student",
    icon: "👥",
  },
  {
    title: "Career Guidance",
    description: "End-to-end support from exam to admission",
    icon: "🏆",
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Why Choose Nirmaan Academy
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
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
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3">
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
