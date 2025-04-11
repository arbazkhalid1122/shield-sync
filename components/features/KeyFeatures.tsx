"use client";
import { MdBackup } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { useInView } from "@/hooks/useInView";
import FeatureCard from "../FeatureCard";
import LockIcon from "../LockIcon";

export default function KeyFeaturesSection() {
  const [ref, isVisible] = useInView();

  return (
    <section className="bg-[#F1F5F9]">
      <section className="px-4 py-16 md:py-24">
        <div ref={ref} className="container mx-auto max-w-6xl">
          <h2
            className={`text-[#0F0E47] text-3xl md:text-4xl text-center mb-12 transition-opacity duration-700 ${
              isVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  isVisible ? "fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {i === 0 && (
                  <FeatureCard
                    icon={<MdBackup color="#0E1E4B" size={26} />}
                    iconWrapperClassName="float-hover"
                    title="Automated Cloud Backups"
                    description="Schedule and manage backups for AWS S3, Azure Blob & GCP Storage"
                  />
                )}
                {i === 1 && (
                  <FeatureCard
                    icon={<LockIcon />}
                    title="Immutable & Encrypted Storage"
                    description="Prevent ransomware attacks with AES-256 encryption"
                  />
                )}
                {i === 2 && (
                  <FeatureCard
                    icon={<FiRefreshCcw color="#0E1E4B" size={26} />}
                    iconWrapperClassName="rotate-hover"
                    title="One-Click Data Recovery"
                    description="Instantly restore files and folders from cloud backups"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
