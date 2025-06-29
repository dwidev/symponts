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

function getUrl() {
  const baseUrl = (() => {
    if (typeof window !== "undefined") return "";
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return process.env.NEXT_PUBLIC_URL;
  })();
  return `${baseUrl}/api/trpc`;
}

export function makeTRPCClient() {
  const url = getUrl();

  return trpc.createClient({
    links: [httpLink({ url })],
  });
}
