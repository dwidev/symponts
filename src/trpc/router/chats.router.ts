import getChatByID from "@/services/chats/get-chat-by-id";
import { protectedProcedure, router } from "..";
import { z } from "zod";
import { Prisma } from "../../../generated/prisma";

export const chatsRouter = router({
  coversations: protectedProcedure.query(async ({ ctx }) => {
    const { database } = ctx;
    const result = await database.chat.findMany({
      select: {
        id: true,
        messages: {
          take: 1,
          orderBy: {
            timestamp: "asc",
          },
          select: {
            messageText: true,
          },
        },
      },
      take: 50,
      orderBy: {
        startTime: "desc",
      },
    });
    return result;
  }),
  list: protectedProcedure
    .input(z.object({ chatId: z.string() }))
    .query(async ({ input, ctx }) => {
      const { database } = ctx;
      const chats = await getChatByID(database, input.chatId);
      return chats;
    }),
  create: protectedProcedure
    .input(z.object({ message: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(ctx.user?.id);
      const { database } = ctx;

      const chatConversation: Prisma.ChatCreateInput = {
        status: "",
        user: {
          connect: {
            id: ctx.user?.id,
          },
        },
      };

      const chat = await database.chat.create({ data: chatConversation });

      const message: Prisma.MessageCreateInput = {
        chat: {
          connect: {
            id: chat.id,
          },
        },
        messageText: input.message,
        senderType: "USER",
      };

      await database.message.create({ data: message });

      return chat;
    }),
});
