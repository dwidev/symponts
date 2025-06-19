import React, { useState } from "react";
import { cn } from "@/lib/utils";
import QuestionBuilder from "./answers/question";
import { Question } from "@/types/questions";

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

const hardcodeQuestion: Question[] = [
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
  {
    id: "3",
    title: "How intense is the pain or discomfort?",
    type: "slider",
  },
  {
    id: "4",
    title: "Have you taken any medication to treat this?",
    type: "button-choice",
    choices: ["Yes Already", "Not Yet"],
  },
  {
    id: "5",
    title: "Can you describe your current condition?",
    type: "free-text",
  },
];

export default function SymptomChecker({ finish }: { finish: () => void }) {
  const [question, setQuestion] = useState<Array<Question>>(hardcodeQuestion);

  function setAnswer(q: Question) {
    setQuestion((prev) => {
      return prev.map((e) => {
        return e.id == q.id ? { ...e, answer: "answer" } : e;
      });
    });

    if (q.id == "5") {
      finish();
    }
  }

  const answeredQuestion = question.filter((e) => e.answer != null);
  const firstUnansweredQuestion = question.find(
    (q) => q.answer === undefined || q.answer === null || q.answer === ""
  );
  const displayedQuestion = firstUnansweredQuestion
    ? [...answeredQuestion, firstUnansweredQuestion]
    : question;

  console.log(question);

  return (
    <div className={cn("size-full flex flex-col px-5 py-5 bg-yellow-200")}>
      <QuestionBuilder
        question={question}
        onSendAnswer={(q) => {
          setAnswer(q);
        }}
      />
    </div>
  );
}
