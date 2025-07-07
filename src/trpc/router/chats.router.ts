import getChatByID from "@/services/chats/get-chat-by-id";
import { protectedProcedure, router } from "..";
import { z } from "zod";
import { Prisma } from "../../../generated/prisma";

export const chatsRouter = router({
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
