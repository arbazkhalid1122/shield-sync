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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-10">
            <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center mr-1">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold text-black">ShieldSync</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link href="#" className="bg-[#1a1147] text-white px-4 py-2 rounded-md text-sm">
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1147] mb-4">
          Effortless Cloud Storage Backups for
          <br />
          Azure
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          ShieldSync automates cloud backups, protects against data loss, and ensures instant recovery
          <br />
          all with enterprise-grade security.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#1a1147] text-white px-6 py-3 rounded-md font-medium">Start Free Trial</button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium">Watch Demo</button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Rapid, reliable recovery */}
        <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Rapid, reliable recovery</h3>
          <p className="text-sm mb-6">
            Restore your data in minutes, not hours, to your entire production restore complete with network
            configurations in seconds.
          </p>

          <div className="bg-white rounded-lg p-4 text-black mb-4 max-w-xs">
            <div className="text-sm font-medium mb-1">Capture VPC Settings</div>
            <div className="text-xs">Automatically capture changes in network configurations</div>
          </div>

          <div className="flex space-x-2">
            <div className="bg-white rounded-lg p-2 text-xs text-black">
              <div className="font-medium">Off-of-encrypted resources</div>
            </div>
            <div className="bg-white rounded-lg p-2 text-xs text-black">
              <div className="font-medium">Orchestrated recoveries</div>
            </div>
          </div>
        </div>

        {/* Card 2 - Automated cost savings */}
        <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Automated cost savings</h3>
          <p className="text-sm mb-6">
            Save on egress and transfer costs automatically — with NIST Resource Control, storage-optimized archiving
            and ZeroRTO.
          </p>

          <div className="flex justify-between">
            <div className="bg-white rounded-lg p-3 text-black text-center w-36">
              <div className="text-xs text-gray-500">Monthly savings</div>
              <div className="text-2xl font-bold">$1,248</div>
              <div className="text-sm">75%</div>
            </div>

            <div className="bg-white rounded-lg p-3 text-black text-center w-36">
              <div className="text-xs text-gray-500">Storage savings</div>
              <div className="text-2xl font-bold">98%</div>
            </div>
          </div>
        </div>

        {/* Card 3 - Data sovereignty and security */}
        <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Data sovereignty and security</h3>
          <p className="text-sm mb-6">
            Reduce your attack surface. Get total control over your environment with NIST, for complete peace of mind.
          </p>

          <div className="bg-white rounded-lg p-2 text-xs text-black mb-4 max-w-xs">
            <div className="font-medium">NIST server hardening to pay—it's not optional</div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <Image src="/placeholder.svg?height=30&width=30" alt="FR" width={30} height={30} />
            <Image src="/placeholder.svg?height=30&width=30" alt="Security" width={30} height={30} />
            <Image src="/placeholder.svg?height=30&width=30" alt="Shield" width={30} height={30} />
            <Image src="/placeholder.svg?height=30&width=30" alt="NIST" width={30} height={30} />
          </div>
        </div>

        {/* Card 4 - Multi-cloud management */}
        <div className="bg-[#9b9ac7] rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Multi-cloud management</h3>
          <p className="text-sm mb-6">
            Easily manage all backup & recovery policies in different accounts, regions, and clouds—in one place.
          </p>

          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <div className="bg-white rounded-lg p-2 text-xs text-black mb-2 max-w-xs">
                <div className="font-medium">Built for easy multi-tenancy</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-xs text-black max-w-xs">
                <div className="font-medium">Copy audit reports and API</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 w-36 h-24 flex items-center justify-center">
              <div className="flex items-end space-x-1">
                <div className="h-12 w-3 bg-[#1a1147] rounded-t"></div>
                <div className="h-8 w-3 bg-[#1a1147] rounded-t"></div>
                <div className="h-16 w-3 bg-[#1a1147] rounded-t"></div>
                <div className="h-10 w-3 bg-[#1a1147] rounded-t"></div>
                <div className="h-14 w-3 bg-[#1a1147] rounded-t"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-white to-cloud-light">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            {/* Main Headline */}
            <h1 className="text-navy text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6" />
            <h1 className="text-[#0E1E4B] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
              <span className="block">94% of surveyed organizations are</span>
              <span className="block">using public cloud computing services</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-12">
              And the most reliable and fastest growing organizations are protecting their cloud workloads and staying ahead of the curve with N2WS Backup & Recovery
            </p>

            {/* Company Logos */}
            <CompanyLogos />
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16 md:py-24 bg-cloud">
          <section className="px-4 py-16 md:py-24 bg-[#F1F5F9]">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-navy text-2xl md:text-3xl font-bold text-center mb-12" />
              <h2 className="text-[#0E1E4B] text-2xl md:text-3xl font-bold text-center mb-12">
                Key Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <FeatureCard
                  // icon={<Cloud size={28} />}
                  title="Automated Cloud Backups"
                  description="Schedule and manage backups for AWS S3, Azure Blob & GCP Storage"
                />

                <FeatureCard
                  // icon={<Lock size={28} />}
                  title="Immutable & Encrypted Storage"
                  description="Prevent ransomware attacks with AES-256 encryption"
                />

                <FeatureCard
                  // icon={<RefreshCcw size={28} />}
                  title="One-Click Data Recovery"
                  description="Instantly restore files and folders from cloud backups"
                />
              </div>
            </div>
          </section>
        </section>
      </section>
      <Backup />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

