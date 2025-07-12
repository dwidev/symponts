import { cn } from "@/lib/utils";
import React from "react";

const BoxGradient = ({
  children,
  isFocused = false,
}: {
  children: React.ReactNode;
  isFocused: boolean;
}) => {
  return (
    <div
      className={cn(
        "shadow-2xl relative p-[2px] rounded-xl overflow-hidden",
        isFocused && "app-gradient"
        // isFocused ? "opacity-100" : "opacity-90"
      )}
    >
      <div className="rounded-xl">{children}</div>
    </div>
  );
};

export default BoxGradient;
