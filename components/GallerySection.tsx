"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

const galleryItems = [
  { id: 1, label: "Class Room" },
  { id: 2, label: "Student Events", tall: true },
  { id: 3, label: "Faculty Team" },
  { id: 4, label: "Results Celebration" },
  { id: 5, label: "Campus Tour", tall: true },
  { id: 6, label: "Workshop" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-space bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionBadge text="Photo Gallery" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Gallery
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Explore moments from our academy - classrooms, events, and student
            celebrations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]"
          style={{
            gap: "22px",
          }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.05 }}
              className={`relative overflow-hidden rounded-lg border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center cursor-pointer group hover:shadow-lg transition-shadow ${
                item.tall ? "md:row-span-2" : ""
              }`}
              style={{
                gridRow: item.tall ? "span 2" : "span 1",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="text-center text-gray-400 font-semibold group-hover:scale-110 transition-transform">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
