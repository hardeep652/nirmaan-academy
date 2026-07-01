"use client";

import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import { useState } from "react";

interface Category {
  label: string;
  color: string;
  imageCount: number;
  smallVideo?: boolean;
  videos?: (string | undefined)[];
  images?: (string | undefined)[];
}

const categories: Category[] = [
  {
    label: "Class Room",
    color: "from-blue-500 to-cyan-400",
    imageCount: 1,
    videos: [
      "https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good/ayd0ikctbjt3dqz8mznx",
    ],
  },
  {
    label: "Result Celebration",
    color: "from-emerald-500 to-teal-400",
    imageCount: 8,
    smallVideo: true,
    videos: [
      "https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good/v1781895514/ylsqtd67vrweko4armam.mp4",
      "https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good/v1781895512/rerdsqowzi3ddcojydp2.mp4",
    ],
    images: [
      undefined,
      undefined,
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781858006/dsywgcrcvpz5fdcxblym.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781894995/ffd4eiw0owkeytgbhddm.png",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781858007/j0m0u1trqbprkfq0e44s.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781857404/jb6dnntxta3rpwfh6hzt.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781857401/vpnbv7s3pzvc7yvxp7dl.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781857400/dxpp1fhprvatdeaqeljt.jpg",
    ],
  },
  {
    label: "Picnic",
    color: "from-orange-500 to-yellow-400",
    imageCount: 5,
    images: [
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1782539349/ah6ub7qvc4uymfxwnwgw.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1782539352/tyllfmecco4yzeciiijb.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1782539349/e0roouil6orjrr3ljan1.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1782539351/tpl6e7pucat0nt3mgytw.jpg",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1782539347/moffbwbomkhwqbcrkn4t.jpg",
    ],
  },
  {
    label: "Class with Students",
    color: "from-purple-500 to-pink-400",
    imageCount: 4,
    smallVideo: true,
    videos: [
      undefined,
      undefined,
      undefined,
      undefined,
      "https://res.cloudinary.com/dkzmths4e/video/upload/q_auto:good/v1781894141/bmpswruovuydammjyk6n.mp4",
      "https://res.cloudinary.com/dkzmths4e/video/upload/v1782539167/mqxrgzhimj7irf6ra13g.mp4",
    ],
    images: [
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781894642/r5naretrtxpriiqf5yzw.png",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1781894642/fnwzroioitxjnnkiray1.png",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1782884484/caimlacnonxvjnqlefej.png",
      "https://res.cloudinary.com/dkzmths4e/image/upload/v1782884503/eb8dygthg6xsxnha9q9d.png",
    ],
  },
];

const celebration2025Images = [
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1782883441/lgkmtzwhdq4okbau1tlf.jpg",
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1782883440/o4n7lbpub6fpgxavy3nh.jpg",
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1782883441/xtwd7hm2n6mra3f26dju.jpg",
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1782745772/fiv38yrujifyovlkjcrg.jpg",
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1782745771/trambns1celtquu7p0ou.jpg",
  "https://res.cloudinary.com/dkzmths4e/image/upload/v1782745772/n1iaksqeweynacrk69hi.jpg",
];

const celebration2026Videos = [
  "https://res.cloudinary.com/dkzmths4e/video/upload/v1782882849/hwzlrpdewlrxod3zx5g9.mp4",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-space bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionBadge text="Photo Gallery" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            A journey through classrooms, celebrations, picnics, and precious moments with students.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {category.label}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
              </div>

              {category.videos && category.videos.length > 0 && category.smallVideo && (
                <>
                  {category.label === "Result Celebration" && (
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">2025 Celebration</h4>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                    {category.videos.map((videoUrl, vidIdx) =>
                      videoUrl ? (
                        <motion.div
                          key={`${catIdx}-vid-${vidIdx}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: vidIdx * 0.08 }}
                          onClick={() => setSelectedImage(`${catIdx}-${vidIdx}`)}
                          className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                        >
                          <div className="w-full h-full aspect-video">
                            <video
                              src={videoUrl}
                              autoPlay
                              muted
                              playsInline
                              loop
                              preload="auto"
                              className="w-full h-full object-cover"
                              onLoadedMetadata={(e) => e.currentTarget.play().catch(() => {})}
                              onEnded={(e) => e.currentTarget.play().catch(() => {})}
                            />
                          </div>
                        </motion.div>
                      ) : null
                    )}
                  </div>
                  {category.label === "Result Celebration" && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
                      {celebration2025Images.map((url, imgIdx) => (
                        <motion.div
                          key={`2025-img-${imgIdx}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: imgIdx * 0.08 }}
                          onClick={() => setSelectedImage(`2025-${imgIdx}`)}
                          className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group aspect-video"
                        >
                          <img
                            src={url}
                            alt={`2025 Celebration ${imgIdx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {category.label === "Result Celebration" && celebration2026Videos.length > 0 && (
                <>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">2026 Celebration</h4>
                  <div className="flex flex-col md:flex-row gap-5 items-stretch mb-4 sm:mb-5">
                    {/* Left: Video 35% */}
                    <div className="w-full md:w-[30%] flex">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImage(`2026-vid-0`)}
                        className="relative overflow-hidden rounded-[24px] shadow-lg cursor-pointer group w-full"
                      >
                        <video
                          src={celebration2026Videos[0]}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover rounded-[24px]"
                          onLoadedMetadata={(e) => e.currentTarget.play().catch(() => {})}
                          onEnded={(e) => e.currentTarget.play().catch(() => {})}
                        />
                      </motion.div>
                    </div>
                    {/* Right: Images 65% 2x3 grid */}
                    <div className="w-full md:w-[79%] grid grid-cols-3 gap-5 content-center">
                      {[0, 1, 2, 3, 4, 5].map((slotIdx) => {
                        const imgIdx = slotIdx + 2;
                        const imgUrl = category.images?.[imgIdx];
                        return (
                          <motion.div
                            key={`2026-cele-${slotIdx}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: slotIdx * 0.08 }}
                            onClick={() => setSelectedImage(`2026-img-${slotIdx}`)}
                            className="relative overflow-hidden rounded-[24px] shadow-lg cursor-pointer group aspect-square"
                          >
                            {imgUrl ? (
                              <img
                                src={imgUrl}
                                alt={`2026 Celebration ${slotIdx + 1}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            ) : (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-400 transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              </>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
              {category.label !== "Result Celebration" && (
                <div className={`grid gap-4 sm:gap-5 ${category.imageCount === 4 || category.imageCount === 8
                  ? category.label === "Result Celebration"
                    ? "grid-cols-2 md:grid-cols-3"
                    : "grid-cols-2 md:grid-cols-4"
                  : category.imageCount === 5
                    ? "grid-cols-2 md:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  }`}>
                  {Array.from({ length: category.imageCount }).map((_, imgIdx) => {
                    if (category.smallVideo && category.videos?.[imgIdx]) return null;
                    const id = `${catIdx}-${imgIdx}`;
                    return (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: imgIdx * 0.08 }}
                        onClick={() => setSelectedImage(id)}
                        className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group ${category.videos?.[imgIdx] && !category.smallVideo ? "md:col-span-3" : !category.smallVideo && imgIdx === 0 ? "md:col-span-2 md:row-span-2" : ""
                          }`}
                        style={category.videos?.[imgIdx] ? undefined : { minHeight: "180px" }}
                      >
                        {category.videos?.[imgIdx] && !category.smallVideo ? (
                          <div className="w-full">
                            <video
                              src={category.videos[imgIdx]}
                              autoPlay
                              muted
                              playsInline
                              loop
                              preload="auto"
                              className="w-full h-auto max-h-[70vh] object-contain"
                              onLoadedMetadata={(e) => e.currentTarget.play().catch(() => {})}
                              onEnded={(e) => e.currentTarget.play().catch(() => {})}
                            />
                          </div>
                        ) : category.images?.[imgIdx] ? (
                          <img
                            src={category.images[imgIdx]}
                            alt={`${category.label} ${imgIdx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <>
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} transition-transform duration-500 group-hover:scale-110`} />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          </>
                        )}
                        {!category.images && !category.videos && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500 select-none">
                              {category.label === "Class Room" && "📚"}
                              {category.label === "Result Celebration" && "🏆"}
                              {category.label === "Picnic" && "🌳"}
                              {category.label === "Class with Students" && "👨‍🎓"}
                            </span>
                          </div>
                        )}
                        {!category.videos && (
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {category.label !== "Result Celebration" && (
                              <p className="text-white font-semibold text-sm sm:text-lg">
                                {category.label}
                              </p>
                            )}
                            <p className="text-white/70 text-xs sm:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Click to view
                            </p>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "90vh" }}
            >
              {(() => {
                if (selectedImage.startsWith("2026-img-")) {
                  const slotIdx = parseInt(selectedImage.split("-")[2]);
                  const imgIdx = slotIdx + 2;
                  const category = categories.find(c => c.label === "Result Celebration");
                  const imageUrl = category?.images?.[imgIdx];
                  return imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={`2026 Celebration ${slotIdx + 1}`}
                      className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                    />
                  ) : null;
                }
                if (selectedImage.startsWith("2026-vid-")) {
                  const vidIdx = parseInt(selectedImage.split("-")[2]);
                  const videoUrl = celebration2026Videos[vidIdx];
                  return videoUrl ? (
                    <video
                      src={videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      controls
                      className="w-full h-auto max-h-[90vh] rounded-2xl"
                      onLoadedMetadata={(e) => e.currentTarget.play().catch(() => {})}
                      onEnded={(e) => e.currentTarget.play().catch(() => {})}
                    />
                  ) : null;
                }
                if (selectedImage.startsWith("2025-")) {
                  const imgIdx = parseInt(selectedImage.split("-")[1]);
                  const imageUrl = celebration2025Images[imgIdx];
                  return imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={`2025 Celebration ${imgIdx + 1}`}
                      className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                    />
                  ) : null;
                }
                const [catStr, imgStr] = selectedImage.split("-");
                const catIdx = parseInt(catStr);
                const imgIdx = parseInt(imgStr);
                const category = categories[catIdx];
                const imageUrl = category?.images?.[imgIdx];
                const videoUrl = category?.videos?.[imgIdx];
                return videoUrl ? (
                  <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls
                    className="w-full h-auto max-h-[90vh] rounded-2xl"
                    onLoadedMetadata={(e) => e.currentTarget.play().catch(() => {})}
                    onEnded={(e) => e.currentTarget.play().catch(() => {})}
                  />
                ) : imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={`${category.label} ${imgIdx + 1}`}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <span className="text-8xl">
                          {category?.label === "Class Room" && "📚"}
                          {category?.label === "Result Celebration" && "🏆"}
                          {category?.label === "Picnic" && "🌳"}
                          {category?.label === "Class with Students" && "👨‍🎓"}
                        </span>
                        <p className="text-2xl font-bold mt-4">
                          {category?.label}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })()}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors text-sm sm:text-base"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
