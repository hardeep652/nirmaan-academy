import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

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
