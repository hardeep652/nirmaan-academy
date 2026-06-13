"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    qualification: "Ph.D. in Applied Mathematics",
    experience: "15+ Years",
    expertise: "Mathematics & Applied Sciences",
    bio: "Dr. Sharma has been instrumental in shaping the careers of thousands of engineering aspirants. His unique approach to simplifying complex mathematical concepts makes him a favorite among students.",
    achievements: ["Best Educator Award 2021", "Published 10+ Research Papers"],
    image: null,
  },
  {
    id: 2,
    name: "Prof. Amit Desai",
    qualification: "M.Tech from NIT Surat",
    experience: "12+ Years",
    expertise: "Mechanical & Civil Engineering",
    bio: "With a strong background in practical engineering and theoretical physics, Prof. Desai bridges the gap between academic learning and real-world application, ensuring top ranks in DDCET.",
    achievements: ["GATE Top Ranker 2010", "Ex-Senior Engineer at L&T"],
    image: null,
  },
];

export default function FacultyPortfolio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Faculty Portfolio" />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#062b5b] mt-6">
            Meet Our Expert Educators
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Our esteemed faculty members bring decades of experience and deep subject matter expertise to help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col md:flex-row gap-6 p-6">
                {/* Photo */}
                <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-auto md:h-full rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  {faculty.image ? (
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-blue-300">
                      <i className="bi bi-person-bounding-box text-6xl"></i>
                      <span className="text-sm font-semibold opacity-50">Photo</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#062b5b] mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-orange-500 font-bold mb-4">{faculty.expertise}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex gap-2 text-sm">
                      <i className="bi bi-mortarboard-fill text-[#0a4d9d] mt-0.5"></i>
                      <div>
                        <span className="font-semibold text-gray-700">Qualification: </span>
                        <span className="text-gray-600">{faculty.qualification}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <i className="bi bi-briefcase-fill text-[#0a4d9d] mt-0.5"></i>
                      <div>
                        <span className="font-semibold text-gray-700">Experience: </span>
                        <span className="text-gray-600">{faculty.experience}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    "{faculty.bio}"
                  </p>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-[#062b5b] text-sm mb-2">Achievements & Certifications</h4>
                    <ul className="space-y-1">
                      {faculty.achievements.map((achievement, idx) => (
                         <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                            <i className="bi bi-check-circle-fill text-green-500 mt-0.5"></i>
                            {achievement}
                         </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
