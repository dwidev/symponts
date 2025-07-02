"use client";

import { Stethoscope } from "lucide-react";
import React, { useEffect, useState } from "react";

type BotChatProps = {
  question: string;
  onDoneTyping?: () => void;
};

export default function BotChat(props: BotChatProps) {
  const { question, onDoneTyping } = props;
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < question.length) {
      const element = question[index];
      const timeout = setTimeout(() => {
        setMessage((prev) => (prev += element));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      onDoneTyping?.();
    }
  }, [question, index, onDoneTyping]);

  return (
    <section className="flex flex-row mb-5">
      <Stethoscope className="size-5 self-end text-slate-400" />
      <div className="bubble-chat p-4 w-fit min-w-[80%]">
        <p className="ml-1 text-sm">🩺 {message}</p>
      </div>
    </section>
  );
}
