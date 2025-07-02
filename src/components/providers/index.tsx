import React from "react";
import TanstackProvider from "./tanstack.provider";
import { SessionProvider } from "next-auth/react";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <SessionProvider>
        <TanstackProvider>{children}</TanstackProvider>
      </SessionProvider>
    </React.Fragment>
  );
}
