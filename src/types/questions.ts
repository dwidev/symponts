import { AnswerType, ButtonChoice, DatePicker } from "./answers";

type BaseQuestion = {
  id: string;
  title: string;
  type: AnswerType;
  answer?: string;
};

export type ChoiceQuestion<T> = BaseQuestion & {
  type: ButtonChoice;
  choices: T[];
};

type DateQuestion = BaseQuestion & {
  type: DatePicker;
};

export type Question<T = string> =
  | BaseQuestion
  | ChoiceQuestion<T>
  | DateQuestion;
