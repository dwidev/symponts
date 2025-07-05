import { protectedProcedure, router } from "..";

export const usersRouter = router({
  chats: protectedProcedure.query(async ({ ctx }) => {
    const { database } = ctx;

    const chats = await database.chat.findMany({
      include: {
        user: true,
        messages: {
          include: {
            uiElement: true,
          },
        },
      },
      where: {
        userId: "cmcgznlkk0000guhkgdnyox7a",
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
