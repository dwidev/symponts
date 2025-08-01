"use client";

import React from "react";
import { useLandingContext } from "./context";
import { useTypingEffect } from "@/hooks/typingeffect";
import { Message } from "../../../../generated/prisma";
import BotChat from "../chat/botchat";

type BotChatProps = {
  question: Message;
};

export default function LandingBubble(props: BotChatProps) {
  const { question } = props;
  const { onNext } = useLandingContext();
  const { result } = useTypingEffect({
    word: question.messageText,
    onComplete: () => {
      onNext();
    },
  });

  return <BotChat question={result}></BotChat>;
}
