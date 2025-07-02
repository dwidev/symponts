import NextAuth, { NextAuthRequest } from "next-auth";
import authConfig from "./lib/auth/auth.config";

const { auth: middleware } = NextAuth(authConfig);
export default middleware((req: NextAuthRequest) => {
  if (!req.auth) {
    const callbackUrl = req.nextUrl.href;
    if (callbackUrl.includes("signout")) {
      return Response.redirect(new URL("/", req.nextUrl.origin));
    }

    const url = new URL(`/?callbackUrl=${callbackUrl}`, req.nextUrl.origin);
    return Response.redirect(url);
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|$).*)",
  ],
};
