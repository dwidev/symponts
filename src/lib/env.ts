import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  DIRECT_URL: z.string(),
  GOOGLE_GENERATIVE_AI_API_KEY: z.string(),
  AUTH_SECRET: z.string(),
  AUTH_GITHUB_CLIENT_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
