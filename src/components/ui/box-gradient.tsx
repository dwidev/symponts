import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const BoxGradient = ({
  children,
  isFocused = false,
}: {
  children: React.ReactNode;
  isFocused: boolean;
}) => {
  return (
    <motion.div
      layout
      transition={{ duration: 10, ease: "easeInOut" }}
      className={cn(
        "shadow-2xl relative p-[2px] rounded-xl overflow-hidden",
        isFocused &&
          "bg-gradient-to-r from-orange-500 via-pink-600 to-purple-500",
        isFocused ? "opacity-100" : "opacity-60"
      )}
    >
      <div className="bg-white rounded-xl">{children}</div>
    </motion.div>
  );
};

export default BoxGradient;
