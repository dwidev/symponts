"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import FadeBlur from "@/components/ui/fade-blur";
import React from "react";

export default function NewHero() {
  return (
    <FadeBlur>
      <h1 className="text-2xl text-gray-600 font-semibold">
        <AuroraText>Hallo,</AuroraText> Fahmi!
      </h1>
      <h1 className="text-3xl">Apa keluhan kamu?!</h1>
    </FadeBlur>
  );
}
