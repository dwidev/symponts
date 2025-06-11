import React from "react";
import AiChatBubble from "./components/aichat-bubble";
import { UserBubble } from "./components/user-bubble";

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

const props = {
  data: painLocations,
};

export default function DashboardPage() {
  return (
    <main className="font-mono">
      {[0, 1, 4].map((e) => {
        return (
          <section key={e}>
            <AiChatBubble />
            <UserBubble {...props} />
          </section>
        );
      })}
    </main>
  );
}
