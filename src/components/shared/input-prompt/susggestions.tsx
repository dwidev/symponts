"use client";
import BoxGradient from "@/components/ui/box-gradient";
import { Button } from "@/components/ui/button";
import FadeBlur from "@/components/ui/fade-blur";
import { getRandomSymptomQuestions } from "@/lib/data/default-question";
import { getRandomInt } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function Susggestions() {
  const [sugest, setSugest] = useState<string[]>([]);

  useEffect(() => {
    setSugest(getRandomSymptomQuestions());

    const timeout = setInterval(() => {
      setSugest(getRandomSymptomQuestions());
    }, 5000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 mb-0 lg:w-2xl">
      {sugest.map((data, i) => {
        return (
          <FadeBlur key={getRandomInt(i * 256, 1000)} duration={0.65}>
            <BoxGradient
              isFocused
              className="rounded-full transition hover:scale-105 size-auto"
            >
              <Button
                variant="ghost"
                className="bg-white size-auto px-6 py-[7px] rounded-full shadow-2xl"
              >
                <p className="text-[11px] text-gray-600">{data}</p>
              </Button>
            </BoxGradient>
          </FadeBlur>
        );
      })}
    </div>
  );
}
