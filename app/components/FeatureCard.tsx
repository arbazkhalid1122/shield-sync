import React, { ReactNode } from 'react';

interface FeatureCardProps {
    // icon: ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="rounded-full bg-[#0E1E4B] w-14 h-14 flex items-center justify-center mx-auto mb-5 text-white">
                {/* {icon} */}
            </div>
            <h3 className="text-[#0E1E4B] font-semibold text-lg mb-3">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default FeatureCard;