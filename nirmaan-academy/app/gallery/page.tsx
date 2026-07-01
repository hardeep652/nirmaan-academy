import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Nirmaan Academy",
  description:
    "Browse photos and moments from Nirmaan Academy — classroom sessions, events, celebrations, and student life at Ahmedabad's top DDCET coaching institute.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
    </>
  );
}
