"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";
import AGR from "./AGR";
import { useEffect, useState } from "react";

interface TopRanker {
  imageUrl: string;
  studentName: string;
  course: string;
  percentage: number;
}

export default function ResultsSection() {
  const [rankers, setRankers] = useState<TopRanker[]>([]);
  const [loading, setLoading] = useState(true);

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
        ) : (
          <div className="overflow-x-auto scrollbar-hidden pb-4 -mx-4 sm:-mx-0 px-4 sm:px-0">
            <div className="flex gap-4 sm:gap-6 min-w-min">
              {rankers.map((ranker, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex-shrink-0 w-48 sm:w-56"
                >
                  <PremiumCard className="relative h-full">
                    {/* Rank Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      <AGR>AGR</AGR> #{idx + 1}
                    </div>

                    {/* Student Photo */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-orange-400 flex items-center justify-center text-white font-semibold mx-auto mb-4">
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

                    {/* Name */}
                    <h3
                      className="text-base sm:text-lg font-bold text-center"
                      style={{ color: "var(--text-dark)" }}
                    >
                      {ranker.studentName}
                    </h3>

                    {/* Marks */}
                    <p className="text-orange-600 font-bold text-center mt-2 text-sm sm:text-base">
                      {ranker.percentage} Marks
                    </p>

                    {/* Course Badge */}
                    <div className="mt-3 sm:mt-4 text-center">
                      <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                        {ranker.course}
                      </span>
                    </div>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}