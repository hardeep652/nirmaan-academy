import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import PlaylistsSection from "@/components/PlaylistsSection";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <CoursesSection />
        <PlaylistsSection />
      </div>
      <Footer />
    </>
  );
}
