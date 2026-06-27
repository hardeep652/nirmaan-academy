"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

interface DownloadFile {
  id: string;
  title: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DownloadsSection() {
  const [files, setFiles] = useState<DownloadFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDownloads() {
      try {
        const res = await fetch("/api/downloads");
        const data = await res.json();
        if (data.files) {
          setFiles(data.files);
        }
      } catch (err) {
        console.error("Failed to load downloads:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDownloads();
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionBadge text="Downloads" />
          <h2 className="text-4xl sm:text-5xl font-bold text-[#062b5b] mt-6">
            Study Material & Resources
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Download free study materials, brochures, and important documents to help you prepare better.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : files.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <i className="bi bi-inbox text-4xl block mb-3"></i>
            <p>No documents available yet. Check back soon.</p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {files.map((file) => (
              <motion.div key={file.id} variants={item}>
                <a
                  href={file.downloadUrl}
                  download={file.fileName}
                  className="group block h-full"
                >
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-orange-500 text-lg sm:text-2xl group-hover:scale-110 transition-transform">
                        <i className={`bi ${file.fileType === "PDF" ? "bi-file-earmark-pdf-fill" : "bi-file-earmark-text-fill"}`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-[#062b5b] mb-1 leading-snug group-hover:text-orange-500 transition-colors">
                          {file.title}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-400">
                          <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 font-semibold px-2 py-0.5 rounded-md">
                            <i className="bi bi-filetype-pdf"></i>
                            {file.fileType}
                          </span>
                          <span>{file.fileSize}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 self-center text-gray-300 group-hover:text-orange-400 transition-colors text-lg sm:text-xl">
                        <i className="bi bi-download"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
