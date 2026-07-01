import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import PlaylistsSection from "@/components/PlaylistsSection";
import DownloadsSection from "@/components/DownloadsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Courses | Nirmaan Academy",
  description:
    "Explore Nirmaan Academy's DDCET coaching, degree engineering, and diploma engineering courses in Ahmedabad. Expert faculty, comprehensive study material, and proven results.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <CoursesSection />
        <PlaylistsSection />
        <DownloadsSection />
      </div>
      <Footer />
    </>
  );
}
