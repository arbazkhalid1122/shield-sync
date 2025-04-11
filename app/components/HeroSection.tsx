"use client";
import dynamic from "next/dynamic";

// Lazy-load the client component only in browser
const PlatformAnimator = dynamic(() => import("./PlatformAnimator"), {
  ssr: false, // Prevent it from running on server
});

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0F0E47] mb-4 leading-48px font-bold">
        Effortless Cloud Storage Backups for
        <span className="inline md:block">
<<<<<<< Updated upstream:app/components/HeroSection.tsx
          <span className="inline-block rounded-xl mt-2 border border-gray-300 bg-gradient-to-b from-white to-gray-100 px-6 py-3 font-extrabold shadow-md">
            {platforms[currentPlatformIndex]}
          </span>
=======
          <PlatformAnimator />
>>>>>>> Stashed changes:components/services/HeroSection.tsx
        </span>
      </h1>
      <p className="max-w-3xl mx-auto text-[#4B5563] mb-8">
        ShieldSync automates cloud backups, protects against data loss, and
        ensures instant recovery, all with enterprise-grade security.
      </p>
      <div className="flex flex-col text-lg sm:flex-row justify-center gap-4">
        <button className="bg-[#0F0E47] cursor-pointer hover:bg-[#09084DB0] text-white px-6 py-3 rounded-md font-medium shadow-md transition">
          Start Free Trial
        </button>
        <button className="border border-[#D1D5DB] text-[#1F2937] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
          Watch Demo
        </button>
      </div>
    </section>
  );
}
