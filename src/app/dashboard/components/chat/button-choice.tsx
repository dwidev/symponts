import React from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { AnimatePresence, motion } from "motion/react";

type ButtonAnswerChoiceProps = {
  onClick: (value: string) => void;
  onChangeOther: (e: React.ChangeEvent<HTMLInputElement>) => void;
  choices: string[];
  value?: string;
};

export default function ButtonAnswerChoice({
  choices,
  value,
  onClick,
  onChangeOther,
}: ButtonAnswerChoiceProps) {
  return (
    <AnimatePresence>
      <motion.div layout className="flex flex-wrap gap-1.5">
        {value == "" ? (
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
      </motion.div>
    </AnimatePresence>
  );
}
