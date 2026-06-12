"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

const rankers = [
  {
    rank: "AIR #1",
    name: "Arjun Patel",
    score: "99.2%",
    course: "DDCET",
  },
  {
    rank: "AIR #2",
    name: "Priya Sharma",
    score: "98.8%",
    course: "DDCET",
  },
  {
    rank: "AIR #3",
    name: "Rahul Verma",
    score: "98.5%",
    course: "DDCET",
  },
  {
    rank: "AIR #4",
    name: "Neha Desai",
    score: "98.1%",
    course: "Engineering",
  },
  {
    rank: "AIR #5",
    name: "Amit Kumar",
    score: "97.9%",
    course: "Engineering",
  },
  {
    rank: "AIR #6",
    name: "Zainab Khan",
    score: "97.5%",
    course: "DDCET",
  },
];

export default function ResultsSection() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Our Top Rankers
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Meet the outstanding students who achieved exceptional results
            through Nirmaan Academy.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Row */}
        <div className="overflow-x-auto scrollbar-hidden pb-4">
          <div className="flex gap-6 min-w-min px-0">
            {rankers.map((ranker, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-56"
              >
                <PremiumCard className="relative h-full">
                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {ranker.rank}
                  </div>

                  {/* Photo Placeholder */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-orange-400 flex items-center justify-center text-white font-semibold mx-auto mb-4 text-sm text-center">
                    Photo
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 text-center">
                    {ranker.name}
                  </h3>

                  {/* Score */}
                  <p className="text-orange-600 font-bold text-center mt-2">
                    {ranker.score}
                  </p>

                  {/* Course Badge */}
                  <div className="mt-4 text-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                      {ranker.course}
                    </span>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
