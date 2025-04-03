'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Shield from "../../public/ShieldSync.svg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src={Shield} alt="ShieldSync Logo" width={25} height={25} />
                    <span className="text-lg font-semibold text-[#0F0E47] ml-2">ShieldSync</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="#" className="text-gray-700 hover:text-gray-900">Features</Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-900">Solutions</Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-900">Pricing</Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-900">FAQ</Link>
                </div>

                {/* Login & Sign Up */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Login</Link>
                    <Link href="#" className="bg-[#1a1147] text-white px-4 py-2 rounded-md text-sm">Start Free Trial</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-white p-4">
                    <Link href="#" className="text-gray-700 hover:text-gray-900">Features</Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-900">Solutions</Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-900">Pricing</Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-900">FAQ</Link>
                    <hr className="w-full border-gray-200" />
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Login</Link>
                    <Link href="#" className="bg-[#1a1147] text-white px-4 py-2 rounded-md text-sm">Start Free Trial</Link>
                </div>
            )}
        </nav>
    );
}
