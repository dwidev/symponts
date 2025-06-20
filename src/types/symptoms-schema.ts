import z from "zod";

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
  question: z
    .array(questionObjectSchema)
    .describe("Pertanyaan yang akan diberikan ke user"),
});

export type SympontResponse = z.infer<typeof symptomAgentSchema>;
