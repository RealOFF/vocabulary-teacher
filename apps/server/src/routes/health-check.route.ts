import Elysia from "elysia";

export const healthCheckRoute = new Elysia().get("health-check", () => "OK");
