import React, { Fragment } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  ...props
}: ButtonAnswerChoiceProps & React.ComponentProps<"button">) {
  return (
    <Fragment>
      <div className="flex flex-wrap gap-1.5">
        {value == "" &&
          choices.map((e, index) => {
            if (e == "Other") {
              return (
                <Input
                  key={index}
                  placeholder="type other.."
                  className="w-32 "
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
                {...props}
              >
                {String(e)}
              </Button>
            );
          })}
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: value != "" ? 1 : 0,
            y: value != "" ? [0, -30, 0] : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-wrap gap-1.5"
        >
          {value != "" && (
            <Button
              variant="outline"
              className="transition hover:scale-105"
              disabled={true}
              {...props}
            >
              {String(value)}
            </Button>
          )}
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
}
