// src/components/CompanyOverview.tsx
import React from "react";

const CompanyOverview: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-8">
      <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
      <p className="text-center mb-8">Seven Stereo is a leading provider of high-quality musical instruments. Founded in 2022, we are passionate about music and committed to providing the best products and services for our customers.</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="text-center">
          <h3 className="font-semibold text-xl">Our History</h3>
          <p>Started with a passion for music, we’ve grown to become a trusted brand in the industry.</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl">Our Team</h3>
          <p>A team of experts dedicated to ensuring customer satisfaction and musical excellence.</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl">Our Culture</h3>
          <p>A culture built on respect, passion, and a love for music.</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
