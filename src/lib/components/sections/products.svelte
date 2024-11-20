<script>
  import { addProductToCart } from '$lib/context/cart.js';
  import Product from '$lib/components/sections/product.svelte';

  export let translation;
  export let products;

  let filteredProducts = products;
  function setFilteredProducts(newProducts) {
    filteredProducts = newProducts;
  }
</script>

<section class="py-12 flex flex-wrap justify-center items-center gap-y-8">
  {#each filteredProducts as product (product._id)}
    <Product {translation} {product} addToCart={addProductToCart} />
  {/each}
</section>
