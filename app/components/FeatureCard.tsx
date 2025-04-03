import React, { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg p-6 py-3 shadow-sm text-start text-[#0F0E47]">
            <div className="rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-1 text-white">
                {icon}
            </div>
            <h3 className="text-lg">{title}</h3>
            <p className="text-sm text-[#4B5563]">{description}</p>
        </div>
    );
};

export default FeatureCard;