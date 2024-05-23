"use client";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into out comprehensice music courses and transform you musical
          journey today. Whether you&apos;re a beginner or looking to refine
          yourr skills, join us to unlock yuour true potential.
        </p>
        <div className="mt-5">
          <Link href={"/courses"}>
            <Button>Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;