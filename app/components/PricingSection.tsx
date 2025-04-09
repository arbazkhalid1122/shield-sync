"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );
  const [highlightedPlan, setHighlightedPlan] = useState<string | null>(
    "Basic Plan"
  ); // Track highlighted plan

  const handleHighlightToggle = (plan: string) => {
    setHighlightedPlan((prevPlan) => (prevPlan === plan ? null : plan)); // Toggle highlight
  };

  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl md:text-4xl text-center text-[#0F0E47] mb-10">
        Simple, Transparent Pricing
      </h2>

      <div className="flex justify-center mb-10">
        <PricingToggle active={billingCycle} onChange={setBillingCycle} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PricingCard
          title="Free Tier"
          price="$0"
          features={[
            { text: "5GB Storage" },
            { text: "Basic Support" },
            { text: "1 Cloud Provider" },
          ]}
          ctaText="Get Started"
          isHighlighted={highlightedPlan === "Free Tier"} // Check if highlighted
          onClick={() => handleHighlightToggle("Free Tier")}
        />

        <PricingCard
          title="Basic Plan"
          price="$49"
          features={[
            { text: "100GB Storage" },
            { text: "Priority Support" },
            { text: "All Cloud Providers" },
          ]}
          ctaText="Start Free Trial"
          isHighlighted={highlightedPlan === "Basic Plan"}
          onClick={() => handleHighlightToggle("Basic Plan")}
        />

        <PricingCard
          title="Pro Plan"
          price="Custom"
          features={[
            { text: "Unlimited Storage" },
            { text: "24/7 Support" },
            { text: "Custom Features" },
          ]}
          ctaText="Contact Sales"
          isHighlighted={highlightedPlan === "Pro Plan"}
          onClick={() => handleHighlightToggle("Pro Plan")}
        />

        <PricingCard
          title="MSP Plan"
          price="Custom"
          features={[
            { text: "Unlimited Storage" },
            { text: "24/7 Support" },
            { text: "Custom Features" },
          ]}
          ctaText="Contact Sales"
          isHighlighted={highlightedPlan === "MSP Plan"}
          onClick={() => handleHighlightToggle("MSP Plan")}
        />
      </div>
    </section>
  );
};

export default PricingSection;
