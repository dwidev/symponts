"use client";
import ScrollToBottom from "@/components/shared/chat/scroll-to-bottom";
import ChatBuilder from "../_components/chat-builder";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef, useState } from "react";

export default function ChatsPage() {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const [, setShowScrollButton] = useState(false);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollElement) {
        scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  // Check if user is near bottom
  const handleScroll = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollElement) {
        const { scrollTop, scrollHeight, clientHeight } = scrollElement;
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
        setShowScrollButton(!isNearBottom);
      }
    }
  };

  return (
    <div className="flex-1 w-full h-full relative overflow-hidden">
      <ScrollArea
        ref={scrollAreaRef}
        onScroll={handleScroll}
        className="w-full h-full overflow-y-auto"
      >
        <div className="h-full overflow-y-auto px-4 pb-15 pt-20">
          <ChatBuilder />
        </div>
      </ScrollArea>

      <ScrollToBottom onScroll={scrollToBottom} />
    </div>
  );
}
