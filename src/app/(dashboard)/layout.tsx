"use client";
import InputPrompt from "@/components/shared/input-promp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = usePathname();
  const isNew = h.includes("new");
  console.log(h);

  return (
    <div className="size-full flex">
      <div className="w-[80%]">
        <div className="size-full flex flex-col items-center">
          <div className="w-full h-full flex flex-col justify-center items-center mx-10">
            {children}
            <motion.div
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "bg-white p-5 absolute",
                isNew ? "bottom-[calc(100vh*0.18)]" : "bottom-0"
              )}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {[0, 1, 2, 3].map((e) => {
                    return (
                      <Button
                        key={e}
                        variant="ghost"
                        className="bg-white px-4 py-2 rounded-full transition hover:scale-105 shadow-2xl"
                      >
                        <p className="text-sm text-gray-600">
                          Saya sakit kepala
                        </p>
                      </Button>
                    );
                  })}
                </div>
                <InputPrompt />
                <div className="flex self-center items-start w-[90%]">
                  <AlertCircle size="15" className="text-gray-500" />
                  <p className="text-[12px] text-gray-500 text-center">
                    Saran dari AI ini bukan diagnosis medis. Mohon tetap
                    berkonsultasi dengan dokter untuk penanganan yang tepat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex-1 shadow-2xl"></div>
    </div>
  );
}
