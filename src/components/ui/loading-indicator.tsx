import { cn } from "@/lib/utils";
import React from "react";

export default function LoadingIndicator({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative w-3 h-3", className)}>
      <div className="absolute inset-0 rounded-full animate-spin app-gradient"></div>
      <div className="absolute inset-1/6 rounded-full bg-accent"></div>
    </div>
  );
}
