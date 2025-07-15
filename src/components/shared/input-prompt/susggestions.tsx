"use client";
import BoxGradient from "@/components/ui/box-gradient";
import { Button } from "@/components/ui/button";
import FadeBlur from "@/components/ui/fade-blur";
import { getRandomSymptomQuestions } from "@/lib/data/default-question";
import { trpc } from "@/trpc/client";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function Susggestions() {
  const [sugest, setSugest] = useState<string[]>([]);
  const [sendItem, setSendItem] = useState<string>("");
  const [stopInterval, setStopInterval] = useState<boolean>(false);
  const utils = trpc.useUtils();
  const router = useRouter();

  useEffect(() => {
    setSugest(getRandomSymptomQuestions());
  }, []);

  const { mutate: sendChat, isPending } = trpc.chat.create.useMutation({
    onSuccess: ({ id }) => {
      utils.chat.recents.invalidate();
      router.push(`/chat/${id}`);
    },
  });

  useEffect(() => {
    if (stopInterval || isPending) return;

    const timeout = setInterval(() => {
      setSugest(getRandomSymptomQuestions());
    }, 3000);

    return () => clearInterval(timeout);
  }, [stopInterval, isPending]);

  const handleClick = useCallback(
    (message: string) => {
      if (isPending) return;
      setSendItem(message);
      setStopInterval(true);
      sendChat({ message });
    },
    [isPending, sendChat, setSendItem]
  );

  const memoSugest = useMemo(() => {
    return sugest.map((data, i) => ({
      id: `${data}-${i}`,
      text: data,
      index: i,
    }));
  }, [sugest]);

  const handleMouseEnter = useCallback(() => {
    setStopInterval(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStopInterval(false);
  }, []);

  return (
    <div
      className="flex flex-wrap gap-2 mb-0 lg:w-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {memoSugest.map((data) => {
        const isLoading = sendItem == data.text;
        return (
          <FadeBlur key={data.id} duration={0.65}>
            <BoxGradient
              isFocused
              className="rounded-full transition hover:scale-105 size-auto"
            >
              <Button
                disabled={isLoading}
                onClick={() => handleClick(data.text)}
                variant="ghost"
                className="bg-white size-auto px-6 py-[7px] rounded-full shadow-2xl"
              >
                <div className="flex items-center gap-1">
                  {isLoading && isPending && (
                    <LoaderIcon className="animate-spin" />
                  )}
                  <p className="text-[11px] text-gray-600">{data.text}</p>
                </div>
              </Button>
            </BoxGradient>
          </FadeBlur>
        );
      })}
    </div>
  );
}
