'use client';
import React from 'react';

interface RecoveryTimeBoxProps {
    value: number;
    maxValue: number;
    label: string;
    className?: string;
}

const RecoveryTimeBox: React.FC<RecoveryTimeBoxProps> = ({
    value,
    maxValue,
    label,
    className
}) => {
    // Calculate percentage for the progress ring
    const percentage = (value / maxValue) * 100;

    // Calculate stroke dash properties
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div
            className={`flex items-center justify-center bg-white rounded-lg shadow-md p-3 ${className || ''
                }`}
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* SVG Circle Progress */}
                <svg width="140" height="140" viewBox="0 0 120 120" className="transform -rotate-90">
                    {/* Background circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#70cf98"
                        strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#70cf98"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Text in the middle */}
                <div className="absolute flex flex-col items-center justify-center">
                    <p className="text-lg font-bold text-gray-700">{value}-second</p>
                    <p className="text-sm text-gray-600">{label}</p>
                </div>
            </div>
        </div>
    );
};

export default RecoveryTimeBox;