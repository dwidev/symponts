import { Prisma } from "../../../../generated/prisma";

export const UiElement = Prisma.validator<Prisma.BotUIElementSelect>()({
  id: true,
  configuration: true,
  promptText: true,
  elementType: true,
  createdAt: true,
  expiresAt: true,
});

export const MessageSelect = Prisma.validator<Prisma.MessageSelect>()({
  senderType: true,
  messageText: true,
  uiElement: {
    select: UiElement,
  },
});

export const ChatSelect = Prisma.validator<Prisma.ChatSelect>()({
  userId: true,
  messages: {
    select: MessageSelect,
    orderBy: {
      timestamp: "asc",
    },
  },
});
