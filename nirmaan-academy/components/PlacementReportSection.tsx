"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";
import { useEffect, useState } from "react";

interface StudentData {
  id: number;
  studentName: string;
  imageUrl: string;
  course: string;
  rank: number;
  marks?: number;           // ← Changed from percentage to marks
  collegeName?: string;
  branchName?: string;
  admissionYear: number;
  achievementYear?: number;
  testimonial?: string;
  featured?: boolean;
  displayOrder?: number;
}

const YEARS = [2024, 2025, 2026];

export default function PlacementReportSection() {
  const [placementData, setPlacementData] = useState<Record<string, StudentData[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const grouped: Record<string, StudentData[]> = {};

        for (const year of YEARS) {
          const res = await fetch(`/api/students/year/${year}`);
          if (res.ok) {
            const students: StudentData[] = await res.json();
            if (students.length > 0) {
              const sorted = students.sort((a, b) => 
                (a.displayOrder || 999) - (b.displayOrder || 999)
              );
              grouped[year.toString()] = sorted;
            }
          }
        }

        setPlacementData(grouped);
      } catch (err) {
        console.error("Failed to fetch students:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section-space bg-white">
        <div className="max-w-7xl mx-auto text-center py-20">
          Loading placement data...
        </div>
      </section>
    );
  }

  return (
    <section className="section-space bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionBadge text="Student Success" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Admission Outcome Report
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            See where our DDCET rankers and toppers secured admission after studying at Nirmaan Academy.
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
              className="mb-12 sm:mb-16"
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: "var(--dark-blue)" }}>
                  {year} Admission Outcome Report
                </h3>
                <div className="h-1 w-20 sm:w-24 bg-gradient-orange rounded-full" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
              >
                {students.map((student) => (
                  <motion.div key={student.id} variants={itemVariants}>
                    <GlassCard className="h-full">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        {/* Photo */}
                        <div className="w-full sm:w-24 h-48 sm:h-24 rounded-lg bg-gradient-to-br from-blue-300 to-orange-300 flex-shrink-0 flex items-center justify-center text-gray-400 text-sm font-semibold overflow-hidden">
                          {student.imageUrl ? (
                            <img
                              src={student.imageUrl}
                              alt={student.studentName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            "Photo"
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                            {student.studentName}
                          </h4>
                          
                          <p className="text-sm font-semibold text-orange-600 mb-3">
                            DDCET Rank: {student.rank} | Marks: {student.marks != null ? student.marks : "N/A"}
                          </p>

                          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-600 shrink-0 mr-2">Branch:</span>
                              <span className="font-semibold text-gray-900 text-right">
                                {student.branchName || student.course || "N/A"}
                              </span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-600 shrink-0 mr-2">College:</span>
                              <span className="font-semibold text-blue-600 text-right">
                                {student.collegeName || "N/A"}
                              </span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-600 shrink-0 mr-2">Admission:</span>
                              <span className="font-semibold text-gray-900 text-right">
                                {student.admissionYear}
                              </span>
                            </div>
                          </div>

                          {student.testimonial && (
                            <p className="text-xs sm:text-sm text-gray-600 italic border-l-2 border-orange-400 pl-3">
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
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Join hundreds of successful students who transformed their future
            with Nirmaan Academy's expert guidance and comprehensive preparation.
          </p>
          <Link href="/admissions" className="px-6 sm:px-8 py-2.5 sm:py-3 gradient-orange text-white font-bold rounded-lg hover:shadow-xl transition-shadow inline-block text-sm sm:text-base">
            Start Your Journey Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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