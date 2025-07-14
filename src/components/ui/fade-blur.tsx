"use client";
import { motion } from "motion/react";
import React from "react";

export default function FadeBlur({
  children,
  duration = 1.5,
}: {
  duration?: number | undefined;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: duration, ease: "easeOut" }}
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  );
}
