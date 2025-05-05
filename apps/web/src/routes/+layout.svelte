<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import { SvelteQueryDevtools } from "@tanstack/svelte-query-devtools";
  import "../app.css";
  import Header from "$lib/components/header.svelte";
  import { provide } from "$lib/framework/di";
  import { createApi } from "$lib/infra/api/api.service";
  import { apiToken } from "$lib/core/api";
  import { authToken } from "$lib/core/auth";
  import { createAuth } from "$lib/infra/auth";

  const { children } = $props();

  const queryClient = new QueryClient();

  provide(apiToken, createApi());
  provide(authToken, createAuth());
</script>

<QueryClientProvider client={queryClient}>
  <div class="grid h-svh grid-rows-[auto_1fr]">
    <Header />
    <main class="overflow-y-auto">
      {@render children()}
    </main>
  </div>
  <SvelteQueryDevtools />
</QueryClientProvider>
