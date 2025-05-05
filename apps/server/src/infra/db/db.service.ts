import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export type DatabaseDeps = {
  client: D1Database;
};

export function createDatabase({ client }: DatabaseDeps) {
  return drizzle(client, { schema });
}
