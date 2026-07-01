"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC =
  "https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good/v1782756214/newa29i66zesnxeo69pn.mp4";

const MIN_DISPLAY_MS = 2000;
const FALLBACK_TIMEOUT_MS = 5000;

export default function NirmaanPreloader() {
  const [mounted, setMounted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cancelledRef = useRef(false);
  const startRef = useRef(Date.now());

  useLayoutEffect(() => {
    document.body.dataset.preloader = "active";
    return () => {
      if (document.body.dataset.preloader === "active") {
        delete document.body.dataset.preloader;
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const dismiss = () => {
      if (cancelledRef.current) return;
      cancelledRef.current = true;
      document.body.dataset.preloader = "done";
      setMounted(false);
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

    video.load();

    return () => {
      cancelledRef.current = true;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cancelledRef.current) return;
      cancelledRef.current = true;
      document.body.dataset.preloader = "done";
      setMounted(false);
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
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
