import React, { useState } from "react";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { FaArrowUp } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  Brain,
  LoaderIcon,
  LucideChevronDown,
  LucideSparkles,
} from "lucide-react";
import { Separator } from "../../ui/separator";
import BoxGradient from "../../ui/box-gradient";
import { AnimatePresence } from "motion/react";
import Susggestions from "./susggestions";
import { trpc } from "@/trpc/client";
import { usePathname, useRouter } from "next/navigation";

export default function InputPrompt() {
  const h = usePathname();
  const isNew = h.includes("new");

  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState(false);

  const router = useRouter();
  const utils = trpc.useUtils();

  const { mutate: sendChat, isPending } = trpc.chat.create.useMutation({
    onSuccess: ({ id }) => {
      router.push(`/chat/${id}`);
      utils.chat.recents.invalidate();
      setMessage("");
    },
  });

  function handleSend(msg: string) {
    if (isPending) return;
    sendChat({ message: msg });
  }

  return (
    <>
      <AnimatePresence>
        {isNew && <Susggestions onSend={handleSend} isLoading={isPending} />}
      </AnimatePresence>
      <BoxGradient isFocused={focus}>
        <div className="px-5 py-2 rounded-2xl w-full bg-white">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="Describe your current condition"
            className="bg-transparent max-h-50 resize-none border-none shadow-none focus-visible:ring-0 mr-2 focus:border-2 focus:border-red-500"
          />
          <div className="flex flex-row items-center justify-between mb-2 mt-3">
            <div className="flex flex-row gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="focus:outline-0">
                  <Button variant="outline" className="rounded-full" size="sm">
                    <div className="flex flex-row items-center gap-2">
                      <LucideSparkles className="text-yellow-300" />
                      <span className="text-gray-600 text-[12px]">explore</span>
                      <LucideChevronDown />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Cek BMI</DropdownMenuItem>
                  <DropdownMenuItem>Cek Kehamilan</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="rounded-full" size="sm">
                <div className="flex flex-row items-center gap-2">
                  <Brain className="text-red-300" />
                  <p className="text-gray-600 text-[12px]">Gemini</p>
                  <LucideChevronDown />
                </div>
              </Button>
              <div>
                <Separator orientation="vertical" />
              </div>
              <Button
                size="icon"
                className="size-9 rounded-full transition hover:scale-105 shadow-xl app-gradient"
                onClick={() => {
                  handleSend(message);
                }}
              >
                {!isPending ? (
                  <FaArrowUp />
                ) : (
                  <LoaderIcon className="animate-spin" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </BoxGradient>
    </>
  );
}
