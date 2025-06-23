import { env } from "process";
import { PrismaClient } from "../../../generated/prisma";

const getPrisma = () =>
  new PrismaClient({ log: ["warn", "error", "info", "query"] });

declare const globalForPrisma: {
  db: ReturnType<typeof getPrisma>;
} & typeof global;

export const db = globalForPrisma.db ?? getPrisma();

if (env.NODE_ENV !== "production") globalForPrisma.db = db;
