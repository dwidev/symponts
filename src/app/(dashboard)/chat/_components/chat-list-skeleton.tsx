import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";

export default function ChatListSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <section
            key={i}
            className={cn(
              " flex flex-col justify-center",
              i % 2 == 1 ? "items-start" : "items-end"
            )}
          >
            <Skeleton key={i} className="w-[40%] h-[50px] rounded-[10px]" />
          </section>
        );
      })}
    </>
  );
}
