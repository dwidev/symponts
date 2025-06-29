import { publicProducer, router } from "..";

export const appRouter = router({
  greetings: publicProducer.query(async () => {
    await new Promise((r) => setTimeout(r, 2000));
    return "Hello from trpc sympontsAI";
  }),
});

export type AppRouter = typeof appRouter;
