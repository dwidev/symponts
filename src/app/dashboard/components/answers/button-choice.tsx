import React from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Answer, Choice } from "@/types/answers";

type ButtonAnswerChoiceProps<T> = {
  onClick: (value: T) => void;
  onChangeOther: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Choice<T> &
  Answer<T>;

export default function ButtonAnswerChoice<T>({
  choices,
  value,
  onClick,
  onChangeOther,
}: ButtonAnswerChoiceProps<T>) {
  return (
    <>
      {value == undefined ? (
        choices.map((e, index) => {
          if (e == "Other") {
            return (
              <Input
                key={index}
                placeholder="type other.."
                className="w-32 bg-white"
                onChange={onChangeOther}
              />
            );
          }

          return (
            <Button
              onClick={() => onClick(e)}
              variant="outline"
              className="transition hover:scale-105"
              key={index}
            >
              {String(e)}
            </Button>
          );
        })
      ) : (
        <Button
          variant="outline"
          className="transition hover:scale-105"
          disabled={true}
        >
          {String(value)}
        </Button>
      )}
    </>
  );
}
