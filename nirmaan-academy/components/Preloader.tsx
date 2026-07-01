"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NirmaanPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.dataset.preloader = "active";
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => {
      clearTimeout(timer);
      delete document.body.dataset.preloader;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.dataset.preloader = "active";
      return;
    }

    document.body.dataset.preloader = "done";
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbdyarkdq/image/upload/v1782896787/bg_nirmaan_crcsd9.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-full max-w-sm px-6">
            <motion.div
              layoutId="nirmaan-brand-logo"
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="overflow-hidden rounded-2xl"
            >
              <motion.video
                autoPlay
                muted
                playsInline
                preload="auto"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="w-full"
                onEnded={() => setLoading(false)}
              >
                <source
                  src="https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good,f_auto,vc_auto,w_384/v1782756214/newa29i66zesnxeo69pn.mp4"
                  type="video/mp4"
                />
              </motion.video>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
