<script>
  import { language } from '$lib/context/store.js';
  import Cart from '$lib/components/sections/cart.svelte';

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let translation;

  export let data;
</script>

<Cart {translation} products={data.products.products} account={data.account} />
