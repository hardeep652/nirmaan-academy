"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";
import reviewsData from "@/data/reviews.json";

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());
  const touchStartX = useRef(0);

  const items: GoogleReview[] = reviewsData.reviews.slice(0, 7);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  }, [items.length]);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => next(), 3000);
  }, [next]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoPlay();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    startAutoPlay();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section id="testimonials" className="section-space bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Student Feedback" />
          <h2 className="text-4xl sm:text-5xl font-bold mt-6" style={{ color: "var(--dark-blue)" }}>
            What Our Students Say
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-soft)" }}>
            Real reviews from Google — hear what students and parents say about
            <span className="text-[#0a4d9d] font-semibold"> Nirmaan</span>
            <span className="text-[#ff7a00] font-semibold"> Academy</span>.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {items.length > 0 && (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5 }}
                >
                  <PremiumCard className="text-center p-6 sm:p-8 lg:p-12">
                    {/* Profile Photo */}
                    {items[currentIndex].profile_photo_url && !imgErrors.has(currentIndex) ? (
                      <img
                        src={items[currentIndex].profile_photo_url}
                        alt={items[currentIndex].author_name}
                        className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover mx-auto mb-4 sm:mb-6"
                        referrerPolicy="no-referrer"
                        onError={() => setImgErrors((prev) => new Set(prev).add(currentIndex))}
                      />
                    ) : (
                      <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                        {getInitials(items[currentIndex].author_name)}
                      </div>
                    )}

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                      {renderStars(items[currentIndex].rating)}
                    </div>

                    {/* Review Text */}
                    <p
                      className="text-base sm:text-lg italic leading-relaxed mb-4 sm:mb-6"
                      style={{ color: "var(--text-dark)" }}
                    >
                      &ldquo;{items[currentIndex].text}&rdquo;
                    </p>

                    {/* Name & Time */}
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold" style={{ color: "var(--text-dark)" }}>
                        {items[currentIndex].author_name}
                      </h3>
                      <img 
                        src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                        alt="Google Verified" 
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <p className="text-orange-600 font-semibold text-xs sm:text-sm mt-1">
                      {items[currentIndex].relative_time_description}
                    </p>

                  </PremiumCard>
                </motion.div>
              </AnimatePresence>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { stopAutoPlay(); setCurrentIndex(idx); startAutoPlay(); }}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      idx === currentIndex ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
