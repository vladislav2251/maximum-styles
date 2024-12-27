<script>
  import { language } from '$lib/context/store.js';
  import Personal from '$lib/components/sections/profile/personal.svelte';

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
  const accountData = data.account;
</script>

<Personal {translation} {accountData} />
