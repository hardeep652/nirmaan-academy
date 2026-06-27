"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
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
      className="min-h-[100vh] sm:min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,166,64,0.26), transparent 24%),
          linear-gradient(135deg, #041f45 0%, #0a4d9d 50%, #0a66c4 100%)
        `,
      }}
    >
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 sm:top-20 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,122,0,0.5), transparent 70%)",
        }}
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full opacity-15"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-4 sm:space-y-6"
          >
            <motion.div variants={itemVariants}>
              <SectionBadge text="DDCET Coaching in Ahmedabad" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-white font-sora font-bold leading-tight"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
              }}
            >
              Build Your Engineering Future With{" "}
              <span className="text-blue-400">Nirmaan</span>{" "}
              <span className="text-orange-400">Academy</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-white text-base sm:text-lg">
              Ahmedabad's Trusted <TypewriterText />
            </motion.p>

            {/* Feature List */}
            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <span className="text-green-400 text-lg sm:text-xl shrink-0">✓</span>
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/admissions" className="px-8 py-3 rounded-lg gradient-orange text-white font-bold hover:shadow-xl transition-shadow inline-block">
                Apply Now
              </Link>
              <Link href="/courses" className="px-8 py-3 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-blue-900 transition-colors">
                Explore Courses
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden md:block"
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
            <GlassCard className="relative z-10 p-3 sm:p-5 shadow-2xl">
              <div className="relative w-full rounded-[var(--radius-lg)] overflow-hidden bg-gradient-to-br from-blue-500/20 to-orange-500/20">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] md:h-[400px] lg:h-[500px] xl:h-[550px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dkzmths4e/image/upload/v1781945376/cqixdonnlttg479y8jvs.png"
                    alt="Nirmaan Academy Teachers"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Overlay to blend with design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
