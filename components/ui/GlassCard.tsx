"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      {...motionProps}
      className={`glass-effect border border-white border-opacity-24 rounded-[var(--radius-lg)] p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
