import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "../db";
import authConfig from "@/lib/auth/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,

  callbacks: {
    async redirect({ url, baseUrl }) {
      const dashboard = baseUrl + "/dashboard";
      if (url.startsWith(baseUrl)) {
        const { searchParams } = new URL(url);
        const callbackUrl = searchParams.get("callbackUrl");
        return callbackUrl || dashboard;
      }

      return dashboard;
    },
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
});
