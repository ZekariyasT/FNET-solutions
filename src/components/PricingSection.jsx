import React, { useState } from "react";

const PricingSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const websitePrice = 7000 * pageCount;
  const mobilePrice = 10000 * pageCount;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Website</h3>
            <p className="text-2xl font-semibold mb-6">{websitePrice} Birr</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Mobile</h3>
            <p className="text-2xl font-semibold mb-6">{mobilePrice} Birr</p>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4">{pageCount} Pages</p>
          <div className="relative px-4 ">
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm text-gray-600">1</span>
              <input
                className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                type="range"
                min={1}
                max={50}
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
              />
              <span className="text-xs md:text-sm text-gray-600">50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
