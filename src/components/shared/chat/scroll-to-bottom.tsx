"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

export default function ScrollToBottom({ onScroll }: { onScroll: () => void }) {
  return (
    <div className="absolute lg:w-2xl h-auto z-50 bottom-5 left-1/2 transform -translate-x-1/2">
      <Button
        onClick={onScroll}
        className="z-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xs p-0 h-10 w-10"
        variant="outline"
      >
        <FaArrowDown />
      </Button>
      <motion.div
        className="h-[50px] pointer-events-none"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          maskImage: "linear-gradient(to top, black, transparent)",
          backdropFilter: "blur(8px)",
        }}
      ></motion.div>
    </div>
  );
}
