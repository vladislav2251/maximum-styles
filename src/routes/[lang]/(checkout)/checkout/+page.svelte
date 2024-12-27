<script>
  import Checkout from '$lib/components/sections/checkout/checkout.svelte';
  import { languageStore } from '$lib/context/languageStore';
  export let data;
</script>

<Checkout
  account={data.account}
  cart={data.cart.products}
  price={data.cart.price}
  translation={$languageStore.langFile}
/>
