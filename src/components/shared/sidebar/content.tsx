import {
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import React, { Suspense } from "react";
import ChatList from "./chat-list";
import { Skeleton } from "@/components/ui/skeleton";

export default function Content() {
  return (
    <SidebarContent className="py-8 mt-5">
      <SidebarGroupContent className="px-2 ">
        <p className="font-semibold ml-2 mb-2">Riwayat</p>
        <SidebarMenu>
          <Suspense fallback={<SkeletonChatList />}>
            <ChatList />
          </Suspense>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarContent>
  );
}

function SkeletonChatList() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        return <Skeleton key={i} className="w-full h-10" />;
      })}
    </>
  );
}
