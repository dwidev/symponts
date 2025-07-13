import { Button } from "@/components/ui/button";
import {
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Content() {
  return (
    <SidebarContent className="py-8 mt-5">
      <SidebarGroupContent className="px-2 ">
        <p className="font-semibold ml-2 mb-2">Riwayat</p>
        <SidebarMenu>
          <SkeletonChatList />
          {Array.from({ length: 100 }).map((_, i) => (
            <SidebarMenuItem key={i} className="group">
              <SidebarMenuButton
                asChild
                isActive={i == 0}
                className="py-2 size-auto"
              >
                <Link
                  href={`/chat/${i}`}
                  className="flex justify-between [&:hover_.menu-button]:opacity-100"
                >
                  <span className="truncate">
                    Sakit kepala banget ini kenapa
                  </span>
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
          ))}
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
