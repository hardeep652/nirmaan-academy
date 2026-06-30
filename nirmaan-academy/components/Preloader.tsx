"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NirmaanPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full max-w-sm rounded-2xl"
            onEnded={() => setLoading(false)}
          >
            <source
              src="https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good,f_auto,vc_auto,w_384/v1782756214/newa29i66zesnxeo69pn.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
