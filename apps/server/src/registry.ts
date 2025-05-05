import * as schema from "./infra/db/schema";
import { createDatabase } from "./infra/db";
import { createCloudflareEnv } from "./infra/cf-env";
import { createAuth } from "./infra/auth";

export type RegistryDeps = {
  env: {
    DB: D1Database;
  };
};

export function createRegistry({ env }: RegistryDeps) {
  const cfEnv = createCloudflareEnv({ env });
  const db = createDatabase({ client: cfEnv.databaseClient });
  const auth = createAuth({ db, schema });

  return { auth };
}
