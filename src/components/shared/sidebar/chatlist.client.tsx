"use client";
import { Button } from "@/components/ui/button";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function ChatListClient({
  data,
}: {
  data: {
    id: string;
    messages: {
      messageText: string;
    }[];
  }[];
}) {
  const params = useParams();
  const id = params.chatid as string;

  return (
    <>
      {data.map((data, i) => {
        const message = data.messages[0];
        const isActive = data.id == id;
        return (
          <SidebarMenuItem key={i} className="group">
            <SidebarMenuButton
              asChild
              isActive={isActive}
              className="py-2 size-auto"
            >
              <Link
                href={`/chat/${data.id}`}
                className="flex justify-between [&:hover_.menu-button]:opacity-100"
              >
                <span className="truncate">{message.messageText}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="app-gradient w-6 h-6 rounded-sm opacity-0 menu-button transition-opacity duration-200"
                >
                  <MoreHorizontal className="w-4 h-4 text-white" />
                </Button>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </>
  );
}
