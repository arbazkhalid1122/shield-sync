import TestimonialsSection from "../components/Testimonial/TestimonialsSection";
import PricingSection from "@/components/Pricing/PricingSection";
import FAQSection from "@/components/FAQ/FAQSection";
import CTASection from "../components/CTA/CTASection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/services/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CompanyLogosSection from "../components/CompanyLogosSection";
import Backup from "@/components/Backup/Backup";
import KeyFeaturesSection from "@/components/features/KeyFeatures";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F6FA] text-[#4B5563]">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <CompanyLogosSection />
      <KeyFeaturesSection />
      <Backup />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
