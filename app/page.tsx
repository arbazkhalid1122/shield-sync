import Backup from "./components/Backup";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesGrid from "./components/FeaturesGrid";
import CompanyLogosSection from "./components/CompanyLogosSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F6FA] text-[#4B5563]">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <CompanyLogosSection />
      <Backup />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
