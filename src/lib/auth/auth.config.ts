import GitHub from "next-auth/providers/github";
import { env } from "../env";
import { NextAuthConfig } from "next-auth";

export default {
  session: { strategy: "database" },
  secret: env.AUTH_SECRET,
  providers: [
    GitHub({
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
