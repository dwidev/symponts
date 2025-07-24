import { UiElementsBuilder } from "@/app/(dashboard)/chat/_components/uielements-builder";
import LoadingIndicator from "@/components/ui/loading-indicator";
import { MessageStream } from "@/types/chats";
import { Stethoscope } from "lucide-react";

type BotChatProps = {
  onStream?: boolean;
  message: MessageStream;
};

export default function BotChat(props: BotChatProps) {
  const { message, onStream } = props;

  return (
    <section className="flex flex-row mb-5 gap-2">
      <Stethoscope className="w-5 h-5 self-end text-slate-400" scale={1} />
      <div className="flex flex-col gap-2">
        {onStream && (
          <div className="flex items-center gap-1">
            <LoadingIndicator />
            <p className="text-[12px] text-slate-500 animate-pulse">
              Tunggu sebentar...
            </p>
          </div>
        )}
        <div className="bubble-chat p-4 w-fit min-w-[80%]">
          <p className="ml-1 text-sm">🩺 {message.messageText}</p>
          {message.uiElement != null && (
            <UiElementsBuilder
              element={message.uiElement}
              onSendAnswer={function (answer: string): void {
                console.log(answer);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
