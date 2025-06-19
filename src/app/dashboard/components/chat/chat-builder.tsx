import React, { Fragment } from "react";
import BotChat from "../botchat";
import { UserChat } from "../userchat";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import DatePickerAnswer from "./date-picker";
import ButtonAnswerChoice from "./button-choice";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ChatMessage } from "@/types/chat";

export default function ChatBuilder({
  question,
  onSendAnswer,
}: {
  question: ChatMessage[];
  onSendAnswer: (answer: ChatMessage) => void;
}) {
  return (
    <>
      {question.map((q, i) => {
        return (
          <section
            key={i}
            className={cn(
              "mb-4 flex flex-col justify-center",
              q.sender == "bot" ? "items-start" : "items-end"
            )}
          >
            {q.sender == "bot" && <BotChat question={q.content} />}
            {q.sender == "client" && (
              <ClientChatBuilder question={q} onSendAnswer={onSendAnswer} />
            )}
          </section>
        );
      })}
    </>
  );
}

function ClientChatBuilder({
  question: q,
  onSendAnswer,
}: {
  question: ChatMessage;
  onSendAnswer: (answer: ChatMessage) => void;
}) {
  console.log(q.actionType);
  console.log(q.options);

  return (
    <UserChat>
      {q.actionType == "button-choice" && (
        <ButtonAnswerChoice
          choices={q.options ?? []}
          value={q.content}
          onClick={() => {
            onSendAnswer(q);
          }}
          onChangeOther={(e) => {
            console.log(e.target.value);
          }}
        />
      )}
      {q.actionType == "date-picker" && (
        <DatePickerAnswer onSendAnswer={() => onSendAnswer(q)} />
      )}
      {q.actionType == "slider" && (
        <div className="flex flex-row items-center">
          <Slider
            defaultValue={[2]}
            max={10}
            min={1}
            step={1}
            className="w-[250px] mr-2.5"
            disabled={true}
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
      {q.actionType == "free-text" && (
        <div className="w-full flex flex-row items-end">
          <Textarea
            placeholder="Describe your current condition"
            className="bg-transparent max-h-30 w-full resize-none border-none shadow-none focus-visible:ring-0 mr-2"
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
    </UserChat>
  );
}
