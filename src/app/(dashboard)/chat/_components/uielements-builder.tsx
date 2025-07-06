import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@radix-ui/react-slider";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ButtonAnswerChoice from "@/components/shared/chat/button-choice";
import DatePickerAnswer from "@/components/shared/chat/date-picker";
import { BotUIElement } from "@/types/chats";
import { UserChat } from "./userchat";

export function UiElementsBuilder({
  element,
  onSendAnswer,
}: {
  element: BotUIElement;
  onSendAnswer: (answer: string) => void;
}) {
  const [valueText, setValue] = useState("");
  return (
    <UserChat>
      {element.elementType == "single-choice" && (
        <ButtonAnswerChoice
          choices={[]}
          onClick={(e) => {
            onSendAnswer(e as string);
          }}
          onChangeOther={(e) => {
            console.log(e.target.value);
          }}
        />
      )}
      {element.elementType == "date-picker" && (
        <DatePickerAnswer
          onSendAnswer={() => onSendAnswer("2 Hari yang lalu")}
        />
      )}
      {element.elementType == "range-picker" && (
        <div className="flex flex-row items-center">
          <Slider
            defaultValue={[2]}
            max={10}
            min={1}
            step={1}
            className="w-[250px] mr-2.5"
            disabled={false}
          />
          <Button
            size="icon"
            className="size-7 rounded-full transition hover:scale-105"
            aria-label="sendButton"
            onClick={() => onSendAnswer("5")}
          >
            <FaArrowUp />
          </Button>
        </div>
      )}
      {element.elementType == "free-text" && (
        <div className="w-full flex flex-row items-end">
          <Textarea
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Describe your current condition"
            className="bg-transparent max-h-30 w-full resize-none border-none shadow-none focus-visible:ring-0 mr-2"
          />
          <Button
            size="icon"
            className="size-7 rounded-full transition hover:scale-105"
            onClick={() => onSendAnswer(valueText)}
          >
            <FaArrowUp />
          </Button>
        </div>
      )}
    </UserChat>
  );
}
