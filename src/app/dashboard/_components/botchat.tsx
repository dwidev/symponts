import { Stethoscope } from "lucide-react";

type BotChatProps = {
  question: string;
};

export default function BotChat(props: BotChatProps) {
  const { question } = props;

  return (
    <section className="flex flex-row mb-5">
      <Stethoscope className="size-5 self-end text-slate-400" />
      <div className="bubble-chat p-4 w-fit min-w-[80%]">
        <p className="ml-1 text-sm">🩺 {question}</p>
      </div>
    </section>
  );
}
