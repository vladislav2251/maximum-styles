<script>
  import Products from '../products/products.svelte';

  export let translation;
</script>

<section class="pt-12 container">
  <h2 class="text-4xl font-bold">
    {translation?.main?.simillar?.label}
  </h2>

  <Products {translation} />
</section>
