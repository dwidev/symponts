import React from "react";
import { cn } from "@/lib/utils";
import ChatBuilder from "./chat-builder";

export default function SymptomChecker() {
  return (
    <div className={cn("size-full flex flex-col px-5 py-5")}>
      <ChatBuilder />
    </div>
  );
}
