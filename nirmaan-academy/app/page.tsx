import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import SuccessJourneySection from "@/components/SuccessJourneySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <WhyChooseUs />
      <ResultsSection />
      <TestimonialsSection />
      <CtaBanner />
      <SuccessJourneySection />
      <Footer />
    </>
  );
}
