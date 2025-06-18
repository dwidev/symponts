"use client";

import SymptomChecker from "./components/symptoms-checker";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";

const markdownContent =
  "## 🧠 Analisis Gejala\n\n**Keluhan:** Sakit kepala selama 2 hari\n\n### 🔍 Kemungkinan Penyebab\n- Ketegangan otot (_tension headache_)\n- Dehidrasi\n- Stres atau kelelahan\n- Kurang tidur\n- Infeksi ringan seperti flu atau sinusitis\n\n> **Catatan:** Jika sakit kepala disertai gejala lain seperti **mual**, **muntah**, **gangguan penglihatan**, atau **leher kaku**, maka bisa jadi itu tanda kondisi yang lebih serius seperti **migrain** atau bahkan **infeksi otak (meningitis)**.\n\n---\n\n### 🩺 Rekomendasi\n- ✅ Istirahat yang cukup dan hindari stres\n- 💧 Minum air putih minimal 2 liter per hari\n- 🕶️ Hindari layar dan cahaya terang jika sakit bertambah parah\n- 🧊 Gunakan kompres dingin atau hangat di bagian kepala\n- 💊 Minum obat pereda nyeri seperti parasetamol jika perlu\n- 📆 Jika gejala tidak membaik setelah 3 hari, atau terasa semakin berat,\n  **segera konsultasi ke dokter** untuk evaluasi lebih lanjut.\n\n---\n\n_⚠️ Disclaimer: Informasi ini bukan pengganti diagnosis medis langsung._\n_Selalu konsultasikan dengan tenaga kesehatan profesional._";
export default function DashboardPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="relative font-mono">
      <div className="flex max-h-screen">
        <AnimatePresence>
          {show && (
            <ScrollArea className="flex-1 bg-slate-50">
              <div className="mb-30 mt-25 flex flex-col items-center">
                <div className="w-[85%] bg-white p-10">
                  <Markdown>{markdownContent}</Markdown>
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
              <div className="pt-15 h-full max-w-[calc(100vw*0.4)]">
                <SymptomChecker onClick={() => setShow(!show)} />
              </div>
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </main>
  );
}
