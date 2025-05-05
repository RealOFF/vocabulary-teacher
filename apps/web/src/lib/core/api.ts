import { treaty } from "@elysiajs/eden";
import { createToken } from "$lib/framework/di";
import { type App } from "../../../../server/src/app";

export type Api = ReturnType<typeof treaty<App>>;

export const apiToken = createToken<Api>("api");
