"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { target: 2500, suffix: "+", label: "Students Trained" },
  { target: 180, suffix: "+", label: "Top Rankers" },
  { target: 96, suffix: "%", label: "Success Rate" },
  { target: 12, suffix: "+", label: "Years Experience" },
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

export default function StatsStrip() {
  return (
    <section
      id="about"
      className="section-space bg-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlassCard className="text-center h-full flex flex-col justify-center border-2 border-black/80 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 group">
                <div className="text-4xl sm:text-5xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-300">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 text-sm sm:text-base mt-2 font-medium group-hover:text-black transition-colors duration-300">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </section>
  );
}
