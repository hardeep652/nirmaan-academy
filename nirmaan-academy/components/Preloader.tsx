"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC =
  "https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good/v1782756214/newa29i66zesnxeo69pn.mp4";

const MIN_DISPLAY_MS = 2000;
const FALLBACK_TIMEOUT_MS = 5000;

export default function NirmaanPreloader() {
  const [show, setShow] = useState(true);
  const [alive, setAlive] = useState(true);
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
      setShow(false);
      document.body.dataset.preloader = "done";
      setTimeout(() => {
        if (!cancelledRef.current) setAlive(false);
      }, 800);
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
      setShow(false);
      document.body.dataset.preloader = "done";
      setTimeout(() => setAlive(false), 800);
    }, FALLBACK_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {alive && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
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
