"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { UserChat } from "./userchat";
import { trpc } from "@/trpc/client";
import { Message } from "@/types/chats";
import BotChat from "@/components/shared/chat/botchat";
import { useParams } from "next/navigation";

const ChatBuilder = () => {
  const { chatid } = useParams();
  const { data: chat, isLoading } = trpc.chat.list.useQuery({
    chatId: chatid as string,
  });
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!chat) return;
    setMessages(chat.messages);
  }, [chat]);

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <p>Is loadingg.......</p>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:w-2xl">
        {messages.map((q, i) => {
          return (
            <section
              key={i}
              className={cn(
                "mb-4 flex flex-col justify-center",
                q.senderType == "ASSISTANT" ? "items-start" : "items-end"
              )}
            >
              {q.senderType == "ASSISTANT" && (
                <div className="flex flex-col">
                  <BotChat question={q.messageText} />
                </div>
              )}
              {q.senderType == "USER" && (
                <UserChat>
                  <p>{q.messageText}</p>
                </UserChat>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ChatBuilder;
