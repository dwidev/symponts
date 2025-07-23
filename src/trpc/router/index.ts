import { publicProducer, router } from "..";
import { ai } from "./ai.router";
import { chatsRouter } from "./chats.router";
import { usersRouter } from "./users.router";

export const appRouter = router({
  greetings: publicProducer.query(async () => {
    return "Hello from trpc sympontsAI";
  }),
  user: usersRouter,
  chat: chatsRouter,
  ai: ai,
});

export type AppRouter = typeof appRouter;
