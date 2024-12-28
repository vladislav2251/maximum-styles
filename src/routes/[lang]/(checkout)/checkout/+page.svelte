<script>
  import Checkout from '$lib/components/sections/checkout/checkout.svelte';
  export let data;
</script>

<Checkout
  account={data.account}
  cart={data.cart.products}
  price={data.cart.price}
  translation={data.lang.file}
/>
