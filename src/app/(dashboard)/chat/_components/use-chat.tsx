import { trpc } from "@/trpc/client";
import { MessageStream } from "@/types/chats";
import { SympontResponse, transformToMessage } from "@/types/symptoms-schema";
import { useState } from "react";

export const useChat = () => {
  const [submit, setSubmit] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<MessageStream[]>([]);

  const handleSubmit = (message: string) => {
    setPrompt(message);
    setSubmit(true);
  };

  trpc.ai.generate.useSubscription(
    {
      message: prompt,
    },
    {
      enabled: submit,
      onComplete: () => {
        setMessages((prev) => prev.map((e) => ({ ...e, onStream: false })));
      },
      onData: (data) => {
        if (!data) return;

        setMessages((prev) => {
          const parse = transformToMessage(data as SympontResponse);
          if (!parse) return prev;

          const msg = prev.find((e) => e.onStream === true);
          if (!msg) {
            const newMessage = { ...parse, onStream: true };
            return [...prev, newMessage];
          } else {
            const newMessage = {
              ...msg,
              messageText: parse?.messageText || "",
              onStream: true,
            };
            return prev.map((e) => {
              if (e.onStream === true) {
                return newMessage;
              }
              return e;
            });
          }
        });
      },
    }
  );

  return {
    messages,
    setMessages,
    handleSubmit,
  };
};
