<script>
  import SignUp from '$lib/components/auth/sign-up.svelte';
  import { language } from '$lib/context/store.js';

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let translation;
</script>

<SignUp {translation} />
