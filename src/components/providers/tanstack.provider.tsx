"use client";

import { TRPCProvider } from "@/trpc/client";
import { AppRouter } from "@/trpc/router/app.router";
import { getQueryClient } from "@/trpc/server";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import React, { useState } from "react";

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: "http://localhost:2022",
        }),
      ],
    })
  );
  return (
    <TRPCProvider queryClient={queryClient} trpcClient={trpcClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TRPCProvider>
  );
}
