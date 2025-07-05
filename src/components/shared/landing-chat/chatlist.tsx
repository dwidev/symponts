"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import LandingBotChat from "./landing-botchat";
import { useLandingContext } from "./context";
import LandingUserChat from "./landing-userchat";

export default function LandingChatList() {
  const { chat } = useLandingContext();

  return (
    <>
      {chat.map((q, i) => {
        return (
          <section
            key={i}
            className={cn(
              "mb-4 flex flex-col justify-center",
              q.senderType == "ASSISTANT" ? "items-start" : "items-end"
            )}
          >
            {q.senderType == "ASSISTANT" && (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.9,
                    ease: "easeOut",
                  },
                }}
              >
                <LandingBotChat question={q} />
              </motion.div>
            )}
            {q.senderType == "USER" && <LandingUserChat key={i} question={q} />}
          </section>
        );
      })}
    </>
  );
}
