import React from "react";
import AiChatBubble from "./components/aichat-bubble";
import { UserBubble } from "./components/user-bubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { FaArrowUp } from "react-icons/fa";

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

export default function DashboardPage() {
  return (
    <main className="font-mono">
      <section>
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
                variant="outline"
                className="transition hover:scale-105"
                key={e}
              >
                {e}
              </Button>
            );
          })}
        </UserBubble>
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
              className="w-2xs mr-2.5"
            />
            <Button
              size="icon"
              className="size-7 rounded-full transition hover:scale-105"
            >
              <FaArrowUp />
            </Button>
          </div>
        </UserBubble>
      </section>
    </main>
  );
}
