import { publicProducer, router } from "..";
import { usersRouter } from "./users.router";

export const appRouter = router({
  greetings: publicProducer.query(async () => {
    return "Hello from trpc sympontsAI";
  }),
  user: usersRouter,
});

export type AppRouter = typeof appRouter;
