import { Message } from "../../../../generated/prisma";

export const dummyChat: Message[] = [
  {
    chatId: "1",
    id: "1",
    senderType: "ASSISTANT",
    messageText:
      "Selamat pagi, saya AI asisten medis Anda. Apa yang bisa saya bantu hari ini? Mohon jelaskan keluhan utama Anda!",
    timestamp: new Date(),
    uiElementId: "",
  },
  {
    chatId: "1",
    id: "2",
    senderType: "USER",
    messageText: "Saya merasa pusing & mual.",
    timestamp: new Date(),
    uiElementId: "",
  },
  {
    chatId: "1",
    id: "3",
    senderType: "ASSISTANT",
    messageText: "Sejak kapan anda mengalami mual & pusing?",
    timestamp: new Date(),
    uiElementId: "",
  },
  {
    chatId: "1",
    id: "4",
    senderType: "USER",
    messageText: "Tadi Pagi",
    timestamp: new Date(),
    uiElementId: "",
  },
  {
    chatId: "1",
    id: "5",
    senderType: "ASSISTANT",
    messageText:
      "Pusing dan mual bisa disebabkan oleh banyak hal, mulai dari yang ringan seperti kelelahan atau masuk angin, hingga hal yang lebih serius.",
    timestamp: new Date(),
    uiElementId: "",
  },
];
