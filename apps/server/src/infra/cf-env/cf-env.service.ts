export type CloudflareEnvDeps = {
  env: {
    DB: D1Database;
  };
};

export function createCloudflareEnv({ env }: CloudflareEnvDeps) {
  return {
    databaseClient: env.DB,
  };
}
