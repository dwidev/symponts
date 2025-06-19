import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ChatBuilder from "./chat/chat-builder";
import { ChatMessage } from "@/types/chat";

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

const hardcodeQuestion: ChatMessage[] = [
  {
    id: "1",
    content: "Where is your pain or discomfort located?",
    type: "text",
    sender: "bot",
  },
  {
    id: "1-1",
    content: "",
    type: "action",
    actionType: "button-choice",
    sender: "client",
    options: painLocations,
  },
  {
    id: "2",
    content: "When did these symptoms start?",
    type: "text",
    sender: "bot",
  },
  {
    id: "2-1",
    content: "",
    sender: "client",
    type: "action",
    actionType: "date-picker",
  },
  {
    id: "3",
    content: "How intense is the pain or discomfort?",
    type: "text",
    sender: "bot",
  },
  {
    id: "3-1",
    content: "",
    type: "action",
    actionType: "slider",
    sender: "client",
  },
  {
    id: "4",
    content: "Have you taken any medication to treat this?",
    type: "text",
    sender: "bot",
  },
  {
    id: "4-1",
    content: "",
    type: "action",
    actionType: "button-choice",
    sender: "client",
    options: ["Yes Already", "Not Yet"],
  },
  {
    id: "5",
    content: "Can you describe your current condition?",
    type: "text",
    sender: "bot",
  },
  {
    id: "5-1",
    content: "",
    type: "action",
    actionType: "free-text",
    sender: "client",
  },
];

export default function SymptomChecker({ finish }: { finish: () => void }) {
  const [question, setQuestion] =
    useState<Array<ChatMessage>>(hardcodeQuestion);

  async function setAnswer(q: ChatMessage) {
    setQuestion((prev) => {
      return prev.map((e) => {
        return e.id == q.id ? { ...e, content: "answer" } : e;
      });
    });

    if (q.id == "5-1") {
      finish();
    }
  }

  const withContent = question.findIndex(
    (q) => q.content === "" && q.sender == "client"
  );

  const displayedQuestion = question.filter((e, index) => {
    return index <= withContent;
  });

  return (
    <div className={cn("size-full flex flex-col px-5 py-5")}>
      <ChatBuilder
        question={displayedQuestion}
        onSendAnswer={(q) => {
          setAnswer(q);
        }}
      />
    </div>
  );
}
