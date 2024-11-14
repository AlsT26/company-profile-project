// src/components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero.jpg";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh] bg-gray-900 text-white flex items-center justify-center" style={{ backgroundImage: `url(hero.jpg)`, backgroundSize: "cover", opacity: "0.8" }}>
      {/* Background Image */}
      {/* <Image src={heroImage} alt="Hero Background" fill quality={80} className="absolute inset-0 z-[-1] object-cover opacity-100" /> */}

      {/* Optional: Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-[-1]"></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Seven Stereo</h1>
        <p className="text-lg md:text-2xl mb-6">Your trusted partner in musical instruments</p>
        <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Explore Our Products
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
