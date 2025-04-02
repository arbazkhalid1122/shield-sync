import Link from 'next/link';
import React from 'react';

const CTASection = () => {
    return (
        <section className="w-full bg-white py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-[#0F172A] text-3xl md:text-4xl font-semibold mb-4">
                    Start Protecting Your Cloud Data Today
                </h2>
                <p className="text-gray-600 mb-8">
                    Join thousands of SMBs who trust ShieldSync for their cloud backup needs
                </p>
                <Link
                    href="/signup"
                    className="inline-block bg-[#0F172A] text-white py-3 px-8 rounded font-medium hover:bg-[#1E293B] transition-colors"
                >
                    Sign Up for Free
                </Link>
            </div>
        </section>
    );
};

export default CTASection;