import { UiElement, ChatSelect, MessageSelect } from "@/lib/db/validator/chats";
import { Prisma } from "../../generated/prisma/client";

export type BotUIElement = Prisma.BotUIElementGetPayload<{
  select: typeof UiElement;
}>;

export type Chat = Prisma.ChatGetPayload<{
  select: typeof ChatSelect;
}>;

export type Message = Prisma.MessageGetPayload<{
  select: typeof MessageSelect;
}>;
