import React from "react";
import hero1 from "../assets/herr.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 sm:px-6 lg:px-8">
      <div className="w-full md:w-1/2 space-y-8">
        <div
          className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 
        transition-colors cursor-pointer group"
        >
          <span className="text-purple-900 group-hover:text-amber-600 group-hover:scale-110 transition-transform">
            ★
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Bridging Business &
          <span className="text-purple-900 relative inline-block">
            Technology with Smart
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-200/60"></span>
          </span>
          Software <span className="inline-block ml-2 animate-pulse">💻</span>
        </h1>
        <p className="text-gray-600 text-lg  md:text-xl max-w-xl">
          Get powerful software solutions, seamless integrations, and advanced
          tools — all in one simple billing.
        </p>
        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl 
            focus:outline-none focus:border-purple-600 focus:ring-2
             focus:ring-purple-100 transition-all"
          />
          <button
            className="bg-amber-600 text-white px-8 py-4 rounded-xl hover:bg-amber-700 cursor-pointer
          transition-all hover:shadow-lg hover:shadow-amber-300"
          >
            {" "}
            →
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative flex w-fit">
          <img
            src={hero1}
            alt="hero image"
            className="rounded-lg relative z-10 hover:scale-[1.02]
            transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
