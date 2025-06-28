import { createTRPCContext } from "@trpc/tanstack-react-query";
import { AppRouter } from "../router/app.router";
import { createTRPCClient, httpLink } from "@trpc/client";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();

export function makeTRPCClient() {
  return createTRPCClient<AppRouter>({
    links: [
      httpLink({
        url: "http://localhost:2022",
      }),
    ],
  });
}
