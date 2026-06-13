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
    <section className="py-20 bg-slate-50">
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
        <div className="relative mt-20">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-1 -translate-y-1/2 bg-gradient-to-r from-[#062b5b] to-[#ff7a00]" />

          {/* Vertical Line for Mobile */}
          <div className="block md:hidden absolute left-[50%] top-[5%] bottom-[5%] w-1 -translate-x-1/2 bg-gradient-to-b from-[#062b5b] to-[#ff7a00]" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-0 relative z-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center relative group"
              >
                {/* Outer Circle (Halo effect) */}
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  {/* Inner Solid Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#ff7a00] shadow-md shadow-orange-500/50" />
                </div>
                
                {/* Title */}
                <h3 className="text-[#062b5b] font-bold text-center text-sm sm:text-base px-2">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
