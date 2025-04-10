"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Shield from "../../public/ShieldSync.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "#", label: "Features" },
    { href: "#", label: "Solutions" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "FAQ" },
  ];
  const renderMenuLinks = (items: { href: string; label: string }[]) =>
    items.map(({ href, label }) => (
      <Link
        key={label}
        href={href}
        className="hover:bg-[#F2F2F2] hover:text-[#0F0E47] px-4 py-2 rounded-md"
      >
        {label}
      </Link>
    ));

  return (
    <nav className="bg-white shadow-md text-[#4B5563] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Shield} alt="ShieldSync Logo" width={25} height={25} />
          <span className="text-[1.375rem] text-[#0F0E47] ml-2">
            ShieldSync
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="md:flex space-x-2 menu-links text-[1.063rem]">
          {renderMenuLinks(menuItems)}
        </div>

        {/* Login & Sign Up */}
        <div className="actions md:flex items-center space-x-4">
          <Link
            href="#"
            className="hover:bg-[#F2F2F2] px-4 py-2 rounded-md text-gray-600 hover:text-[#0F0E47]"
          >
            Login
          </Link>
          <Link
            href="#"
            className="bg-[#0F0E47] text-white px-4 hover:bg-[#09084DB0] py-2 rounded-md"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-white p-4">
          {renderMenuLinks(menuItems)}
          <hr className="w-full border-gray-200" />
          <Link href="#" className="text-gray-600 hover:text-[#0F0E47]">
            Login
          </Link>
          <Link
            href="#"
            className="bg-[#1a1147] text-white px-4 py-2 rounded-md text-sm"
          >
            Start Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
}
