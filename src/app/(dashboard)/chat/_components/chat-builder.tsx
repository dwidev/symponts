"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { UserChat } from "./userchat";
import { trpc } from "@/trpc/client";
import { Message } from "@/types/chats";
import BotChat from "@/components/shared/chat/botchat";
import { useParams } from "next/navigation";
import ChatListSkeleton from "./chat-list-skeleton";

const ChatBuilder = () => {
  const { chatid } = useParams();
  const { data: chat, isLoading } = trpc.chat.list.useQuery({
    chatId: chatid as string,
  });
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!chat) return;
    const c = chat.messages.map((e) => ({ ...e, onStream: false }));
    setMessages(c);
  }, [chat]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="sm:w-2xl sm:px-5">
        {isLoading && <ChatListSkeleton />}
        {!isLoading &&
          messages.map((q, i) => {
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
        <div className="flex flex-col h-[200px]">
          <div className="self-end">
            <UserChat>
              <p>saya sakit kepala lagi</p>
            </UserChat>
          </div>
          <div className="flex gap-1.5 bg-accent/50 w-fit py-2 px-3 border-dashed border-2 rounded-sm">
            {/* DISK GENERATOR */}
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 rounded-full animate-spin bg-linear-to-t from-orange-500 via-pink-600 to-purple-500 "></div>
              <div className="absolute inset-1/6 rounded-full bg-accent"></div>
            </div>
            <p className="font-semibold text-sm animate-pulse">Sebentar ya...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBuilder;
