import React from "react";
import scheduleImage from "../assets/stats.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col  md:flex-row items-center justify-between gap-12  md:gap-24">
        <div>
          <img src={scheduleImage} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold">WORKFLOW MANAGEMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Optimize Your Software <br />
            Development Workflow
          </h2>
          <p className="text-gray-600 mb-8">
            Enhance team productivity and streamline project execution with our
            intelligent scheduling and workflow automation system. Manage
            sprints, track milestones, and ensure seamless collaboration with
            real-time scheduling.
          </p>
          <a
            href="#"
            className="text-purple-800 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Discover workflow solutions
            <IoIosArrowRoundForward className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
