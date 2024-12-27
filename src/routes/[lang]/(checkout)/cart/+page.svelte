<script>
  import Cart from '$lib/components/sections/cart.svelte';
  import { languageStore } from '$lib/context/languageStore';
  export let data;
</script>

<Cart
  translation={$languageStore.langFile}
  currentLang={$languageStore.currentLang}
  products={data.products.products}
  account={data.account}
/>
