import React from "react";
import BotChat from "../botchat-bubble";
import { UserBubble } from "../user-bubble";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import DatePickerAnswer from "./date-picker";
import { ChoiceQuestion, Question } from "@/types/questions";
import ButtonAnswerChoice from "./button-choice";
import { Textarea } from "@/components/ui/textarea";

export default function QuestionBuilder({
  question,
  onSendAnswer,
}: {
  question: Question[];
  onSendAnswer: (answer: Question) => void;
}) {
  return (
    <>
      {question.map((q, i) => {
        return (
          <section key={i} className="">
            <BotChat question={q.title} />
            <UserBubble>
              {q.type == "button-choice" && (
                <ButtonAnswerChoice
                  choices={(q as ChoiceQuestion<string>).choices}
                  value={q.answer}
                  onClick={() => {
                    onSendAnswer(q);
                  }}
                  onChangeOther={(e) => {
                    console.log(e.target.value);
                  }}
                />
              )}
              {q.type == "date-picker" && (
                <DatePickerAnswer
                  key={i}
                  onSendAnswer={() => onSendAnswer(q)}
                />
              )}
              {q.type == "slider" && (
                <div className="flex flex-row items-center">
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
                    onClick={() => onSendAnswer(q)}
                  >
                    <FaArrowUp />
                  </Button>
                </div>
              )}
              {q.type == "free-text" && (
                <div className="bg-blue-300 max-w-md flex flex-row items-end">
                  <Textarea
                    placeholder="Describe your current condition"
                    className="bg-white min-h-30 w-full max-w-full mr-2.5 resize-none"
                  />
                  <Button
                    size="icon"
                    className="size-7 rounded-full transition hover:scale-105"
                    onClick={() => onSendAnswer(q)}
                  >
                    <FaArrowUp />
                  </Button>
                </div>
              )}
            </UserBubble>
          </section>
        );
      })}
    </>
  );
}
