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
  marks?: number;
  collegeName?: string;
  achievementYear?: number;
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
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                {students.map((student) => (
                  <motion.div key={student.id} variants={itemVariants}>
                    <GlassCard className="h-full">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                        {/* Photo */}
                        <div className="mx-auto h-28 w-28 overflow-hidden rounded-lg bg-gradient-to-br from-blue-300 to-orange-300 text-sm font-semibold text-gray-400 sm:mx-0 sm:h-24 sm:w-24 flex-shrink-0 flex items-center justify-center">
                          {student.imageUrl ? (
                            <img
                              src={student.imageUrl}
                              alt={student.studentName}
                              className="h-full w-full object-cover object-top"
                            />
                          ) : (
                            "Photo"
                          )}
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-grow text-center sm:text-left">
                          <h4 className="mb-1 text-lg font-bold text-gray-900 sm:text-xl whitespace-nowrap">
                            {student.studentName}
                          </h4>
                          
                          <p className="mb-3 text-sm font-semibold text-orange-600">
                            DDCET Rank: {student.rank} | Marks: {student.marks != null ? student.marks : "N/A"}
                          </p>

                          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                            <div className="flex flex-col gap-0.5 text-xs sm:flex-row sm:justify-between sm:text-sm">
                              <span className="text-gray-600 shrink-0 mr-2">College:</span>
                              <span className="font-semibold text-blue-600 break-words sm:text-right">
                                {student.collegeName || "N/A"}
                              </span>
                            </div>
                          </div>
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
