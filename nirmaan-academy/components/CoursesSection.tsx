"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

interface Branch {
  name: string;
  subjects: string[];
}

interface Course {
  title: string;
  badge: string;
  badgeColor: string;
  branches: Branch[];
}

const courses: Course[] = [
  {
    title: "D.E (Diploma Engineering)",
    badge: "Diploma",
    badgeColor: "bg-blue-600",
    branches: [
      { name: "C.E / I.T", subjects: ["Maths 1", "Maths 2", "Physics", "Digital Electronics", "Basic Electronics", "Computer Organization & Architecture"] },
    ],
  },
  {
    title: "DDCET (Diploma to Degree Common Entrance Test)",
    badge: "Most Popular",
    badgeColor: "bg-orange-500",
    branches: [
      {
        name: "DDCET Preparation",
        subjects: [
          "Maths",
          "Physics",
          "English",
          "Chemistry",
          "Environmental Science",
          "Computer Practice",
        ],
      },
    ],
  },
  {
    title: "B.E (Bachelor of Engineering)",
    badge: "Degree",
    badgeColor: "bg-blue-600",
    branches: [
      {
        name: "C.E / I.T",
        subjects: [
          "Maths 1",
          "Maths 2",
          "Probability and Statistics",
          "Discrete Mathematics",
          "Signals & Systems",
          "Control Systems",
          "Digital Electronics",
        ],
      },
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
            Explore our range of programs designed to help you build a strong academic foundation.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          {courses.map((course, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PremiumCard className="h-full flex flex-col">
                {/* Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${course.badgeColor} mb-4 w-fit`}
                >
                  {course.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {course.title}
                </h3>

                {/* Branches */}
                <div className="flex-grow mb-6 space-y-4">
                  {course.branches.map((branch, bidx) => (
                    <div key={bidx}>
                      <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-2">
                        {branch.name}
                      </h4>
                      {branch.subjects.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {branch.subjects.map((subject, sidx) => (
                            <span
                              key={sidx}
                              className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-blue-50 text-blue-800 text-xs sm:text-sm font-medium rounded-lg border border-blue-200"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
