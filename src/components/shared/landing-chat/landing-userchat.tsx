import ButtonAnswerChoice from "@/app/dashboard/_components/chat/button-choice";
import { UserChat } from "@/app/dashboard/_components/userchat";
import { ChatMessage } from "@/types/chat";
import React, { useEffect, useState } from "react";
import { useLandingContext } from "./context";

export default function LandingUserChat({
  question,
}: {
  question: ChatMessage;
}) {
  const { onNext } = useLandingContext();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const int = setTimeout(() => {
      onNext();
      setIsComplete(true);
    }, 1000);

    return () => clearTimeout(int);
  }, [onNext, isComplete]);

  return (
    <UserChat>
      <ButtonAnswerChoice
        choices={question.options ?? []}
        value={question.content}
        onClick={() => {}}
        onChangeOther={() => {}}
      />
    </UserChat>
  );
}
