import Image from "next/image"
import Link from "next/link"
import FeatureCard from "./components/FeatureCard"
import CompanyLogos from "./components/CompanyLogos"
import Backup from "./components/Backup"
import TestimonialsSection from "./components/TestimonialsSection"
import PricingSection from "./components/PricingSection"
import FAQSection from "./components/FAQSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeaturesGrid from "./components/FeaturesGrid"
import CompanyLogosSection from "./components/CompanyLogosSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <FeaturesGrid />


      <CompanyLogosSection />
      <Backup />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

