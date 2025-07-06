import React, { useEffect, useState } from "react";
import { useLandingContext } from "./context";
import { Message } from "../../../../generated/prisma";
import ButtonAnswerChoice from "../chat/button-choice";
import { UserChat } from "@/app/(dashboard)/chat/_components/userchat";

export default function LandingUserChat({ question }: { question: Message }) {
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
        choices={[]}
        value={question.messageText}
        onClick={() => {}}
        onChangeOther={() => {}}
        disabled={true}
      />
    </UserChat>
  );
}
