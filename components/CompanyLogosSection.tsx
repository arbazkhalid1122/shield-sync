import CompanyLogos from "./CompanyLogos";

export default function CompanyLogosSection() {
  return (
    <section className="px-4 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="container mx-auto max-w-6xl">
        {/* Main Headline */}
        <h1 className="text-[#0F0E47] text-3xl font-bold text-center mb-6">
          <span className="block">94% of surveyed organizations are</span>
          <span className="block">using public cloud computing services</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#4B5563] text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-12">
          And the most reliable and fastest growing organizations are protecting
          their cloud workloads and staying ahead of the curve with N2WS Backup
          & Recovery
        </p>

        <CompanyLogos />
      </div>
    </section>

  );
}
