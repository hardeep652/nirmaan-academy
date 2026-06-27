import Navbar from "@/components/Navbar";
import PlacementReportSection from "@/components/PlacementReportSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Admission Outcome Report | Nirmaan Academy",
  description: "See where our DDCET rankers and toppers secured admission after studying at Nirmaan Academy.",
};

export default function PlacementReportPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <PlacementReportSection />
      </div>
      <Footer />
    </>
  );
}
