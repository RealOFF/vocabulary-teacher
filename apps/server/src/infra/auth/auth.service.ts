import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import type { Database } from "@/core/types/db";

export type AuthDeps = {
  db: Database;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: Record<string, any>;
};

export function createAuth({ db, schema }: AuthDeps) {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema,
    }),
    trustedOrigins: [process.env.CORS_ORIGIN || ""],
    emailAndPassword: {
      enabled: true,
    },
  });
}
