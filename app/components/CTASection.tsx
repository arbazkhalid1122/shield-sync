import Link from 'next/link';
import React from 'react';

const CTASection = () => {
    return (
        <section className="w-full bg-white py-20 text-[#0F0E47] text-center">
            <div className="container mx-auto px-4">
                <h2 className=" text-3xl md:text-4xl mb-4">
                    Start Protecting Your Cloud Data Today
                </h2>
                <p className="mb-8">
                    Join thousands of SMBs who trust ShieldSync for their cloud backup needs
                </p>
                <Link
                    href="/signup"
                    className="inline-block bg-[#0F0E47] text-white py-3 px-8 rounded font-medium hover:bg-[#1E293B] transition-colors"
                >
                    Sign Up for Free
                </Link>
            </div>
        </section>
    );
};

export default CTASection;