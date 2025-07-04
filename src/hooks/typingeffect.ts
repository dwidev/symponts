import { useState, useEffect } from "react";

type TypingEffectParams = {
  word: string;
  onComplete: () => void;
};

export function useTypingEffect({ word, onComplete }: TypingEffectParams) {
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    if (index < word.length) {
      const element = word[index];
      const timeout = setTimeout(() => {
        setMessage((prev) => (prev += element));
        setIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
        setIsComplete(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [index, isComplete, onComplete, word]);

  return { result: message };
}
