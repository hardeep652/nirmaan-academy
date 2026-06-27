import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FacultyPortfolio from "@/components/FacultyPortfolio";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <FacultyPortfolio />
      </div>
      <Footer />
    </>
  );
}
