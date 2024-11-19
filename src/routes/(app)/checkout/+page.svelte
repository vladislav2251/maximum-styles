<script>
  import Checkout from '$lib/components/sections/checkout.svelte';
  import { language } from '$lib/context/store.js';

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let translation;

  export let data;
</script>

<Checkout {translation} products={data.products} account={data.account} />
