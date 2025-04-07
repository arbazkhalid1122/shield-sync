import CompanyLogos from "./CompanyLogos";
import FeatureCard from "./FeatureCard";
import { MdBackup } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

export default function CompanyLogosSection() {
    return (
        <section className="p-4 bg-gradient-to-b from-white to-cloud-light">
            <section className="px-4 bg-gradient-to-b from-white to-[#F8FAFC]">
                <div className="container mx-auto max-w-6xl">
                    {/* Main Headline */}
                    <h1 className="text-[#0F0E47] text-3xl font-bold text-center mb-6">
                        <span className="block">94% of surveyed organizations are</span>
                        <span className="block">using public cloud computing services</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-[#4B5563] text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-12">
                        And the most reliable and fastest growing organizations are protecting their cloud workloads and staying ahead of the curve with N2WS Backup & Recovery
                    </p>

                    {/* Company Logos */}
                    <CompanyLogos />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-cloud">
                <section className="px-4 py-16 md:py-24 bg-[#F1F5F9]">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-[#0F0E47] text-2xl md:text-3xl text-center mb-12">
                            Key Features
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
                            <FeatureCard
                                icon={<MdBackup color="#0E1E4B" size={26} />}
                                title="Automated Cloud Backups"
                                description="Schedule and manage backups for AWS S3, Azure Blob & GCP Storage"
                            />

                            <FeatureCard
                                icon={<FaLock color="#0E1E4B" size={26} />}
                                title="Immutable & Encrypted Storage"
                                description="Prevent ransomware attacks with AES-256 encryption"
                            />

                            <FeatureCard
                                icon={<FiRefreshCcw color="#0E1E4B" size={26} />}
                                title="One-Click Data Recovery"
                                description="Instantly restore files and folders from cloud backups"
                            />
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}