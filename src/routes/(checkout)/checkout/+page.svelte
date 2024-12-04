<script>
  import Checkout from '$lib/components/sections/checkout/checkout.svelte';
  import { language } from '$lib/context/store.js';
  export let data;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let translation;
</script>

<Checkout
  account={data.account}
  cart={data.cart.products}
  price={data.cart.price}
  {translation}
/>
