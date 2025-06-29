import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../router/app.router";
import { httpLink } from "@trpc/client";
import type { QueryClient } from "@tanstack/react-query";
import { makeQueryClient } from "./query.client";

export const trpc = createTRPCReact<AppRouter>();

let singletonQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }

  return (singletonQueryClient ??= makeQueryClient());
}

export function makeTRPCClient() {
  return trpc.createClient({
    links: [
      httpLink({
        url: "http://localhost:2022",
      }),
    ],
  });
}
