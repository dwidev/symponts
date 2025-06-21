import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ChatBuilder from "./chat/chat-builder";
import { ChatMessage } from "@/types/chat";
import { CoreMessage } from "ai";
import { SympontResponse } from "@/types/symptoms-schema";

export default function SymptomChecker({
  finish,
}: {
  finish: (res: string) => void;
}) {
  const [question, setQuestion] = useState<Array<ChatMessage>>([]);
  const [aiData, setAiData] = useState<CoreMessage[]>([]);

  React.useEffect(() => {
    console.log("USE EFFECT");
    sendToAI("");
  }, []);

  const sendToAI = async (answer: string) => {
    console.log("SEND TO AI");
    const newQ: CoreMessage = { role: "user", content: answer };
    const updatedHistory = [...aiData, newQ];

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ history: updatedHistory }),
    });
    const result: SympontResponse = await res.json();

    if (!result.nextAction) {
      const q: ChatMessage = {
        id: "result",
        content: result.summary.content,
        type: "bot-question",
        sender: "bot",
      };

      setQuestion((prev) => {
        return [...prev, q];
      });
      finish(result.summary.content);
    }

    if (result.question.length > 0) {
      const q: ChatMessage = {
        id: result.question[0].questionId,
        content: result.question[0].title,
        type: "bot-question",
        sender: "bot",
      };
      const u: ChatMessage = {
        id: "1",
        content: "",
        type: "action",
        actionType: result.question[0].type,
        options: result.question[0].answerOption,
        sender: "client",
      };
      console.log(u);

      const mr = [q, u];
      setQuestion((prev) => {
        return [...prev, ...mr];
      });

      const aiQ: CoreMessage = {
        role: "assistant",
        content: q.content,
      };
      setAiData((prev) => {
        return [...prev, aiQ];
      });
    }
    // setQuestion([
    //   ...updatedHistory,
    //   `AI: ${result.question?.[0] || result.summary}`,
    // ]);
  };

  // const withContent = question.findIndex(
  //   (q) => q.content === "" && q.sender == "client"
  // );

  // const displayedQuestion = question.filter((e, index) => {
  //   return index <= withContent;
  // });

  return (
    <div className={cn("size-full flex flex-col px-5 py-5")}>
      <ChatBuilder
        question={question}
        onSendAnswer={(q) => {
          sendToAI(q);
        }}
      />
    </div>
  );
}
