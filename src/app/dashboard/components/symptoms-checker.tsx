import React from "react";
import AiChatBubble from "./aichat-bubble";
import { UserBubble } from "./user-bubble";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Question } from "@/types/questions";
import { DatePicker } from "@/components/ui/date-picker";
import ButtonAnswerChoice from "@/components/questions/button-answer-choice";

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

export default function SymptomChecker({ onClick }: { onClick?: () => void }) {
  const question: Question[] = [
    {
      id: "1",
      title: "Where is your pain or discomfort located?",
      type: "button-choice",
    },
  ];

  return (
    <div className={cn("size-full flex flex-col justify-center px-5 py-5")}>
      {question.map((q, i) => {
        return (
          <React.Fragment key={i}>
            <AiChatBubble question={q.title} />
            <UserBubble>
              <ButtonAnswerChoice
                choices={painLocations}
                value={q.answer}
                onClick={(value: unknown) => {
                  console.log(value);
                  onClick?.();
                }}
                onChangeOther={(e) => {
                  console.log(e.target.value);
                }}
              />
            </UserBubble>
          </React.Fragment>
        );
      })}
      {true && (
        <>
          <AiChatBubble question="When did these symptoms start?" />
          <UserBubble>
            <div className="flex flex-row items-center">
              <DatePicker />
              <Button
                size="icon"
                className="ml-2 size-7 rounded-full transition hover:scale-105"
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
                className="w-[80px] mr-2.5"
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
