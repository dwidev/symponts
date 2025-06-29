import { auth } from "@/lib/auth/auth";
import { db } from "@/lib/db";
import { Session, User } from "next-auth";

type ContextInnerOptions = {
  session: Session | null;
  user: User | undefined;
};

function createInnerContext(_opt: ContextInnerOptions) {
  return {
    database: db,
    session: _opt.session,
    user: _opt.user,
  };
}

async function createContext() {
  const authResponse = await auth();

  return createInnerContext({
    user: authResponse?.user,
    session: authResponse,
  });
}

type Context = Awaited<ReturnType<typeof createContext>>;

export { createContext, type Context };
