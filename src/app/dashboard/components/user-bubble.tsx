import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

type UserBubbleProps = {
  children: React.ReactNode;
};

export function UserBubble(props: UserBubbleProps) {
  const { children } = props;

  return (
    <section className="w-4/5 flex flex-row items-end ml-auto my-2">
      <div className="flex flex-col items-end flex-1 mr-3">
        <div className="bg-gray-100 rounded-2xl p-3 flex flex-wrap gap-1.5 ">
          {children}
        </div>
        <p className="mt-2 italic text-sm text-gray-400">Please select one</p>
      </div>
      <Avatar className="size-5 self-end">
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="object-center rounded-full"
          alt="user avatar"
        />
        <AvatarFallback>user avatar</AvatarFallback>
      </Avatar>
    </section>
  );
}
