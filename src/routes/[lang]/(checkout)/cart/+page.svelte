<script>
  import Cart from '$lib/components/sections/cart.svelte';
  export let data;
</script>

<Cart
  translation={data.lang.file}
  currentLang={data.lang.code}
  products={data.products.products}
  account={data.account}
/>
