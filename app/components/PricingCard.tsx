
import React from 'react';
// import { Check } from 'lucide-react';

interface PricingFeature {
    text: string;
}

interface PricingCardProps {
    title: string;
    price: string;
    features: PricingFeature[];
    ctaText: string;
    isPopular?: boolean;
    isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    features,
    ctaText,
    isPopular = false,
    isHighlighted = false
}) => {
    return (
        <div
            className={`relative rounded-lg p-6 border ${isHighlighted ? 'bg-[#8b8bae] border-none text-white' : 'bg-white border-gray-200'
                }`}
        >
            {isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#0e1128] text-white text-sm font-medium py-1 px-3 rounded-md">
                    Popular
                </div>
            )}
            <h3 className="text-sm font-medium mb-2">{title}</h3>
            <div className="mb-4">
                <span className={`text-3xl font-semibold ${isHighlighted ? 'text-white' : 'text-[#0e1128]'}`}>
                    {price}
                </span>
                {price !== "Custom" && <span className="text-sm">/mo</span>}
            </div>
            <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        {/* <Check size={16} className={`mr-2 ${isHighlighted ? 'text-white' : 'text-[#0e1128]'}`} /> */}
                        <span className="text-sm">{feature.text}</span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full py-2 rounded-md text-center text-sm font-medium 
          ${isHighlighted
                        ? 'bg-[#0e1128] text-white'
                        : 'bg-[#0e1128] text-white'
                    }`}
            >
                {ctaText}
            </button>
        </div>
    );
};

export default PricingCard;