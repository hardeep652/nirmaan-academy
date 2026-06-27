"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

const journeySteps = [
  { id: 1, title: "Admission" },
  { id: 2, title: "Preparation" },
  { id: 3, title: "Mock Tests" },
  { id: 4, title: "DDCET Exam" },
  { id: 5, title: "Top Rank" },
  { id: 6, title: "College Admission" },
];

export default function SuccessJourneySection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="SUCCESS JOURNEY" />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#062b5b] mt-6">
            Student Success Journey
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            A simple journey framework that reflects how students move from aspiration to engineering admission.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-20">
          {/* Desktop: Grid */}
          <div className="hidden sm:block">
            <div className="absolute top-1/2 left-[5%] right-[5%] h-1 -translate-y-1/2 bg-gradient-to-r from-[#062b5b] to-[#ff7a00]" />
            <div className="grid grid-cols-6 gap-0 relative z-10">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center justify-center relative group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center mb-2 sm:mb-4 transition-transform group-hover:scale-110">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff7a00] shadow-md shadow-orange-500/50" />
                  </div>
                  <h3 className="text-[#062b5b] font-bold text-center text-xs sm:text-sm md:text-base px-1 sm:px-2">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="sm:hidden overflow-x-auto scrollbar-hidden -mx-4 px-4">
            <div className="relative w-max">
              <div className="absolute top-[1.375rem] left-3 right-3 h-0.5 bg-gradient-to-r from-[#062b5b] to-[#ff7a00]" />
              <div className="flex relative z-10">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center group w-28"
                  >
                    <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110">
                      <div className="w-5 h-5 rounded-full bg-[#ff7a00] shadow-md shadow-orange-500/50" />
                    </div>
                    <h3 className="text-[#062b5b] font-bold text-center text-[10px] px-1 leading-tight">
                      {step.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
