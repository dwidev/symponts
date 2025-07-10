import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

type UserBubbleProps = {
  children: React.ReactNode;
  answer?: string;
};

export function UserChat({ children, answer }: UserBubbleProps) {
  return (
    <div className="w-fit flex flex-row">
      <div className="flex flex-col items-endmr-2">
        <div className="flex flex-col items-end">
          <div className="bubble-chat">{children}</div>
          {answer !== undefined && (
            <p className="italic text-sm text-gray-400">Please select one</p>
          )}
        </div>
      </div>
      <Avatar className="size-5 self-end">
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="object-center rounded-full"
          alt="user avatar"
        />
        <AvatarFallback>user avatar</AvatarFallback>
      </Avatar>
    </div>
  );
}
