<script>
  import Products from "/src/components/sections/Products.svelte";

  export let translation
</script>
<section class="pt-12 container">
    <h2 class="text-4xl font-bold">
      {translation?.main?.simillar?.label}        
    </h2>

    <Products />
</section>