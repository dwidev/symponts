import getChatByID from "@/services/chats/get-chat-by-id";
import { protectedProcedure, router } from "..";
import { z } from "zod";
import { Prisma } from "../../../generated/prisma";

export const chatsRouter = router({
  recents: protectedProcedure
    .input(
      z.object({
        cursor: z.string().nullish(),
        limit: z.number().default(20),
      })
    )
    .query(async ({ input, ctx }) => {
      const { database } = ctx;
      const limit = input.limit;
      const cursor = input.cursor ?? 0;

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
        cursor: cursor ? { id: cursor } : undefined,
        take: limit + 1,
        orderBy: {
          startTime: "desc",
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (result.length > 1) {
        const nextItems = result.pop();
        nextCursor = nextItems?.id;
      }

      return {
        result,
        nextCursor,
      };
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
