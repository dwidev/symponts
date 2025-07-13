import { trpc } from "@/trpc/server";
import React from "react";
import ChatListClient from "./chatlist.client";

export default async function ChatList() {
  const data = await trpc.chat.coversations();

  return <ChatListClient data={data} />;
}
