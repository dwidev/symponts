import { publicProducer, router } from "..";

export const appRouter = router({
  greetings: publicProducer.query(async ({ ctx }) => {
    console.log(ctx.session);
    return "Hello from trpc sympontsAI";
  }),
});

export type AppRouter = typeof appRouter;
