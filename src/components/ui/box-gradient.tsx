import { cn } from "@/lib/utils";
import React from "react";

const BoxGradient = ({
  children,
  isFocused = false,
  className,
}: {
  children: React.ReactNode;
  isFocused: boolean;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "shadow-2xl relative p-[2px] rounded-xl overflow-hidden",
        isFocused && "app-gradient",
        className
        // isFocused ? "opacity-100" : "opacity-90"
      )}
    >
      <div className="rounded-xl">{children}</div>
    </div>
  );
};

export default BoxGradient;
