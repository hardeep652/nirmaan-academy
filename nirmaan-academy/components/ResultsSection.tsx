"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";
import AGR from "./AGR";
import { useCallback, useEffect, useRef, useState } from "react";

interface TopRanker {
  imageUrl: string;
  studentName: string;
  course: string;
  percentage: number;
}

export default function ResultsSection() {
  const [rankers, setRankers] = useState<TopRanker[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const touchStartX = useRef(0);

  useEffect(() => {
    const fetchRankers = async () => {
      try {
        const res = await fetch("/api/students/featured");

        if (!res.ok) {
          throw new Error("Failed to fetch rankers");
        }

        const data = await res.json();
        setRankers(data);
      } catch (error) {
        console.error("Failed to fetch rankers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankers();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isJumpingRef = useRef(false);

  const displayItems = rankers.length > 0 ? [...rankers, rankers[0]] : [];

  const scrollTo = useCallback((idx: number, smooth: boolean) => {
    const container = scrollRef.current;
    const el = container?.children[idx] as HTMLElement | undefined;
    if (!container || !el) return;
    const targetScroll = el.offsetLeft - container.offsetLeft;
    container.scrollTo({ left: targetScroll, behavior: smooth ? "smooth" : "instant" });
  }, []);

  const next = useCallback(() => {
    if (rankers.length === 0) return;
    if (isJumpingRef.current) return;
    setCurrentIndex((prev) => {
      const nextIdx = prev + 1;
      if (nextIdx >= displayItems.length) return prev;
      scrollTo(nextIdx, true);
      if (nextIdx === displayItems.length - 1) {
        isJumpingRef.current = true;
        setTimeout(() => {
          setCurrentIndex(0);
          scrollTo(0, false);
          setTimeout(() => { isJumpingRef.current = false; }, 100);
        }, 500);
      }
      return nextIdx;
    });
  }, [rankers.length, displayItems.length, scrollTo]);

  const prev = useCallback(() => {
    if (rankers.length === 0) return;
    if (isJumpingRef.current) return;
    setCurrentIndex((prev) => {
      if (prev === 0) {
        scrollTo(displayItems.length - 1, false);
        setCurrentIndex(rankers.length - 1);
        scrollTo(rankers.length - 1, true);
        return rankers.length - 1;
      }
      const prevIdx = prev - 1;
      scrollTo(prevIdx, true);
      return prevIdx;
    });
  }, [rankers.length, displayItems.length, scrollTo]);

  const scrollToIndex = useCallback((idx: number) => {
    setCurrentIndex(idx);
    scrollTo(idx, true);
  }, [scrollTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section id="results" className="section-space bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Success Stories" />
          <h2
            className="text-4xl sm:text-5xl font-bold mt-6"
            style={{ color: "var(--dark-blue)" }}
          >
            Our Top Rankers
          </h2>
          <p
            className="text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "var(--text-soft)" }}
          >
            Meet the outstanding students who achieved exceptional results
            through{" "}
            <span className="text-[#0a4d9d] font-semibold">Nirmaan</span>{" "}
            <span className="text-[#ff7a00] font-semibold">Academy</span>.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading top rankers...
          </div>
        ) : rankers.length > 0 ? (
          <>
            <div className="relative">
              <div
                ref={scrollRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hidden py-4 -mx-4 sm:-mx-0 px-4 sm:px-0"
                style={{ touchAction: "pan-y", overflowY: "clip" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {displayItems.map((ranker, idx) => (
                  <div key={idx} className="flex-shrink-0 w-48 sm:w-56 snap-start">
                    <PremiumCard className="relative text-center h-full">
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                        <AGR>AGR</AGR> #{idx >= rankers.length ? 1 : idx + 1}
                      </div>

                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-orange-400 flex items-center justify-center text-white font-semibold mx-auto mb-4 mt-2">
                        {ranker.imageUrl ? (
                          <img
                            src={ranker.imageUrl}
                            alt={ranker.studentName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xs sm:text-sm">Photo</span>
                        )}
                      </div>

                      <h3
                        className="text-base sm:text-lg font-bold text-center"
                        style={{ color: "var(--text-dark)" }}
                      >
                        {ranker.studentName}
                      </h3>

                      <p className="text-orange-600 font-bold text-center mt-2 text-sm sm:text-base">
                        {ranker.percentage} Marks
                      </p>

                      <div className="mt-3 sm:mt-4 text-center">
                        <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                          {ranker.course}
                        </span>
                      </div>
                    </PremiumCard>
                  </div>
                ))}
              </div>
            </div>


          </>
        ) : null}
      </div>
    </section>
  );
}