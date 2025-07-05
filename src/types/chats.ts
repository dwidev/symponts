import { Chat, Prisma } from "../../generated/prisma";

export type ChatConversation = Chat;
export type ChatWithMessages = Prisma.ChatGetPayload<{
  include: {
    messages: {
      include: {
        uiElement: true;
      };
    };
  };
}>;

export type MessageWithElement = ChatWithMessages["messages"][number];
