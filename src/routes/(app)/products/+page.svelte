<script>
  import { language } from '$lib/context/store.js';
  import Categories from '$lib/components/sections/categories.svelte';
  import Search from '$lib/components/sections/search.svelte';
  import Products from '$lib/components/sections/products.svelte';
  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
  const categories = data.categories;


  let products = data.products;
  let filteredProducts = products;

  function setFilteredProducts(newProducts) {
    filteredProducts = newProducts;
  }
</script>

<div class="flex gap-2 max-md:flex-col container py-12">
  <Categories {translation} {categories} />

  <div class="flex-1">
    <Search {translation} {products} filterProducts={setFilteredProducts} />
    <Products {translation} {products} {filteredProducts} />
  </div>
</div>
