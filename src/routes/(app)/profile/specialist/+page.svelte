<script>
  import Specialist from '$lib/components/sections/profile/specialist.svelte';
  import { language } from '$lib/context/store.js';
  export let data;
  const accountData = data.account;

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }
</script>

<Specialist {translation} {accountData} />
