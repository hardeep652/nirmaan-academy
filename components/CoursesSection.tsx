"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

const courses = [
  {
    title: "DDCET Preparation",
    badge: "Most Popular",
    badgeColor: "bg-orange-500",
    image: "/DDCET.jpeg",
    features: [
      "Full syllabus coverage",
      "Weekly mock tests",
      "Rank improvement focus",
      "Doubt sessions",
    ],
  },
  {
    title: "Engineering Tuition",
    badge: "Diploma & Degree",
    badgeColor: "bg-blue-600",
    features: [
      "Subject-wise classes",
      "Core engineering subjects",
      "Assignment support",
      "Exam prep",
    ],
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function CoursesSection() {
  return (
    <section id="courses" className="section-space section-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Our Programs" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Our Courses & Programs
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive courses designed to help you succeed in DDCET and
            engineering studies.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PremiumCard className="h-full flex flex-col">
                {/* Image */}
                {course.image ? (
                  <div className="min-h-52 w-full rounded-lg overflow-hidden mb-6 relative flex items-center justify-center bg-gray-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="min-h-52 rounded-lg border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center mb-6 text-gray-400">
                    Course Image
                  </div>
                )}

                {/* Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${course.badgeColor} mb-4 w-fit`}
                >
                  {course.badge}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h3>

                {/* Features */}
                <div className="flex-grow mb-6">
                  <ul className="space-y-2">
                    {course.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold mt-0.5">
                          •
                        </span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full px-4 py-3 rounded-lg gradient-orange text-white font-bold hover:shadow-lg transition-shadow">
                  Enroll Now
                </button>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
