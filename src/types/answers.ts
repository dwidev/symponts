export type ButtonChoice = "button-choice";
export type DatePicker = "date-picker";

export type Choice<T> = {
  choices: T[];
};

export type Answer<T> = {
  value?: T;
};
