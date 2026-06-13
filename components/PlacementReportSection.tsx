"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";

interface PlacementStudent {
  id: number;
  name: string;
  rank: number;
  branch: string;
  college: string;
  admissionYear: string;
  testimonial?: string;
  photo?: string;
}

const placementData: Record<string, PlacementStudent[]> = {
  "2024": [
    {
      id: 1,
      name: "Aditya Patel",
      rank: 12,
      branch: "Computer Science & Engineering",
      college: "PDEU, Gandhinagar",
      admissionYear: "2024",
      testimonial:
        "Nirmaan Academy's focused approach helped me secure a rank of 12. The mock tests and regular doubt sessions were crucial to my success.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rank: 28,
      branch: "Information Technology",
      college: "NIT Surat",
      admissionYear: "2024",
      testimonial:
        "The comprehensive curriculum and expert faculty at Nirmaan Academy guided me through every topic. Highly recommended!",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      rank: 45,
      branch: "Mechanical Engineering",
      college: "PDEU, Gandhinagar",
      admissionYear: "2024",
      testimonial:
        "Personalized mentorship and consistent practice helped me achieve my target rank.",
    },
    {
      id: 4,
      name: "Neha Verma",
      rank: 67,
      branch: "Electrical Engineering",
      college: "NIT Surat",
      admissionYear: "2024",
      testimonial:
        "The assignments and regular feedback improved my problem-solving skills significantly.",
    },
  ],
  "2025": [
    {
      id: 5,
      name: "Arjun Singh",
      rank: 8,
      branch: "Computer Science & Engineering",
      college: "PDEU, Gandhinagar",
      admissionYear: "2025",
      testimonial:
        "Nirmaan Academy's structured approach and competitive environment pushed me to excel. Grateful for the guidance!",
    },
    {
      id: 6,
      name: "Divya Menon",
      rank: 32,
      branch: "Information Technology",
      college: "NIT Surat",
      admissionYear: "2025",
      testimonial:
        "The doubt sessions and one-on-one mentoring sessions were game-changers for my preparation.",
    },
    {
      id: 7,
      name: "Vikram Gupta",
      rank: 55,
      branch: "Civil Engineering",
      college: "PDEU, Gandhinagar",
      admissionYear: "2025",
      testimonial:
        "Great faculty and comprehensive study materials. Nirmaan Academy truly cares about student success.",
    },
    {
      id: 8,
      name: "Sneha Desai",
      rank: 73,
      branch: "Mechanical Engineering",
      college: "GEC Surat",
      admissionYear: "2025",
      testimonial:
        "The weekly mock tests helped me understand my strengths and weaknesses better.",
    },
  ],
  "2026": [
    {
      id: 9,
      name: "Karan Joshi",
      rank: 15,
      branch: "Computer Science & Engineering",
      college: "PDEU, Gandhinagar",
      admissionYear: "2026",
      testimonial:
        "The innovative teaching methods and constant support helped me achieve a great rank.",
    },
    {
      id: 10,
      name: "Ananya Gupta",
      rank: 38,
      branch: "Information Technology",
      college: "NIT Surat",
      admissionYear: "2026",
      testimonial:
        "Nirmaan Academy provided the perfect balance of theory and practical problem-solving.",
    },
    {
      id: 11,
      name: "Sarvesh Rao",
      rank: 51,
      branch: "Electrical Engineering",
      college: "PDEU, Gandhinagar",
      admissionYear: "2026",
      testimonial:
        "Excellent mentors, comprehensive notes, and supportive environment made my journey smooth.",
    },
  ],
};

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

export default function PlacementReportSection() {
  return (
    <section className="section-space bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Student Success" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Placement Report
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            See where our DDCET rankers and toppers secured admission after
            studying at Nirmaan Academy.
          </p>
        </motion.div>

        {/* Year Sections */}
        {Object.entries(placementData).map((yearEntry, yearIdx) => {
          const [year, students] = yearEntry;
          return (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: yearIdx * 0.2 }}
              className="mb-16"
            >
              {/* Year Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--dark-blue)" }}>
                  {year} Placement Report
                </h3>
                <div className="h-1 w-24 bg-gradient-orange rounded-full" />
              </div>

              {/* Students Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              >
                {students.map((student, idx) => (
                  <motion.div key={student.id} variants={itemVariants}>
                    <GlassCard className="h-full">
                      <div className="flex gap-6">
                        {/* Photo Placeholder */}
                        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-300 to-orange-300 flex-shrink-0 flex items-center justify-center text-gray-400 text-sm font-semibold overflow-hidden">
                          {student.photo ? (
                            <img
                              src={student.photo}
                              alt={student.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            "Photo"
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          {/* Name & Rank */}
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            {student.name}
                          </h4>
                          <p className="text-sm font-semibold text-orange-600 mb-3">
                            DDCET Rank: {student.rank}
                          </p>

                          {/* Details Grid */}
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Branch:</span>
                              <span className="font-semibold text-gray-900">
                                {student.branch}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">College:</span>
                              <span className="font-semibold text-blue-600">
                                {student.college}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Admission:</span>
                              <span className="font-semibold text-gray-900">
                                {student.admissionYear}
                              </span>
                            </div>
                          </div>

                          {/* Testimonial */}
                          {student.testimonial && (
                            <p className="text-sm text-gray-600 italic border-l-2 border-orange-400 pl-3">
                              "{student.testimonial}"
                            </p>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Join hundreds of successful students who transformed their future
            with Nirmaan Academy's expert guidance and comprehensive preparation.
          </p>
          <button className="px-8 py-3 gradient-orange text-white font-bold rounded-lg hover:shadow-xl transition-shadow">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
