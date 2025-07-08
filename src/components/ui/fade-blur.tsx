"use client";
import { motion } from "motion/react";
import React from "react";

export default function FadeBlur({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  );
}
