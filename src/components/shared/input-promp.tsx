"use client";

import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function InputPrompt() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-row items-end">
      <Textarea
        placeholder="Describe your current condition"
        className="bg-transparent max-h-50 min-h-30 resize-none border-none shadow-none focus-visible:ring-0 mr-2"
      />
      <Button
        size="icon"
        className="size-7 rounded-full transition hover:scale-105 shadow-xl"
        onClick={() => {
          router.push("/chat/asdasd");
        }}
      >
        <FaArrowUp />
      </Button>
    </div>
  );
}
