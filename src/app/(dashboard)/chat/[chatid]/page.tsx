import SymptomChecker from "../_components/symptoms-checker";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatsPage() {
  return (
    <div className="size-full">
      <ScrollArea className="h-full">
        <div className=" size-full flex flex-col justify-center items-center">
          <div className="lg:w-2xl">
            <SymptomChecker />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
