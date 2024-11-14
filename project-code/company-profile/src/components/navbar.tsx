// src/components/Navbar.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/7stereo-nobg.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image src={logo} alt="company logo" width={50} height={50}></Image>
        </Link>

        {/* Navigation Links in the Center */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/history" className="hover:underline">
            History
          </Link>
        </div>

        {/* Contact Us Button on the Right */}
        <div className="flex space-x-4">
          <Link href="/products">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Products</button>
          </Link>
          <Link href="/teams">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Teams</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
