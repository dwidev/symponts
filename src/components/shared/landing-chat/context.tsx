"use client";
import { ChatMessage } from "@/types/chat";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { dummyChat } from "./dummy";

const LandingChatContext = createContext<
  ReturnType<typeof useLandingChats> | undefined
>(undefined);

export const useLandingContext = () => {
  const ctx = useContext(LandingChatContext);
  if (ctx == null) {
    throw new Error("useLandingContext must be within a LandingChatProvider");
  }

  return ctx;
};

export const LandingChatProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeValue = useLandingChats();

  return (
    <LandingChatContext.Provider value={storeValue}>
      {children}
    </LandingChatContext.Provider>
  );
};

function useLandingChats() {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<number>(0);
  const ref = useRef(0);

  const onNext = useCallback(() => {
    if (ref.current == dummyChat.length) {
      return;
    }

    const nexChat = dummyChat[step];
    setChat((prev) => [...prev, nexChat]);
    ref.current += 1;
    setStep((prev) => prev + 1);
  }, [step]);

  useEffect(() => {
    if (chat.length == 0 && step == 0) {
      onNext();
    }
  }, [chat.length, onNext, step]);

  const value = {
    chat,
    onNext,
  };

  return value;
}
