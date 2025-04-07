import React from 'react';

interface PricingToggleProps {
    active: 'monthly' | 'annual';
    onChange: (value: 'monthly' | 'annual') => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ active, onChange }) => {
    return (
        <div className="inline-flex items-center bg-gray-100 rounded-sm p-1">
            <button
                className={`py-2 px-4 rounded-sm text-sm ${active === 'monthly' ? 'bg-white shadow-sm' : 'text-[#0F0E47]'
                    }`}
                onClick={() => onChange('monthly')}
            >
                Monthly
            </button>
            <button
                className={`py-2 px-4 rounded-sm text-sm ${active === 'annual' ? 'bg-white shadow-sm' : 'text-[#0F0E47]'
                    }`}
                onClick={() => onChange('annual')}
            >
                Annual
            </button>
        </div>
    );
};

export default PricingToggle;