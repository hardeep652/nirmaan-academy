"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";
import AGR from "./AGR";

const toppers = [
  {
    name: "Arjun Patel",
    rank: "AGR #1 DDCET",
    image: null,
    tips: [
      "Focused on conceptual clarity over rote learning",
      "Practiced 3 mock tests every week",
    ],
    quote: "Consistency is the key — study 6 hours daily with full focus.",
  },
  {
    name: "Priya Sharma",
    rank: "AGR #2 DDCET",
    image: null,
    tips: [
      "Created a strict daily timetable and followed it",
      "Revised each topic 3 times before the exam",
    ],
    quote: "Time management during the exam is just as important as preparation.",
  },
  {
    name: "Rahul Verma",
    rank: "AGR #3 DDCET",
    image: null,
    tips: [
      "Focused more on weak subjects first",
      "Took regular feedback from mentors",
    ],
    quote: "Don't ignore your weak areas — turn them into your strength.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AskATopperSection() {
  return (
    <section id="ask-a-topper" className="section-space bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="TRUST" />
          <h2 className="text-4xl sm:text-5xl font-bold mt-6" style={{ color: "var(--dark-blue)" }}>
            Ask a Topper
          </h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto" style={{ color: "var(--text-soft)" }}>
            Learn from the best — top DDCET rankers share their proven strategies, daily routines, and exam tips to help you ace your preparation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {toppers.map((topper, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <PremiumCard className="h-full flex flex-col">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {topper.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>
                    {topper.name}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    <AGR>AGR</AGR> {topper.rank.replace("AGR ", "")}
                  </span>
                </div>

                <div className="flex-grow space-y-3 mb-6">
                  {topper.tips.map((tip, tidx) => (
                    <div key={tidx} className="flex items-start gap-3">
                      <span className="text-orange-500 mt-0.5 shrink-0">★</span>
                      <span className="text-sm" style={{ color: "var(--text-soft)" }}>
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <p className="text-sm italic" style={{ color: "var(--text-dark)" }}>
                    &ldquo;{topper.quote}&rdquo;
                  </p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
