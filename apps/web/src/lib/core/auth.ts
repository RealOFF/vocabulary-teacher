import { createToken } from "$lib/framework/di";
import { createAuthClient } from "better-auth/svelte";

export type Auth = ReturnType<typeof createAuthClient>;

export const authToken = createToken<Auth>("auth");
