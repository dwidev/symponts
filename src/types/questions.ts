import { ButtonChoice, DatePicker } from "./answers";

type QuestionType = ButtonChoice | DatePicker;

type BaseQuestion = {
  id: string;
  title: string;
  type: QuestionType;
  answer?: string;
};

export type ChoiceQuestion<T> = BaseQuestion & {
  type: ButtonChoice;
  choices: T[];
};

type DateQuestion = BaseQuestion & {
  type: DatePicker;
};

export type Question<T = string> = ChoiceQuestion<T> | DateQuestion;
