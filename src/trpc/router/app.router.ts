import { publicProducer, router } from "..";

export const appRouter = router({
  greetings: publicProducer.query(() => {
    return "Hello from trpc sympontsAI";
  }),
});

export type AppRouter = typeof appRouter;
