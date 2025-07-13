"use client";
import { AlertCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import InputPrompt from "./input";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import BoxGradient from "@/components/ui/box-gradient";

export default function PropmtSection() {
  const h = usePathname();
  const isNew = h.includes("new");

  return (
    <motion.div layout transition={{ duration: 0.3, ease: "easeInOut" }}>
      <div className="flex flex-col gap-5 bg-white px-5">
        <AnimatePresence>
          {isNew && (
            <div className="flex flex-wrap gap-2 mb-1">
              {[0, 1, 2, 3].map((e) => {
                return (
                  <BoxGradient
                    key={e}
                    isFocused
                    className="rounded-full transition hover:scale-105"
                  >
                    <Button
                      variant="ghost"
                      className="bg-white px-4 py-2 rounded-full shadow-2xl"
                    >
                      <p className="text-sm text-gray-600">Saya sakit kepala</p>
                    </Button>
                  </BoxGradient>
                );
              })}
            </div>
          )}
        </AnimatePresence>
        <InputPrompt />
        <div className="flex self-center items-start w-[90%]">
          <AlertCircle size="15" className="text-gray-500" />
          <p className="text-[12px] text-gray-500 text-center mb-2">
            Saran dari AI ini bukan diagnosis medis. Mohon tetap berkonsultasi
            dengan dokter untuk penanganan yang tepat.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
