import GitHub from "next-auth/providers/github";
import { env } from "../env";
import { NextAuthConfig } from "next-auth";

const cookiePrefixName = "symptoms.ai";

export default {
  session: { strategy: "jwt" },
  secret: env.AUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `${cookiePrefixName}.ses.token`,
    },
    csrfToken: {
      name: `${cookiePrefixName}.csrf.token`,
    },
    callbackUrl: {
      name: `${cookiePrefixName}.callback`,
    },
  },
  providers: [
    GitHub({
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
