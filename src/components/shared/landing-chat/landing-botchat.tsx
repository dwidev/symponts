"use client";

import React from "react";
import { useLandingContext } from "./context";
import BotChat from "@/app/dashboard/_components/botchat";
import { ChatMessage } from "@/types/chat";
import { useTypingEffect } from "@/hooks/typingeffect";

type BotChatProps = {
  question: ChatMessage;
};

export default function LandingBubble(props: BotChatProps) {
  const { question } = props;
  const { onNext } = useLandingContext();
  const { result } = useTypingEffect({
    word: question.content,
    onComplete: () => {
      onNext();
    },
  });

  return <BotChat question={result}></BotChat>;
}
