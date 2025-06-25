import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "../db";
import authConfig from "@/lib/auth/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  callbacks: {
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
