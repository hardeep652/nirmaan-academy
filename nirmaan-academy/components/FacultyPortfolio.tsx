"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import GlassCard from "./ui/GlassCard";

const facultyMembers = [
  {
    id: 1,
    name: "Prof. Utsav Gandhi",
    qualification: "M. Tech. (EC)",
    experience: "14 years teaching experience in All Engineering Mathematics and other major Engineering subjects",
    expertise: "",
    bio: "Prof. Utsav Gandhi specializes in engineering subjects, delivering clear and structured lessons that help students build strong conceptual foundations. His teaching approach makes even the most challenging topics easy to understand and apply.",
    image: "https://res.cloudinary.com/dkzmths4e/image/upload/v1781946642/uc8r6nxxvhlcuunv8e3d.png",
    socials: [
      { name: "Instagram", icon: "bi-instagram", href: "https://www.instagram.com/gandhiutsav/" },
      { name: "Facebook", icon: "bi-facebook", href: "https://www.facebook.com/utsavgandhi16" },
      { name: "LinkedIn", icon: "bi-linkedin", href: "https://www.linkedin.com/in/utsav-gandhinirmaan/" },
    ],
  },
  {
    id: 2,
    name: "Prof. Meghal Gandhi",
    qualification: "M.Sc. (Biotechnology)",
    experience: "10 years of teaching in English, Environmental Sciences and other communication subjects",
    expertise: "",
    bio: "Prof. Meghal Gandhi specializes in English, Communication, and Environmental Science, with a strong focus on DDCET preparation. Her teaching approach helps students build confidence and excel in competitive exams.",
    image: "https://res.cloudinary.com/dkzmths4e/image/upload/v1781946643/fuo0o2ecpmwkvfmajpqd.png",
    socials: [
      { name: "Instagram", icon: "bi-instagram", href: "https://www.instagram.com/meghal.doshi.gandhi/" },
      { name: "Facebook", icon: "bi-facebook", href: "https://www.facebook.com/meghal.doshi.3" },
    ],
  },
];

export default function FacultyPortfolio() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionBadge text="Faculty Portfolio" />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#062b5b] mt-6">
            Meet Our Expert Educators
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Our esteemed faculty members bring decades of experience and deep subject matter expertise to help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
                {/* Photo */}
                <div className="w-full md:w-1/3 aspect-[4/5] md:aspect-auto md:h-full rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-[#062b5b] mb-1">
                    {faculty.name}
                  </h3>
                  {faculty.expertise && <p className="text-orange-500 font-bold mb-3 sm:mb-4 text-sm sm:text-base">{faculty.expertise}</p>}

                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
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

                  <div className="flex gap-3 mb-3 sm:mb-4">
                    {faculty.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-lg sm:text-xl transition-colors ${social.name === "Instagram" ? "text-[#E4405F] hover:text-[#c13584]" :
                          social.name === "Facebook" ? "text-[#1877F2] hover:text-[#0d65d9]" :
                            "text-[#0A66C2] hover:text-[#004182]"
                          }`}
                        title={social.name}
                      >
                        <i className={`bi ${social.icon}`}></i>
                      </a>
                    ))}
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 italic">
                    &ldquo;{faculty.bio}&rdquo;
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
