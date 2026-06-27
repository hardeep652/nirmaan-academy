import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Nirmaan Academy",
  description: "Get in touch with Nirmaan Academy for admission inquiries and more details.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
