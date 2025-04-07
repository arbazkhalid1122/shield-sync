import React, { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg p-6 py-3 shadow-sm text-start text-[#0F0E47]">
            <div className="rounded-full flex items-center justify-center mb-1 mx-auto text-white">
                {icon}
            </div>
            <h3 className="text-xl">{title}</h3>
            <p className="text-base text-[#4B5563] mt-1">{description}</p>
        </div>
    );
};

export default FeatureCard;