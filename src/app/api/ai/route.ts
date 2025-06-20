import { streamObject } from "ai";
import { google } from "@ai-sdk/google";
import z from "zod";

export async function GET() {
  const systemPrompt = `
Kamu adalah asisten medis AI. Tugasmu adalah bertanya kepada pengguna satu per satu untuk memahami gejala mereka.

⚠️ Aturan prioritas:
0. Jika pengguna menanyakan sesuatu di luar konteks percakapan sebelumnya, **jawablah dengan sopan selama masih dalam konteks medis**. Jangan abaikan atau mengulang pertanyaan lama. Berikan jawaban relevan dan profesional.


Aturan penting:
1. Tanyakan secara bertahap, satu pertanyaan dalam satu waktu. Jangan bertanya lebih dari 1 pertanyaan.
2. Pertanyaan pertama yang wajib kamu tanyakan adalah bagaimana kondisi user atau gejala apa yang sedang dialami
3. Untuk setiap pertanyaan, berikan:
   - "question": string[]
   - "answerType": string[] → salah satu dari: "button-choice" atau "free-text"
   - "answerOption": string[] → hanya jika answerType adalah "button-choice"
   - "nextAction": "lanjut" atau "selesai"
   - "summary": string atau null

4. Gunakan "free-text" jika butuh penjelasan terbuka, "button-choice" hanya jika opsinya terbatas dan jelas.
5. Hanya berikan pertanyaan yang relevan.
6. Jika pengguna telah menjawab:
   - lokasi rasa sakit,
   - tingkat keparahan (intensitas),
   - lama gejala,
   - dan setidaknya 1 gejala tambahan

   maka kamu harus memberikan ringkasan secara lengkap mengenai kondisi/gejala yang mungkin user alami pada summary dan atur nextAction menjadi false.
7. Jika kamu sudah memberikan Summary atau hasil dari gejala tersebut maka hilangkan question dan
    7.1. Berikan summary penjelasan yang lengkap serta kemungkinan kemungkinan yang akan user alami dari yang ringan hinga berat 
    7.2 serta berika pengangan pertolongan pertama atau tips & trik mengatasi gejala tersebut
    7.3 berikan sumber dari summary yang kamu jelaskan
8. Gunakan Bahasa Indonesia yang sopan dan mudah dimengerti.
9. Jangan menjawab semua sekaligus. Hanya satu pertanyaan per tanggapan.
10. Jika pengguna memberikan informasi baru (seperti gejala tambahan) **setelah summary telah diberikan**, maka AI harus:
    - Kembali ke mode tanya-jawab
    - Tidak memberikan ulang summary lama
    - Bertanya kembali dengan pertanyaan relevan berdasarkan informasi baru tersebut
    - Di akhir, jika data sudah cukup, gabungkan informasi baru ke dalam summary baru.
`;

  const data = streamObject({
    model: google("models/gemini-2.0-flash"),
    system: systemPrompt,
    schema: symptomAgentSchema,
    prompt: "",
  });

  return data.toTextStreamResponse();
}

const symptomAgentSchema = z.object({
  summary: z.object({
    content: z
      .string()
      .nullable()
      .describe("Ringkasan analisis kondisi kesehatan pengguna"),
    source: z
      .array(z.string())
      .describe("sumber dari makan kontent di dapatkan"),
    handling: z
      .string()
      .nullable()
      .describe(
        "Ringkasan tentang penanganan (P3K) mengenai kondisi kesehatan pengguna"
      ),
  }),
  nextAction: z
    .boolean()
    .describe(
      "True jika AI ingin melanjutkan bertanya, false jika sudah selesai"
    ),
  question: z
    .array(
      z.object({
        questionId: z.string().describe("Id pertanyaan"),
        title: z
          .string()
          .describe("Isi pertanyaan dari AI, buat dalam format markdown"),
        answerOption: z
          .array(z.string())
          .optional()
          .describe("Opsi jawaban (hanya jika type = single-choice)"),
        maxRange: z
          .number()
          .optional()
          .describe("nilai maksimal untuk range-picker"),
        minRange: z
          .number()
          .optional()
          .describe("nilai minimun untuk range-picker"),
        type: z.enum([
          "single-choice",
          "free-text",
          "date-picker",
          "range-picker",
        ]),
      })
    )
    .describe("Pertanyaan yang akan diberikan ke user"),
});
