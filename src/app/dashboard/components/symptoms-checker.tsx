import React from "react";
import AiChatBubble from "./aichat-bubble";
import { UserBubble } from "./user-bubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowUp } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const painLocations: string[] = [
  "Head",
  "Throat",
  "Chest",
  "Stomach",
  "Back",
  "Joints",
  "Abdomen",
  "Neck",
  "Shoulders",
  "Arms",
  "Legs",
  "Feet",
  "Hands",
  "Skin",
  "Eyes",
  "Ears",
  "Whole body",
  "Other",
];

export default function SymptomChecker({ onClick, show }: { onClick: () => void, show: boolean }) {
  return (
    <div className={cn("size-full flex flex-col justify-center px-5 py-5")}>
      <AiChatBubble question="Where is your pain or discomfort located?" />
      <UserBubble>
        {painLocations.map((e) => {
          if (e == "Other") {
            return (
              <Input
                key={e}
                placeholder="type other.."
                className="w-32 bg-white"
              />
            );
          }
          return (
            <Button
              onClick={onClick}
              variant="outline"
              className="transition hover:scale-105"
              key={e}
            >
              {e}
            </Button>
          );
        })}
      </UserBubble>
      {show && (
        <>
          <AiChatBubble question="When did these symptoms start?" />
          <UserBubble>
            <div className="flex flex-row items-center">
              <Input placeholder="When..." className="bg-white mr-2.5" />
              <Button
                size="icon"
                className="size-7 rounded-full transition hover:scale-105"
              >
                <FaArrowUp />
              </Button>
            </div>
          </UserBubble>
          <AiChatBubble question="How intense is the pain or discomfort?" />
          <UserBubble>
            <div className="flex flex-row">
              <Slider
                defaultValue={[2]}
                max={10}
                min={1}
                step={1}
                className="w-[80%] mr-2.5"
              />
              <Button
                size="icon"
                className="size-7 rounded-full transition hover:scale-105"
              >
                <FaArrowUp />
              </Button>
            </div>
          </UserBubble>
          <AiChatBubble question="Have you taken any medication to treat this?" />
          <UserBubble>
            <div className="flex flex-row">
              <Button variant="outline" className="mr-2">
                Yes Already
              </Button>
              <Button variant="outline">Not Yet</Button>
            </div>
          </UserBubble>
          <AiChatBubble question="Can you describe your current condition?" />
          <UserBubble>
            <div className="flex flex-row items-end">
              <Textarea
                placeholder="Describe your current condition"
                className="bg-white h-30 mr-2.5"
              />
              <Button
                size="icon"
                className="size-7 rounded-full transition hover:scale-105"
              >
                <FaArrowUp />
              </Button>
            </div>
          </UserBubble>
        </>
      )}
    </div>
  );
}
