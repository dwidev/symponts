"use client";
import {
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/trpc/client";

export default function Content() {
  const params = useParams();
  const id = params.chatid as string;

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    trpc.chat.recents.useInfiniteQuery(
      {
        limit: 20,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const el = e.target as HTMLDivElement;
    if (!hasNextPage) return;
    if (isFetchingNextPage) return;

    if (el.scrollHeight - 50 <= el.scrollTop + el.clientHeight) {
      console.log("LOAD MORE");
      fetchNextPage();
    }
  };

  const items = data?.pages.flatMap((page) => page.result) ?? [];

  return (
    <SidebarContent className="py-8 mt-5" onScroll={handleScroll}>
      <SidebarGroupContent className="px-2 ">
        <p className="font-semibold ml-2 mb-2">Riwayat</p>
        <SidebarMenu>
          {isLoading && <SkeletonChatList />}
          {!isLoading &&
            items.map((data, i) => {
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
          {isFetchingNextPage && <SkeletonChatList />}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarContent>
  );
}

function SkeletonChatList() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        return <Skeleton key={i} className="w-full h-10 mb-2" />;
      })}
    </>
  );
}
