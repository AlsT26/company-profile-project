// src/components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-4 text-center">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="text-center">
          <p className="italic">"Best musical instruments I’ve ever used!"</p>
          <p className="font-semibold">– John D.</p>
        </div>
        <div className="text-center">
          <p className="italic">"Great service and excellent quality products."</p>
          <p className="font-semibold">– Sarah L.</p>
        </div>
        <div className="text-center">
          <p className="italic">"Highly recommend Seven Stereo for any musician."</p>
          <p className="font-semibold">– Mike R.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
