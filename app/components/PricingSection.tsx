'use client';
import React, { useState } from 'react';
import PricingCard from './PricingCard';
import PricingToggle from './PricingToggle';


const PricingSection: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0e1128] mb-10">
                Simple, Transparent Pricing
            </h2>

            <div className="flex justify-center mb-10">
                <PricingToggle
                    active={billingCycle}
                    onChange={setBillingCycle}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard
                    title="Free Tier"
                    price="$0"
                    features={[
                        { text: "5GB Storage" },
                        { text: "Basic Support" },
                        { text: "1 Cloud Provider" }
                    ]}
                    ctaText="Get Started"
                />

                <PricingCard
                    title="Basic Plan"
                    price="$49"
                    features={[
                        { text: "100GB Storage" },
                        { text: "Priority Support" },
                        { text: "All Cloud Providers" }
                    ]}
                    ctaText="Start Free Trial"
                    isPopular={true}
                    isHighlighted={true}
                />

                <PricingCard
                    title="Pro Plan"
                    price="Custom"
                    features={[
                        { text: "Unlimited Storage" },
                        { text: "24/7 Support" },
                        { text: "Custom Features" }
                    ]}
                    ctaText="Contact Sales"
                />

                <PricingCard
                    title="MSP Plan"
                    price="Custom"
                    features={[
                        { text: "Unlimited Storage" },
                        { text: "24/7 Support" },
                        { text: "Custom Features" }
                    ]}
                    ctaText="Contact Sales"
                />
            </div>
        </section>
    );
};

export default PricingSection;