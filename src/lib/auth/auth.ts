import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "../db";
import authConfig from "@/lib/auth/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,

  callbacks: {
    async redirect({ url, baseUrl }) {
      const dashboard = baseUrl + "/new";
      if (url.startsWith(baseUrl)) {
        const { searchParams } = new URL(url);
        const callbackUrl = searchParams.get("callbackUrl");
        return callbackUrl || dashboard;
      }

      return dashboard;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub as string;
      }

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
});
