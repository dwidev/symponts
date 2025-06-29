import { db } from "@/lib/db";
import { Session, User } from "next-auth";

async function createInnerContext() {
  return {
    database: db,
  };
}

async function createContext() {
  let user: User | undefined;
  let session: Session | undefined;

  // TODO create process for get user and session data

  const innerCtx = await createInnerContext();

  return {
    ...innerCtx,
    user,
    session,
  };
}

type Context = Awaited<ReturnType<typeof createContext>>;

export { createContext, type Context };
