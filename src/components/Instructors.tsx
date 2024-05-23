"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instructors from "@/data/instructorData";

function Instructors() {
  return (
    <div className="overflow-hidden flex relative h-[40rem] items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40 ">
        <h2 className="text-center text-2xl md:text-4xl lg:text-7xl text-white font-bold mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-center mb-4 text-base text-white md:text-lg">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
