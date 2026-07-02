"use client";

import { motion } from "framer-motion";

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,166,64,0.18),_transparent_35%),linear-gradient(135deg,_#062b5b_0%,_#0a4d9d_55%,_#081f3f_100%)]"
      role="status"
      aria-live="polite"
      aria-label="Loading Nirmaan Academy"
    >
      <motion.div
        initial={{ scale: 0.94, y: 14, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-[92vw] items-center justify-center px-4"
      >
        <div className="relative inline-flex overflow-hidden rounded-[1.5rem] border border-white/15 bg-transparent shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="block h-auto w-auto max-h-[58vh] max-w-[68vw] object-contain bg-transparent sm:max-h-[64vh] sm:max-w-[52vw] md:max-h-[68vh] md:max-w-[40vw]"
            poster="/nirmaan-logo.png"
            onEnded={onComplete}
            onError={onComplete}
          >
            <source
              src="https://res.cloudinary.com/dkzmths4e/video/upload/v1782756214/newa29i66zesnxeo69pn.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
}
