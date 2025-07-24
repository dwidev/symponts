"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { UserChat } from "./userchat";
import BotChat from "@/components/shared/chat/botchat";
import ChatListSkeleton from "./chat-list-skeleton";
import { MessageStream } from "@/types/chats";

const ChatBuilder = ({
  messages,
  isLoading,
}: {
  messages: MessageStream[];
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col lg:justify-center lg:items-center">
      <div className="lg:w-2xl lg:px-5">
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
                    <BotChat message={q} onStream={q.onStream} />
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
