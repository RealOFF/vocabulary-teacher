import { PUBLIC_SERVER_URL } from "$env/static/public";
import { treaty } from "@elysiajs/eden";
import { type App } from "../../../../../server/src/app";

export function createApi() {
  return treaty<App>(PUBLIC_SERVER_URL);
}

export type Api = ReturnType<typeof treaty<App>>;
