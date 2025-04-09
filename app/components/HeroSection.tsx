'use client';
import { useState, useEffect } from "react";

export default function HeroSection() {
    const platforms = ["Azure", "AWS", "GCP"];
    const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlatformIndex((prevIndex) => (prevIndex + 1) % platforms.length);
        }, 1500);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <section className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0F0E47] mb-4 leading-48px font-bold">
                Effortless Cloud Storage Backups for
                <span className="inline md:block">
                    <span className="bg-gradient-to-r ml-[10px] from-[#0F0E47] via-gray-500 to-gray-300 bg-clip-text text-transparent">
                        {platforms[currentPlatformIndex]}
                    </span>
                </span>
            </h1>
            <p className="max-w-3xl mx-auto text-[#4B5563] mb-8">
                ShieldSync automates cloud backups, protects against data loss, and ensures instant recovery,
                all with enterprise-grade security.
            </p>
            <div className="flex flex-col text-lg sm:flex-row justify-center gap-4">
                <button className="bg-[#0F0E47] cursor-pointer hover:bg-[#1E293B] text-white px-6 py-3 rounded-md font-medium shadow-md transition">
                    Start Free Trial
                </button>
                <button className="border border-[#D1D5DB] text-[#1F2937] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                    Watch Demo
                </button>
            </div>
        </section>
    );
}
