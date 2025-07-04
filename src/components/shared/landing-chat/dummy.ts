import { ChatMessage } from "@/types/chat";

export const dummyChat: ChatMessage[] = [
  {
    id: "1",
    sender: "bot",
    content:
      "Selamat pagi, saya AI asisten medis Anda. Apa yang bisa saya bantu hari ini? Mohon jelaskan keluhan utama Anda!",
    type: "bot-question",
  },
  {
    id: "2",
    sender: "client",
    content: "Saya merasa pusing & mual.",
    type: "action",
    actionType: "single-choice",
    options: ["Ya, demam"],
  },
  {
    id: "3",
    sender: "bot",
    content: "Sejak kapan anda mengalami mual & pusing?",
    type: "bot-question",
  },
  {
    id: "4",
    sender: "client",
    content: "Tadi Pagi",
    type: "action",
    actionType: "single-choice",
    options: ["Ya, demam"],
  },
  {
    id: "3",
    sender: "bot",
    content:
      "Pusing dan mual bisa disebabkan oleh banyak hal, mulai dari yang ringan seperti kelelahan atau masuk angin, hingga hal yang lebih serius.",
    type: "bot-question",
  },
];
