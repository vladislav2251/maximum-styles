<script>
  import SignIn from '../../../lib/components/forms/sign-in.svelte';
  import { language } from '$lib/context/store.js';

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let translation;
</script>

<SignIn {translation} />
