import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FacultyPortfolio from "@/components/FacultyPortfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Nirmaan Academy",
  description:
    "Learn about Nirmaan Academy — Ahmedabad's trusted DDCET coaching institute with 2500+ trained students, expert faculty, and a proven track record of 180+ top rankers.",
};

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
