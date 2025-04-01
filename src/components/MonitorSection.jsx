import React from "react";
import monitorImage from "../assets/monitor-card.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col  md:flex-row items-center justify-between gap-12  md:gap-24">
        <div className="md:w-1/2 w-full">
          <p className="text-green-500 font-semibold"> REAL-TIME MONITORING</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Advanced Analytics & Performance Insights
          </h2>
          <p className="text-gray-600 mb-8">
            Gain real-time visibility into your **projects, system performance,
            and team efficiency** with our intelligent monitoring solutions.
            Track key metrics, optimize workflows, and make data-driven
            decisions to enhance productivity.
          </p>
          <a
            href="#"
            className="text-purple-800 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about monitoring
            <IoIosArrowRoundForward className="w-5 h-5" />
          </a>
        </div>
        <div>
          <img src={monitorImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
