import { trpc } from "@/trpc/server";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default async function UserAvatar() {
  const data = await trpc.user.profile().catch(() => {
    return null;
  });

  if (data == null) return null;

  return (
    <Avatar className="size-10 cursor-pointer">
      <AvatarImage
        src={data?.user?.image ?? ""}
        className="object-center rounded-full"
        alt="user avatar"
      />
      <AvatarFallback>
        {(data.user?.name ?? "")[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}

export function AvatarSkeleton() {
  return <Skeleton className="w-10 h-10 rounded-full bg-accent" />;
}
