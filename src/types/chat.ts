import { AnswerType } from "./answers";

export type ChatMessage = {
  id: string;
  sender: "bot" | "client";
  type: "action" | "text";
  content: string;
  actionType?: AnswerType;
  options?: string[];
};
