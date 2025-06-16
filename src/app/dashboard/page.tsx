"use client";

import SymptomChecker from "./components/symptoms-checker";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";

const json =
  "## 🧠 Analisis Gejala\n\n**Keluhan:** Sakit kepala selama 2 hari\n\n### 🔍 Kemungkinan Penyebab\n- Ketegangan otot (_tension headache_)\n- Dehidrasi\n- Stres atau kelelahan\n- Kurang tidur\n- Infeksi ringan seperti flu atau sinusitis\n\n> **Catatan:** Jika sakit kepala disertai gejala lain seperti **mual**, **muntah**, **gangguan penglihatan**, atau **leher kaku**, maka bisa jadi itu tanda kondisi yang lebih serius seperti **migrain** atau bahkan **infeksi otak (meningitis)**.\n\n---\n\n### 🩺 Rekomendasi\n- ✅ Istirahat yang cukup dan hindari stres\n- 💧 Minum air putih minimal 2 liter per hari\n- 🕶️ Hindari layar dan cahaya terang jika sakit bertambah parah\n- 🧊 Gunakan kompres dingin atau hangat di bagian kepala\n- 💊 Minum obat pereda nyeri seperti parasetamol jika perlu\n- 📆 Jika gejala tidak membaik setelah 3 hari, atau terasa semakin berat,\n  **segera konsultasi ke dokter** untuk evaluasi lebih lanjut.\n\n---\n\n_⚠️ Disclaimer: Informasi ini bukan pengganti diagnosis medis langsung._\n_Selalu konsultasikan dengan tenaga kesehatan profesional._";
export default function DashboardPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="relative font-mono">
      <div className="flex h-screen">
        <AnimatePresence>
          {show && (
            <ScrollArea className="pt-20 size-full flex-1 bg-slate-50">
              <div className="w-full flex flex-col items-center">
                <div className="w-[80%] bg-white p-10 mt-5">
                  <Markdown>{json}</Markdown>
                </div>
              </div>
            </ScrollArea>
          )}
        </AnimatePresence>

        <motion.div
          layout
          initial={{ width: "100vw" }}
          animate={{ width: show ? "30vw" : "100vw" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="size-full z-10 pt-[60px]"
        >
          <div className="size-full">
            <ScrollArea className="size-full">
              <div className="max-w-[calc(100vw/2)]">
                <SymptomChecker onClick={() => setShow(!show)} show={show} />
              </div>
            </ScrollArea>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
