"use client";

import SymptomChecker from "./components/symptoms-checker";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";

export const result = {
  nextAction: false,
  question: [],
  summary: {
    content:
      "### 🩺 Ringkasan Gejala:\nAnda mengalami sakit kepala di bagian belakang kepala selama 3 hari terakhir dengan tingkat keparahan 5 dari 10. Anda tidak mengalami gejala lain seperti mual, muntah, atau gangguan penglihatan. Anda juga tidak memiliki riwayat penyakit tertentu atau sedang mengonsumsi obat-obatan tertentu.\n\n### 🔍 Analisis Kemungkinan Penyebab:\nSakit kepala di bagian belakang kepala bisa disebabkan oleh berbagai faktor, mulai dari yang ringan hingga yang lebih serius. Berikut beberapa kemungkinan penyebabnya:\n\n*   **Sakit kepala tegang (tension headache):** Ini adalah jenis sakit kepala yang paling umum. Biasanya disebabkan oleh stres, kurang tidur, atau postur tubuh yang buruk. Sakit kepala tegang sering digambarkan sebagai rasa sakit seperti diikat di sekitar kepala.\n\n*   **Sakit kepala cervicogenic:** Jenis sakit kepala ini berasal dari masalah pada leher. Misalnya, osteoarthritis atau cedera whiplash. Rasa sakit biasanya terasa di bagian belakang kepala dan bisa menjalar ke dahi atau pelipis.\n\n*   **Neuralgia oksipital:** Kondisi ini melibatkan saraf oksipital yang berjalan dari bagian atas sumsum tulang belakang ke kulit kepala. Iritasi atau peradangan pada saraf ini dapat menyebabkan sakit kepala yang tajam dan menusuk di bagian belakang kepala.\n\n*   **Tekanan darah tinggi (hipertensi):** Meskipun jarang, tekanan darah tinggi yang sangat tinggi dapat menyebabkan sakit kepala. Jika Anda memiliki riwayat tekanan darah tinggi, penting untuk memantau tekanan darah Anda secara teratur.\n\n*   **Penyebab serius lainnya:** Dalam kasus yang jarang terjadi, sakit kepala di bagian belakang kepala bisa menjadi tanda kondisi yang lebih serius seperti tumor otak, aneurisma, atau meningitis. Jika Anda mengalami sakit kepala yang sangat parah, tiba-tiba, atau disertai dengan gejala lain seperti demam, leher kaku, atau kelemahan, segera cari pertolongan medis.\n\n### 💡 Penanganan & Tips Awal:\nBerikut beberapa tips yang dapat Anda coba untuk meredakan sakit kepala di rumah:\n\n*   **Istirahat yang cukup:** Pastikan Anda mendapatkan tidur yang cukup setiap malam. Kurang tidur dapat memicu sakit kepala.\n*   **Kelola stres:** Cari cara untuk mengelola stres, seperti yoga, meditasi, atau menghabiskan waktu di alam.\n*   **Kompres dingin atau hangat:** Coba kompres dingin atau hangat di bagian belakang kepala Anda. Beberapa orang merasa lega dengan kompres dingin, sementara yang lain lebih suka kompres hangat.\n*   **Pijat:** Pijat lembut di leher dan bahu Anda dapat membantu meredakan ketegangan otot yang dapat menyebabkan sakit kepala.\n*   **Obat pereda nyeri:** Anda dapat mengonsumsi obat pereda nyeri yang dijual bebas seperti parasetamol atau ibuprofen sesuai dengan dosis yang dianjurkan.\n\n**Kapan harus ke dokter?**\nSegera cari pertolongan medis jika Anda mengalami:\n\n*   Sakit kepala yang sangat parah atau tiba-tiba\n*   Sakit kepala yang disertai dengan demam, leher kaku, kebingungan, kejang, atau gangguan penglihatan\n*   Sakit kepala yang semakin memburuk dari waktu ke waktu\n*   Sakit kepala yang tidak membaik dengan obat pereda nyeri yang dijual bebas",
    handling: null,
    source: [],
  },
};
export default function DashboardPage() {
  const [show, setShow] = useState(false);
  const [result, setRes] = useState("");

  return (
    <main className="relative font-mono">
      <div className="flex max-h-screen">
        <AnimatePresence>
          {show && (
            <ScrollArea className="flex-1 bg-slate-50">
              <div className="mb-30 mt-25 flex flex-col items-center">
                <div className="w-[85%] bg-white p-10">
                  <article className="prose max-w-none dark:prose-invert prose-h3:text-2xl">
                    <Markdown>{result}</Markdown>
                  </article>
                </div>
              </div>
            </ScrollArea>
          )}
        </AnimatePresence>

        <motion.div
          layout
          initial={{ width: "100vw" }}
          animate={{ width: show ? "25vw" : "100vw" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="z-10"
        >
          <ScrollArea className="h-full">
            <div className="min-h-screen flex justify-center items-center">
              <div className="pt-15 h-full max-w-[calc(100vw*0.5)]">
                <SymptomChecker
                  finish={(v) => {
                    setShow(!show);
                    setRes(v);
                  }}
                />
              </div>
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </main>
  );
}
