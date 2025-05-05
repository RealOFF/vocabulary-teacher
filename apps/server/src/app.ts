import Elysia from "elysia";
import { healthCheckRoute } from "./routes/health-check.route";
import { createRegistry, type RegistryDeps } from "./registry";

export type AppDeps = RegistryDeps;

export function createApp({ env }: AppDeps) {
  const registry = createRegistry({ env });

  return new Elysia({ aot: false })
    .use(healthCheckRoute)
    .decorate("env", env)
    .mount(registry.auth.handler);
}

export type App = ReturnType<typeof createApp>;
