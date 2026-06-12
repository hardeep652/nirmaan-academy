"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface PremiumCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function PremiumCard({
  children,
  className = "",
  ...motionProps
}: PremiumCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      {...motionProps}
      className={`bg-white bg-opacity-94 border border-blue-900 border-opacity-10 rounded-[var(--radius-lg)] p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
