import { Answer } from "@/types/answers";
import React from "react";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";

type DatePickerAnswerProps = {} & Answer<Date>;

export default function DatePickerAnswer({ value }: DatePickerAnswerProps) {
  return (
    <div className="flex flex-row items-center">
      <DatePicker value={value} />
      <Button
        size="icon"
        className="ml-2 size-7 rounded-full transition hover:scale-105"
        aria-label="sendButton"
      >
        <FaArrowUp />
      </Button>
    </div>
  );
}
