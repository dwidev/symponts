import { createCallerFactory } from "..";
import { createContext } from "../context";
import { appRouter } from "../router/app.router";

export const trpc = createCallerFactory(appRouter)(createContext);

