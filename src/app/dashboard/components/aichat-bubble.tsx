import React from "react";
import { RiMentalHealthLine } from "react-icons/ri";

type AiChatBubbleProps = {
  question: string;
};

export default function AiChatBubble(props: AiChatBubbleProps) {
  const { question } = props;
  return (
    <section className="flex flex-row mb-5">
      <RiMentalHealthLine className="size-5 self-end text-gray-400" />

      <div className=" w-fit bg-gray-100 p-4 rounded-2xl ml-3">
        <div className="flex flex-row">
          <p className="ml-1 text-sm">🩺 {question}</p>
        </div>
      </div>
    </section>
  );
}
