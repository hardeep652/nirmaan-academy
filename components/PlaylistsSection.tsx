"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";
import PremiumCard from "./ui/PremiumCard";

interface Playlist {
  title: string;
  playlistId: string;
  videoCount: string;
  thumbnail: string;
  category: string;
}

const playlists: Playlist[] = [
  {
    title: "DDCET (Diploma to Degree Common Entrance Test)",
    playlistId: "PL_IALEJPE_rGa_aHBrt90FnWU3a0Ccfdj",
    videoCount: "2 videos",
    thumbnail: "https://i.ytimg.com/vi/FKxGdS2Q4vE/hqdefault.jpg",
    category: "DDCET",
  },
  {
    title: "Discrete Mathematics (Maths 4) Paper Solution - GTU BE Sem 4 (CE/IT)",
    playlistId: "PL_IALEJPE_rH17dAOny4KZ_J2SkQJB_Iu",
    videoCount: "8 lessons",
    thumbnail: "https://i.ytimg.com/vi/iFnRNjgiCJk/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Engineering Mathematics (Maths 2) - GTU Diploma Sem 2",
    playlistId: "PL_IALEJPE_rEc0uZzJR7DuaUgBJLN_Mt8",
    videoCount: "5 videos",
    thumbnail: "https://i.ytimg.com/vi/3ZwklO09tAs/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Signals & Systems - GTU BE Sem 4 (EC) & 5 (Electrical & Biomedical)",
    playlistId: "PL_IALEJPE_rHb2kOIWtP-nhWFLoWSYpAJ",
    videoCount: "5 videos",
    thumbnail: "https://i.ytimg.com/vi/BWjnsYeMdg0/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Calculator Tricks",
    playlistId: "PL_IALEJPE_rFJwg80j3wgkaIYQSknUaMH",
    videoCount: "2 videos",
    thumbnail: "https://i.ytimg.com/vi/CZPL-29i9qY/hqdefault.jpg",
    category: "Tips",
  },
  {
    title: "Mathematics - GTU Diploma Sem 1",
    playlistId: "PL_IALEJPE_rE7wMxRlP2UAZs46YfImWKX",
    videoCount: "5 lessons",
    thumbnail: "https://i.ytimg.com/vi/_LRJvRf2k8Y/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Digital Electronics - Degree/Diploma Engineering All Branches",
    playlistId: "PL_IALEJPE_rE3gZx5aSJbLKWt4C_6wnfV",
    videoCount: "6 lessons",
    thumbnail: "https://i.ytimg.com/vi/0jHCNKuHTwI/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Offers @ Nirmaan Academy",
    playlistId: "PL_IALEJPE_rE1knA0HYIq7Rc0_rWUs5AN",
    videoCount: "10 videos",
    thumbnail: "https://i.ytimg.com/vi/APq9ZUV583g/hqdefault.jpg",
    category: "Other",
  },
  {
    title: "Probability & Statistics GTU Paper Solution",
    playlistId: "PL_IALEJPE_rHTdu5kCS_FwV-_lLwUVTSb",
    videoCount: "8 lessons",
    thumbnail: "https://i.ytimg.com/vi/muHWU8GP9gg/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Corona Vaccination Info",
    playlistId: "PL_IALEJPE_rEj6vkLrq5rX3Q75Qg4KYKY",
    videoCount: "1 video",
    thumbnail: "https://i.ytimg.com/vi/Le8wK_hnMxw/hqdefault.jpg",
    category: "Other",
  },
  {
    title: "GTU Mass Promotion",
    playlistId: "PL_IALEJPE_rGAKW3jkbk_HadU5UGWTx8n",
    videoCount: "2 videos",
    thumbnail: "https://i.ytimg.com/vi/0yQ6kYeyOZk/hqdefault.jpg",
    category: "Other",
  },
  {
    title: "Mathematics - 2 (Maths 2) - GTU BE Sem 2 All Branches",
    playlistId: "PL_IALEJPE_rHPINB2wwElHyLEQx9KqpIB",
    videoCount: "6 lessons",
    thumbnail: "https://i.ytimg.com/vi/xyjNb_ewU9k/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Discrete Mathematics (Maths 4) - GTU BE Sem 4 CE/IT",
    playlistId: "PL_IALEJPE_rGpoJYaVHQ61mJ_iNa1ihMP",
    videoCount: "17 lessons",
    thumbnail: "https://i.ytimg.com/vi/RXFOKmWjx20/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Useful Information for Students",
    playlistId: "PL_IALEJPE_rGeFBcZrF777HSPTqhi5Irp",
    videoCount: "9 videos",
    thumbnail: "https://i.ytimg.com/vi/OCa2Xhxoml8/hqdefault.jpg",
    category: "Other",
  },
  {
    title: "Applied Mathematics for Electrical Engineering (Maths 3) - GTU BE Sem 3 Electrical",
    playlistId: "PL_IALEJPE_rGGObJpLoKmaO2V4mSe1wbl",
    videoCount: "6 lessons",
    thumbnail: "https://i.ytimg.com/vi/dVLkoTJS8Yg/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Fundamental of Digital Electronics (GTU Diploma Sem 1/2 CE/IT/BM)",
    playlistId: "PL_IALEJPE_rEkA25xuUkPaK_-HkNicGQk",
    videoCount: "1 video",
    thumbnail: "https://i.ytimg.com/vi/VruPVjP5Jlk/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Basic Mathematics (Maths 1) - GTU Diploma Sem 1",
    playlistId: "PL_IALEJPE_rGQR244wWOBBsE-FtHEl1_S",
    videoCount: "1 video",
    thumbnail: "https://i.ytimg.com/vi/lBE_gl_L8i8/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Probability & Statistics (Maths 3) - GTU BE Sem 3 CE/IT/BM/EC",
    playlistId: "PL_IALEJPE_rFNuNrIEU0oFCJyjyuTOhse",
    videoCount: "16 lessons",
    thumbnail: "https://i.ytimg.com/vi/ublRoPW9M8Q/hqdefault.jpg",
    category: "Engineering",
  },
  {
    title: "Digital Memory System (GTU Diploma IT Sem 3)",
    playlistId: "PL_IALEJPE_rH-rcYpofNmW3rf1ak5tiE_",
    videoCount: "4 videos",
    thumbnail: "https://i.ytimg.com/vi/oiLBWnc4tdE/hqdefault.jpg",
    category: "Engineering",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function PlaylistsSection() {
  return (
    <section id="playlists" className="section-space section-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionBadge text="YouTube Playlists" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6">
            Free Video Playlists
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Watch our complete YouTube playlists for DDCET, engineering
            mathematics, electronics, and more.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {playlists.map((pl) => (
            <motion.div key={pl.playlistId} variants={itemVariants}>
              <PremiumCard className="h-full flex flex-col p-5">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100">
                  <Image
                    src={pl.thumbnail}
                    alt={pl.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-100 mb-2 w-fit">
                  {pl.category}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2">
                  {pl.title}
                </h3>

                <p className="text-xs text-gray-500 mb-4">{pl.videoCount}</p>

                <div className="mt-auto">
                  <a
                    href={`https://www.youtube.com/playlist?list=${pl.playlistId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
