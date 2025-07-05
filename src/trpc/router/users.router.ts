import { protectedProcedure, router } from "..";

export const usersRouter = router({
  chats: protectedProcedure.query(async ({ ctx }) => {
    const { database } = ctx;

    const chats = await database.chat.findUnique({
      include: {
        messages: {
          include: {
            uiElement: true,
          },
        },
      },
      where: {
        id: "chat_room_id_001",
      },
    });

    return chats;
  }),
  profile: protectedProcedure.query(async ({ ctx }) => {
    const { database, session } = ctx;

    const user = await database.user.findFirst({
      include: {
        accounts: {
          select: {
            id: true,
            userId: true,
            provider: true,
            expires_at: true,
          },
        },
      },
    });

    return {
      session,
      user,
    };
  }),
});
