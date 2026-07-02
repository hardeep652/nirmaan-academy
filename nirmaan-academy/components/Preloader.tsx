"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);

  const completeOnce = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  }, [onComplete]);

  const forcePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video || completedRef.current) return;

    // Prevent multiple play calls
    if (!video.paused) return;

    try {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.playsInline = true;
      video.disableRemotePlayback = true;

      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("muted", "");

      await video.play();
    } catch (err) {
      console.error("Autoplay failed:", err);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = () => {
      void forcePlay();
    };

    // Initial attempt
    start();

    // Limited retries
    const retry1 = setTimeout(start, 200);
    const retry2 = setTimeout(start, 600);

    // Fallback
    const fallback = setTimeout(completeOnce, 7000);

    return () => {
      clearTimeout(retry1);
      clearTimeout(retry2);
      clearTimeout(fallback);
    };
  }, [forcePlay, completeOnce]);

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
        <div className="relative inline-flex overflow-hidden rounded-[1.5rem] border border-white/10 bg-transparent shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster=""
            crossOrigin="anonymous"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onEnded={completeOnce}
            onError={completeOnce}
            className="block max-h-[65vh] max-w-[75vw] sm:max-h-[70vh] sm:max-w-[58vw] md:max-h-[72vh] md:max-w-[46vw] object-contain bg-transparent"
            style={{ backgroundColor: "transparent" }}
          >
            <source
              src="https://res.cloudinary.com/dkzmths4e/video/upload/f_mp4,q_auto,vc_h264/v1782990194/sh7i94dt4fyy7e0yoddi.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
}