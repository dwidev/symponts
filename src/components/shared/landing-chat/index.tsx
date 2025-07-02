"use client";

import { ChatMessage } from "@/types/chat";
import React, { useCallback, useEffect, useState } from "react";
import LandingChatList from "./chatlist";

export default function LandingChat() {
  const [dummyQuestion, setDummy] = useState<ChatMessage[]>([]);

  const runSequentialLanding = useCallback(async () => {
    for (const data of chatDataStringOptions) {
      setDummy((prev) => [...prev, data]);
      await delay(1000);
    }
  }, []);

  useEffect(() => {
    runSequentialLanding();
  }, [runSequentialLanding]);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return <LandingChatList question={dummyQuestion} onNext={() => {}} />;
}

const chatDataStringOptions: ChatMessage[] = [
  {
    id: "1",
    sender: "bot",
    content:
      "Selamat pagi, saya AI asisten medis Anda. Apa yang bisa saya bantu hari ini? Mohon jelaskan keluhan utama Anda.",
    type: "bot-question",
  },
  {
    id: "4",
    sender: "client",
    content: "Saya merasa pusing & mual.",
    type: "action",
    actionType: "single-choice",
    options: ["Ya, demam"],
  },
  {
    id: "7",
    sender: "bot",
    content:
      "Berdasarkan gejala pusing, mual, dan demam ringan yang Anda alami sekitar 6 jam, kemungkinan besar Anda sedang mengalami infeksi virus ringan atau kelelahan. Saya sarankan untuk istirahat yang cukup, minum banyak cairan, dan jika gejala berlanjut atau memburuk dalam 24 jam, segera konsultasi langsung dengan dokter untuk pemeriksaan lebih lanjut.",
    type: "bot-question",
  },
];
