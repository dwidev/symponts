import { generateSystemPrompt } from "@/lib/ai/systems.prompt";
import { protectedProcedure, router } from "..";
import { symptomAgentSchema } from "@/types/symptoms-schema";
import { streamObject } from "ai";
import { google } from "@ai-sdk/google";
import z from "zod";

export const ai = router({
  generate: protectedProcedure
    .input(z.object({ message: z.string() }))
    .subscription(async function* ({ input }) {
      console.log(input.message);
      let finished = false;

      const prompt = generateSystemPrompt();
      const data = streamObject({
        model: google("models/gemini-2.0-flash"),
        system: prompt,
        schema: symptomAgentSchema,
        messages: [
          {
            role: "user",
            content: input.message,
          },
        ],
        onFinish: () => {
          finished = true;
        },
        onError: (error) => {
          console.error("Error during streaming:", error);
          finished = true;
        },
      });

      for await (const chunk of data.partialObjectStream) {
        yield chunk;
      }

      if (finished) {
        console.log("finished streaming");
        return;
      }
    }),
});
