import { AnswerType } from "./answers";

export type ChatMessage = {
  id: string;
  sender: "bot" | "client";
  type: "action" | "bot-question";
  content: string;
  actionType?: AnswerType;
  options?: string[];
};
