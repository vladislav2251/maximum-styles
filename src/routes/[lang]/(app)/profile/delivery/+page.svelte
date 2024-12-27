<script>
  import Delivery from '$lib/components/sections/profile/delivery.svelte';
  import { language } from '$lib/context/store.js';

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
  const accountData = data.account;
</script>

<Delivery {translation} {accountData} />
