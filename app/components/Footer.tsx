import Link from "next/link";
import React from "react";
import shield from "../../public/ShieldFrame.svg";
import Image from "next/image";
import FloatingDockDemo from "./FloatingDocks";
const Footer = () => {
  return (
    <footer className="w-full bg-[#0F0E47] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src={shield} alt="shield" width={20} height={20} />
              <span className="text-xl">ShieldSync</span>
            </div>
            <p className="  text-[#9CA3AF]">
              Secure cloud backup solutions for modern businesses
            </p>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="mb-4">Product</h3>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>
                <Link href="#" className=" hover:text-white ">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-white ">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-white ">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className=" mb-4">Company</h3>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>
                <Link href="#" className=" hover:text-white ">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-white ">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-white ">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="col-span-1">
            <h3 className="mb-2">Connect</h3>
            <FloatingDockDemo />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 ">
            © 2025 ShieldSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
