'use client';
import { FaLock, FaUnlock } from "react-icons/fa";
import { useState } from "react";

function LockIcon() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "inline-block",
                transition: "transform 0.3s ease",
            }}
        >
            <div
                style={{
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    opacity: 1,
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                }}
            >
                {hovered ? (
                    <FaUnlock color="#0E1E4B" size={26} />
                ) : (
                    <FaLock color="#0E1E4B" size={26} />
                )}
            </div>
        </div>
    );
}

export default LockIcon;
