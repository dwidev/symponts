import React from "react";
import LandingChatList from "./chatlist";
import { LandingChatProvider } from "./context";

export default function LandingChat() {
  return (
    <LandingChatProvider>
      <LandingChatList />
    </LandingChatProvider>
  );
}
