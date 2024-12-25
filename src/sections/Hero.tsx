"use client";
import ArrowIcon from "@/components/ArrowIcon";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="text-white bg-black bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] py-[72px] relative overflow-clip sm:py-24">
      <div className="absolute h-[375px] w-[750px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] sm:w-[1536px] sm:h-[768px] sm:top-[calc(100%-120px)] lg:w-[2400px] lg:h-[1200px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 px-2 py-1 border rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative inline-flex">
            <h1 className="inline-flex font-bold tracking-tight text-center text-7xl sm:text-9xl">
              One Task
              <br /> at a Time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                height="200"
                width="200"
                alt="Cursor image"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute top-[56px] left-[498px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt="Cursor image"
                height="200"
                width="200"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="max-w-md mt-8 text-xl tracking-wide text-center">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-5 py-3 font-medium text-black bg-white rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
