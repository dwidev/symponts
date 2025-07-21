import React from "react";
import TanstackProvider from "./tanstack.provider";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </SessionProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
