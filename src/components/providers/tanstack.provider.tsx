"use client";

import { getQueryClient, makeTRPCClient, trpc } from "@/trpc/client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() => makeTRPCClient());

  return (
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
