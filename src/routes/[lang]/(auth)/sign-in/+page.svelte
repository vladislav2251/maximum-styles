<script>
  import SignIn from '$lib/components/auth/sign-in.svelte';
  import { languageStore } from '$lib/context/languageStore';
</script>

<svelte:head>
  <title>Maximum Style - Sign In</title>
</svelte:head>

<SignIn
  translation={$languageStore.langFile}
  currentLang={$languageStore.currentLang}
/>
