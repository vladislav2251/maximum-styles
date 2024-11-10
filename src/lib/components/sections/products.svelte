<script>
    import Product from "$lib/components/sections/product.svelte";
    export let translation;
    export let products;
  </script>

  <section class= "py-12 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-y-8">
      {#each products as product}
          <Product
              {translation}
              {product}
          />
      {/each}
  </section>
