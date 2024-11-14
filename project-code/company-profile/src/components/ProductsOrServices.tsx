// src/components/ProductsOrServices.tsx
import React from "react";

const ProductsOrServices: React.FC = () => {
  return (
    <section id="products" className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Products</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="text-center">
          <h3 className="font-semibold text-xl">Guitars</h3>
          <p>High-quality guitars for every level of musician.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Learn More</button>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl">Keyboards</h3>
          <p>State-of-the-art keyboards for all music genres.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Learn More</button>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl">Drums</h3>
          <p>Professional drum kits that sound incredible.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default ProductsOrServices;
