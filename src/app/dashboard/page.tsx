"use client";

import SymptomChecker from "./components/symptoms-checker";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <main className="relative font-mono">
      <div className="flex h-screen overflow-hidden justify-end">
        <AnimatePresence>
          {show && (
            <ScrollArea className="pt-20 h-screen flex-1 bg-slate-100">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[50%] flex-1 bg-white">
                  {[...Array(50)].map((e, i) => {
                    return (
                      <div key={i}>
                        <p>ANJAY</p>
                      </div>
                    );
                  })}
                  <p>ANJAYYY</p>
                </div>
              </div>
            </ScrollArea>
          )}
        </AnimatePresence>

        <motion.div
          layout
          initial={{ width: "100vw" }}
          animate={{ width: show ? "20vw" : "100vw" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full flex justify-center items-center z-10 pt-[60px]"
        >
          <motion.div
            layout
            initial={{ width: "30%" }}
            animate={{ width: show ? "100%" : "30%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-[30%] h-full"
          >
            <ScrollArea className="size-full" type="always">
              <SymptomChecker className={show && "justify-end"} />
            </ScrollArea>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
