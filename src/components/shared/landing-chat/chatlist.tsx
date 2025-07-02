import BotChat from "@/app/dashboard/_components/botchat";
import ButtonAnswerChoice from "@/app/dashboard/_components/chat/button-choice";
import { UserChat } from "@/app/dashboard/_components/userchat";
import { cn } from "@/lib/utils";
import { ChatMessage } from "@/types/chat";
import { motion } from "motion/react";

export default function LandingChatList({
  question,
  onNext,
}: {
  question: ChatMessage[];
  onNext: () => void;
}) {
  return (
    <>
      {question.map((q, i) => {
        return (
          <section
            key={i}
            className={cn(
              "mb-4 flex flex-col justify-center",
              q.sender == "bot" ? "items-start" : "items-end"
            )}
          >
            {q.sender == "bot" && (
              <motion.div
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
                <BotChat question={q.content} onDoneTyping={onNext} />
              </motion.div>
            )}
            {q.sender == "client" && (
              <UserChat>
                <ButtonAnswerChoice
                  choices={q.options ?? []}
                  value={q.content}
                  onClick={() => {}}
                  onChangeOther={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </UserChat>
            )}
          </section>
        );
      })}
    </>
  );
}
