"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

export default function ScrollToBottom({ onScroll }: { onScroll: () => void }) {
  return (
    <div className="absolute w-full h-auto z-50 bottom-0 left-1/2 transform -translate-x-1/2">
      <Button
        onClick={onScroll}
        className="z-10 absolute left-1/2 top-1/2 bottom-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xs p-0 h-10 w-10"
        variant="outline"
        size="sm"
      >
        <FaArrowDown className="text-sm" />
      </Button>
      <motion.div
        className="w-full h-[70px] pointer-events-none px-5"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          maskImage: "linear-gradient(to top, black, transparent)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      ></motion.div>
    </div>
  );
}
