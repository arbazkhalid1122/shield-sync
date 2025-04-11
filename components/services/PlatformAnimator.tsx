// components/PlatformAnimator.js
"use client";
import { useEffect, useState } from "react";

const platforms = ["Azure", "AWS", "GCP"];

export default function PlatformAnimator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % platforms.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block rounded-xl ml-2 mt-2 border border-gray-300 bg-gradient-to-b from-white to-gray-100 px-6 py-3 font-extrabold shadow-md">
      {platforms[currentIndex]}
    </span>
  );
}
