import { createCallerFactory } from "..";
import { createContext } from "../context";
import { appRouter } from "../router";

export const trpc = createCallerFactory(appRouter)(createContext);
