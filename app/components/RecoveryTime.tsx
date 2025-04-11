"use client";
import { useInView } from "@/hooks/useInView";
import React, { useEffect, useState } from "react";
<<<<<<< Updated upstream:app/components/RecoveryTime.tsx
import { useInView } from "./KeyFeatures";
=======
>>>>>>> Stashed changes:components/RecoveryTime.tsx

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
  className,
}) => {
  const [ref, isVisible] = useInView();
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1000; // total animation time
    const increment = value / (duration / 30); // frame increment

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayedValue(value);
        clearInterval(interval);
      } else {
        setDisplayedValue(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  const percentage = (displayedValue / maxValue) * 100;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center bg-white rounded-lg shadow-md p-3 ${
        className || ""
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <svg
          width="140"
          height="140"
          viewBox="0 0 120 120"
          className="transform -rotate-90"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#70cf98"
            strokeWidth="8"
          />
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

        <div className="absolute flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-gray-700">
            {displayedValue}-second
          </p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default RecoveryTimeBox;
