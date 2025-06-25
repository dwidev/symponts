"use client";

import SymptomChecker from "./_components/symptoms-checker";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";

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
