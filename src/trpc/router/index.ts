import { publicProducer, router } from "..";
import { chatsRouter } from "./chats.router";
import { usersRouter } from "./users.router";

export const appRouter = router({
  greetings: publicProducer.query(async () => {
    return "Hello from trpc sympontsAI";
  }),
  user: usersRouter,
  chat: chatsRouter,
});

export type AppRouter = typeof appRouter;
