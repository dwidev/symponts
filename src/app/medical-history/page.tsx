"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MedicalHistoryPage() {
  const { push } = useRouter();

  return (
    <div className="w-[50%] bg-red-300">
      <ScrollArea className="max-h-[50%]">
        <div className="flex flex-row">
          <Textarea
            placeholder="Describe your current condition"
            className="bg-white min-h-30 max-w-[100%] resize-none"
          />
          <Button
            size="icon"
            className="size-7 rounded-full transition hover:scale-105"
          >
            <FaArrowUp />
          </Button>
        </div>
      </ScrollArea>
      <h1 className="mt-5 text-2xl mb-10">Medical History</h1>
      <label htmlFor="chronic">
        You have any chronic illnesses?
        <p className="text-sm text-slate-400 italic">
          Tell us if you have any ongoing medical conditions like diabetes,
          hypertension, or asthma, etc.
        </p>
      </label>
      <Input
        id="chronic"
        name="chronic"
        placeholder="Insert Chronic Illnesses"
        className="mt-3 w-1/2 mb-5"
      />
      <label htmlFor="chronic">
        Do you have any known allergies?
        <p className="text-sm text-slate-400 italic">
          This helps us avoid potential risks or incorrect recommendations
        </p>
      </label>
      <Input
        id="chronic"
        name="chronic"
        placeholder="Explain your known allergies"
        className="mt-3 w-1/2 mb-5"
      />
      <label htmlFor="chronic">
        Do you smoke?
        <p className="text-sm text-slate-400 italic mb-2">
          Smoking habits impact your health risks significantly.
        </p>
      </label>
      <div>
        {["Yes", "No"].map((e) => {
          const isYes = e.toLowerCase() == "yes";
          return (
            <Button
              variant="secondary"
              size="lg"
              className={cn(
                "bg-slate-200 p-4 rounded mb-4 cursor-pointer hover:bg-slate-300 border-2 mr-2",
                isYes
                  ? "border-slate-400 bg-slate-300"
                  : "border-transparent bg-slate-100"
              )}
              key={e}
            >
              <p className={isYes ? "font-bold" : ""}>{e}</p>
            </Button>
          );
        })}
      </div>
      <label htmlFor="chronic">
        How often do you exercise?
        <p className="text-sm text-slate-400 italic mb-2">
          Your activity level affects your physical and mental health.
        </p>
      </label>
      <div>
        {["Never", "Once a month", "Every week", "Everyday"].map((e) => {
          const isYes = e.endsWith("k");
          return (
            <Button
              variant="secondary"
              size="lg"
              className={cn(
                "bg-slate-200 p-4 rounded mb-4 cursor-pointer hover:bg-slate-300 border-2 mr-2",
                isYes
                  ? "border-slate-400 bg-slate-300"
                  : "border-transparent bg-slate-100"
              )}
              key={e}
            >
              <p className={isYes ? "font-bold" : ""}>{e}</p>
            </Button>
          );
        })}
      </div>
      <label htmlFor="chronic">
        How would you rate your sleep quality?
        <p className="text-sm text-slate-400 italic mb-5">
          Poor sleep may signal stress, fatigue, or other health concerns.
        </p>
      </label>
      <Slider defaultValue={[4]} max={10} step={1} className="w-1/2" />
      <Button className="mt-10" onClick={() => push("/dashboard")}>
        Save
      </Button>
    </div>
  );
}
