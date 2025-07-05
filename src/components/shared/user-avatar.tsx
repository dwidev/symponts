import { trpc } from "@/trpc/server";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

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
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export function AvatarSkeleton() {
  return <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />;
}
