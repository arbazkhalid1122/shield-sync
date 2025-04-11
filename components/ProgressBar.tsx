"use client";
<<<<<<< Updated upstream
import { useInView } from "@/app/components/KeyFeatures";
=======
import { useInView } from "@/hooks/useInView";
>>>>>>> Stashed changes
import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const [ref, isVisible] = useInView();
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1000; // total animation time in ms
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

  // Calculate percentage for the progress bar
  const progressPercentage = displayedValue;

  return (
    <div
      ref={ref}
      className="w-full max-w-md bg-gray-200 rounded-full h-1.5 mt-4"
    >
      <div
        className="bg-[#0A0842] h-1.5 rounded-full"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
