import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NAME: z.string().default("Monster Calculator"),
  },
  client: {
    NEXT_PUBLIC_EDGE_BUILD: z
      .string()
      .default("true")
      .refine((s) => s === "true" || s === "false")
      .transform((s) => s === "true"),
    NEXT_PUBLIC_GIT_BRANCH_NAME: z.string().default("dev"),
    NEXT_PUBLIC_GIT_COMMIT_HASH: z.string().default("dev"),
  },
  // Need to load client variables here
  experimental__runtimeEnv: {
    NEXT_PUBLIC_EDGE_BUILD: process.env.NEXT_PUBLIC_EDGE_BUILD,
    NEXT_PUBLIC_GIT_BRANCH_NAME: process.env.NEXT_PUBLIC_GIT_BRANCH_NAME,
    NEXT_PUBLIC_GIT_COMMIT_HASH: process.env.NEXT_PUBLIC_GIT_COMMIT_HASH,
  },
});
