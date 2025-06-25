import { env } from "process";
import { PrismaClient } from "../../../generated/prisma";

const getPrisma = () => {
  return new PrismaClient({ log: ["warn", "error"] });
};
const globalForPrisma = globalThis as unknown as {
  db: ReturnType<typeof getPrisma>;
};

export const db = globalForPrisma.db ?? getPrisma();

if (env.NODE_ENV !== "production") globalForPrisma.db = db;
