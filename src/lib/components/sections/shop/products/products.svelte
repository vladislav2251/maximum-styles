<script>
  import Product from '../product/product.svelte';

  export let translation;
  export let products;
  export let account;
  export let isLoading;
</script>

<section class="py-12 flex flex-wrap justify-center items-center gap-y-8">
  {#if isLoading}
    <div class="w-full text-center">Loading...</div>
  {:else}
    {#each products as product (product._id)}
      <Product {translation} {product} {account} />
    {/each}
  {/if}
</section>
