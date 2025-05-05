import { PUBLIC_SERVER_URL } from "$env/static/public";
import { createAuthClient } from "better-auth/svelte";

export function createAuth() {
  return createAuthClient({
    baseURL: PUBLIC_SERVER_URL,
  });
}
