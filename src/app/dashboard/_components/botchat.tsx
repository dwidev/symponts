import React from "react";
import { RiMentalHealthLine } from "react-icons/ri";

type BotChatProps = {
  question: string;
};

export default function BotChat(props: BotChatProps) {
  const { question } = props;
  return (
    <section className="flex flex-row mb-5">
      <RiMentalHealthLine className="size-5 self-end text-gray-400" />
      <div className="bubble-chat p-4">
        <p className="ml-1 text-sm">🩺 {question}</p>
      </div>
    </section>
  );
}
