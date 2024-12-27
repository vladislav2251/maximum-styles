<script>
  import SignUp from '$lib/components/auth/sign-up.svelte';
  import { languageStore } from '$lib/context/languageStore';
</script>

<svelte:head>
  <title>Maximum Style - Sign Up</title>
</svelte:head>

<SignUp
  translation={$languageStore.langFile}
  currentLang={$languageStore.currentLang}
/>
