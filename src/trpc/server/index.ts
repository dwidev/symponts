import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../router/app.router";
import { QueryClient } from "@tanstack/react-query";
import { makeQueryClient } from "../client/query.client";

export const trpc = createTRPCReact<AppRouter>();

let singletonQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }

  return (singletonQueryClient ??= makeQueryClient());
}
