<script>
  import Product from '../product/product.svelte';

  export let translation;
  export let products;
  export let account;

  let filteredProducts = products;
  function setFilteredProducts(newProducts) {
    filteredProducts = newProducts;
  }
</script>

<section class="py-12 flex flex-wrap justify-center items-center gap-y-8">
  {#each filteredProducts as product (product._id)}
    <Product {translation} {product} {account} />
  {/each}
</section>
