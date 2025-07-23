import { generateSystemPrompt } from "@/lib/ai/systems.prompt";
import { protectedProcedure, router } from "..";
import { symptomAgentSchema } from "@/types/symptoms-schema";
import { streamObject } from "ai";
import { google } from "@ai-sdk/google";

export const ai = router({
  generate: protectedProcedure.subscription(async function* ({}) {
    let finished = false;

    const prompt = generateSystemPrompt();
    const data = streamObject({
      model: google("models/gemini-2.0-flash"),
      system: prompt,
      schema: symptomAgentSchema,
      prompt: "",
      onFinish: () => {
        finished = true;
      },
    });

    for await (const chunk of data.partialObjectStream) {
      yield chunk;
    }

    if (finished) {
      return;
    }
  }),
});
