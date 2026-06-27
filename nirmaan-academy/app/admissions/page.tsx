import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AdmissionsForm from "@/components/AdmissionsForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Admissions | Nirmaan Academy",
  description: "Apply for admission to Nirmaan Academy — DDCET coaching, engineering tuition, and more.",
};

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-900 hover:text-orange-500 transition-colors font-medium">
            ← Back to Home
          </Link>
        </div>
        <AdmissionsForm />
      </div>
      <Footer />
    </>
  );
}
