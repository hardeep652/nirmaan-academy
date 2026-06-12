"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import TypewriterText from "./ui/TypewriterText";
import GlassCard from "./ui/GlassCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12 },
  }),
};

export default function HeroSection() {
  const features = [
    "DDCET Preparation",
    "Engineering Tuition",
    "Expert Faculty",
    "Weekly Tests",
    "Career Guidance",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,166,64,0.26), transparent 24%),
          linear-gradient(135deg, #041f45 0%, #0a4d9d 50%, #0a66c4 100%)
        `,
      }}
    >
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,122,0,0.5), transparent 70%)",
        }}
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(255,166,64,0.4), transparent 70%)",
        }}
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />

      {/* Floating Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          animation: "floatParticles 6s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-6"
          >
            <motion.div variants={itemVariants}>
              <SectionBadge text="DDCET Coaching in Ahmedabad" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-white font-sora font-bold leading-tight"
              style={{
                fontSize: "clamp(2.7rem, 6vw, 4.7rem)",
              }}
            >
              Build Your Engineering Future With{" "}
              <span className="text-blue-400">Nirmaan</span>{" "}
              <span className="text-orange-400">Academy</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-white text-lg">
              Ahmedabad's Trusted <TypewriterText />
            </motion.p>

            {/* Feature List */}
            <motion.div variants={itemVariants} className="space-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-3 rounded-lg bg-white text-blue-900 font-bold hover:shadow-xl transition-shadow">
                Apply Now
              </button>
              <button className="px-8 py-3 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-blue-900 transition-colors">
                Explore Courses
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-[var(--radius-lg)] blur-3xl opacity-70"
              style={{
                background: `radial-gradient(circle, rgba(255,122,0,0.5), transparent 60%)`,
                transform: "scale(1.1)",
              }}
            />

            {/* Glass Card */}
            <GlassCard className="relative z-10 p-5 shadow-2xl">
              <div className="relative w-full rounded-[var(--radius-lg)] overflow-hidden bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white font-semibold">
                {/* Image Container */}
                <div className="relative w-full aspect-square sm:aspect-auto sm:h-[520px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-600 opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="relative z-10 text-center px-8">
                    <div className="text-5xl mb-4">👨‍🏫👩‍🏫</div>
                    <p className="text-lg font-bold">Sir & Mam</p>
                    <p className="text-sm opacity-90">Teaching Excellence</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
