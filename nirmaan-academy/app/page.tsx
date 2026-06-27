import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AskATopperSection from "@/components/AskATopperSection";
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
      <AskATopperSection />
      <TestimonialsSection />
      <CtaBanner />
      <SuccessJourneySection />
      <Footer />
    </>
  );
}
