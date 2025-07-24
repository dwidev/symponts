import z from "zod";
import { Message } from "./chats";

const questionObjectSchema = z.object({
  questionId: z.string().describe("Id pertanyaan"),
  title: z
    .string()
    .describe("Isi pertanyaan dari AI, buat dalam format markdown"),
  answerOption: z
    .array(z.string())
    .optional()
    .describe("Opsi jawaban (hanya jika type = single-choice)"),
  type: z.enum(["single-choice", "free-text", "date-picker", "range-picker"]),
});

const summarySymptomsSchema = z.object({
  content: z
    .string()
    .describe("Hasil mengenai analisis kondisi kesehatan pengguna"),
  source: z.array(z.string()).describe("sumber dari makan kontent di dapatkan"),
  handling: z
    .string()
    .describe("Hasil mengenai penanganan (P3K) kondisi kesehatan pengguna"),
});

export const symptomAgentSchema = z.object({
  summary: summarySymptomsSchema,
  nextAction: z
    .boolean()
    .describe(
      "True jika AI ingin melanjutkan bertanya, false jika sudah selesai"
    ),
  question: questionObjectSchema.describe(
    "Pertanyaan yang akan diberikan ke user"
  ),
});

export type SympontResponse = z.infer<typeof symptomAgentSchema>;

export function transformToMessage(source: SympontResponse): Message | null {
  if (!source) {
    return null;
  }
  // Tentukan messageText berdasarkan prioritas
  let messageText = "";
  if (source.nextAction === false) {
    messageText = source.summary.content;
  } else if (source.question?.title) {
    messageText = source.question.title;
  } else {
    messageText = "";
  }

  // Buat uiElement jika ada question
  let uiElement = null;

  if (source.question) {
    uiElement = {
      id: source.question.questionId || crypto.randomUUID(),
      elementType: source.question.type || "free-text",
      promptText: source.question.title || "",
      configuration: JSON.stringify({
        answerOption: source.question.answerOption,
      }),
      createdAt: new Date(),
      expiresAt: null,
    };
  }

  return {
    senderType: "ASSISTANT",
    messageText,
    uiElement,
  };
}
