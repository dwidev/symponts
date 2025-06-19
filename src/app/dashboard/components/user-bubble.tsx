import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

type UserBubbleProps = {
  children: React.ReactNode;
  answer?: string;
};

export function UserBubble({ children, answer }: UserBubbleProps) {
  return (
    <section className="bg-red-300 w-full flex flex-row items-end">
      <div className="flex flex-col items-end flex-1">
        <div className="bg-gray-100 w-[80%] rounded-2xl p-3 mb-2">{children}</div>
        {answer !== undefined && (
          <p className="italic text-sm text-gray-400">Please select one</p>
        )}
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
