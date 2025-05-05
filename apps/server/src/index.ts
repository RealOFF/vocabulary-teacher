import { createApp } from "./app";

type CloudflareBindings = {
  DB: D1Database;
};

export default {
  async fetch(request: Request, env: CloudflareBindings) {
    return await createApp({ env }).handle(request);
  },
};
