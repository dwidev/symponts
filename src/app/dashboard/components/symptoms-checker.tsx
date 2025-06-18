import React from "react";
import BotChat from "./botchat-bubble";
import { UserBubble } from "./user-bubble";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ChoiceQuestion, Question } from "@/types/questions";
import ButtonAnswerChoice from "@/app/dashboard/components/answers/button-choice";
import DatePickerAnswer from "./answers/date-picker";

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
      choices: painLocations,
    },
    {
      id: "2",
      title: "When did these symptoms start?",
      type: "date-picker",
    },
  ];

  return (
    <div className={cn("size-full flex flex-col justify-center px-5 py-5")}>
      {question.map((q, i) => {
        if (q.type == "date-picker") {
          return (
            <React.Fragment key={i}>
              <BotChat question={q.title} />
              <UserBubble>
                <DatePickerAnswer key={i} />
              </UserBubble>
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={i}>
            <BotChat question={q.title} />
            <UserBubble>
              <ButtonAnswerChoice
                choices={(q as ChoiceQuestion<string>).choices}
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
          <BotChat question="How intense is the pain or discomfort?" />
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
                aria-label="sendButton"
              >
                <FaArrowUp />
              </Button>
            </div>
          </UserBubble>
          <BotChat question="Have you taken any medication to treat this?" />
          <UserBubble>
            <div className="flex flex-row">
              <Button variant="outline" className="mr-2">
                Yes Already
              </Button>
              <Button variant="outline">Not Yet</Button>
            </div>
          </UserBubble>
          <BotChat question="Can you describe your current condition?" />
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
