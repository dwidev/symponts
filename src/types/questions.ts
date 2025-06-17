type ButtonChoice = "button-choice";
type DatePicker = "date-picker";

interface Question {
  id: string;
  title: string;
  type: ButtonChoice | DatePicker;
  answer?: string;
}

export type { Question, ButtonChoice };
    