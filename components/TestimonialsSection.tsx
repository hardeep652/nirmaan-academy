"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

const testimonials = [
  {
    name: "Aditya Sharma",
    course: "DDCET Coaching",
    quote:
      "<span className='text-[#0a4d9d] font-semibold'>Nirmaan</span> <span className='text-[#ff7a00] font-semibold'>Academy</span> transformed my understanding of complex engineering concepts. The teachers were incredibly supportive and the mock tests helped me score 99.2% in DDCET!",
  },
  {
    name: "Priya Desai",
    course: "Engineering Tuition",
    quote:
      "The personalized attention I received was outstanding. The faculty broke down difficult topics into simple explanations. I improved my grades significantly.",
  },
  {
    name: "Rahul Patel",
    course: "DDCET Coaching",
    quote:
      "From concept clarity to exam strategy, <span className='text-[#0a4d9d] font-semibold'>Nirmaan</span> <span className='text-[#ff7a00] font-semibold'>Academy</span> covered everything. The weekly tests and feedback sessions kept me on track throughout my preparation.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="section-space bg-blue-50">
      <div className="max-w-7xl mx-auto">
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
            Hear from students who have achieved success through <span className='text-[#0a4d9d] font-semibold'>Nirmaan</span> <span className='text-[#ff7a00] font-semibold'>Academy</span>.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <PremiumCard className="text-center p-12">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-orange-400 flex items-center justify-center text-white font-semibold mx-auto mb-6">
                  Photo
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p 
                  className="text-lg italic leading-relaxed mb-6"
                  style={{ color: "var(--text-dark)" }}
                  dangerouslySetInnerHTML={{ __html: `"${testimonials[currentIndex].quote}"` }}
                />

                {/* Name & Course */}
                <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-orange-600 font-semibold text-sm mt-1">
                  {testimonials[currentIndex].course}
                </p>
              </PremiumCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-blue-900 text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-blue-900 text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition-colors flex items-center justify-center"
            >
              →
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
