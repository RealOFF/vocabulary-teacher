<script lang="ts">
  import { SignInForm, SignUpForm } from "$lib/features/auth";

  let showSignIn = $state(true);
</script>

{#if showSignIn}
  <SignInForm switchToSignUp={() => (showSignIn = false)} />
{:else}
  <SignUpForm switchToSignIn={() => (showSignIn = true)} />
{/if}
