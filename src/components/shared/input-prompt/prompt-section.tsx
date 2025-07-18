"use client";
import { AlertCircle } from "lucide-react";
import React, { useEffect } from "react";
import InputPrompt from "./input";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PropmtSection() {
  const h = usePathname();
  const isNew = h.includes("new");

  // render components & animation when isNew changes
  useEffect(() => {}, [isNew]);

  return (
    <motion.div
      layout
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 70,
        damping: isNew ? 11 : 13,
      }}
    >
      <div className="flex flex-col gap-5 bg-white px-5">
        <InputPrompt isNew={isNew} />
        <div className="flex self-center items-start w-[90%]">
          <AlertCircle size="15" className="text-gray-500" />
          <p className="text-[12px] text-gray-500 text-center mb-2">
            Saran dari AI ini bukan diagnosis medis. Mohon tetap berkonsultasi
            dengan dokter untuk penanganan yang tepat.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
