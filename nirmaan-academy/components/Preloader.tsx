"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC =
  "https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good/v1782756214/newa29i66zesnxeo69pn.mp4";
const LOGO_SRC =
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1781945973/lsqjzszlc5gwtbg7z4qg.png";

const MIN_DISPLAY_MS = 2500;
const FALLBACK_TIMEOUT_MS = 5000;

export default function NirmaanPreloader() {
  const [mounted, setMounted] = useState(true);
  const [dismissing, setDismissing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cancelledRef = useRef(false);
  const startRef = useRef(Date.now());

  useLayoutEffect(() => {
    document.body.dataset.preloader = "active";
    return () => {
      delete document.body.dataset.preloader;
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const dismiss = () => {
      if (cancelledRef.current) return;
      cancelledRef.current = true;
      setDismissing(true);

      document.body.dataset.preloader = "done";

      setTimeout(() => {
        setMounted(false);
      }, 600);
    };

    const onReady = () => {
      if (cancelledRef.current) return;
      video.play().catch(() => {});
      const elapsed = Date.now() - startRef.current;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(dismiss, remaining);
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      onReady();
    } else {
      video.addEventListener("canplay", onReady, { once: true });
      video.addEventListener("canplaythrough", onReady, { once: true });
      video.addEventListener("loadedmetadata", onReady, { once: true });
    }

    try {
      video.load();
    } catch {
      // Mobile browsers may throw on load; fallback timeout handles dismiss
    }
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cancelledRef.current) return;
      cancelledRef.current = true;
      setDismissing(true);
      document.body.dataset.preloader = "done";
      setTimeout(() => setMounted(false), 600);
    }, FALLBACK_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999]"
        >
          {/* Solid backdrop - hides content until preloader fully exits */}
          <div className="absolute inset-0 bg-white" />

          {/* Pattern overlay - fades to reveal solid bg */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dbdyarkdq/image/upload/v1782896787/bg_nirmaan_crcsd9.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            animate={{ opacity: dismissing ? 0 : 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />

          {/* Logo */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              layoutId="nirmaan-brand-logo"
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              className="overflow-hidden rounded-2xl max-w-sm w-full mx-6"
            >
              <div className="relative">
                <video
                  ref={videoRef}
                  src={VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disableRemotePlayback
                  className="w-full"
                  style={{ opacity: dismissing ? 0 : 1, transition: "opacity 0.25s ease" }}
                />
                <img
                  src={LOGO_SRC}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ opacity: dismissing ? 1 : 0, transition: "opacity 0.25s ease" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
