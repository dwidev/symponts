import PropmtSection from "@/components/shared/input-prompt/prompt-section";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-full flex">
      <div className="flex-1">
        <div className="size-full flex flex-col justify-center items-center">
          {children}
          <PropmtSection />
        </div>
      </div>
      {/* <div className="flex-1 shadow-2xl bg-red-200"></div> */}
    </div>
  );
}
