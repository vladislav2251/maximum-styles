<script>
  import { language } from '$lib/context/store.js';
  import Categories from '$lib/components/sections/categories.svelte';
  import Search from '$lib/components/sections/search.svelte';
  import Products from '$lib/components/sections/shop/products/products.svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { getProducts } from '@stores/main.js';

  let translation;
  let searchQuery = '';
  let page = 1;
  let isLoading = false;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
  const products = writable([]);
  let account = data.account;
  const categories = data.categories;

  const fetchProducts = async () => {
    isLoading = true;
    const queryObject = {};
    if (page) queryObject.page = page;
    if (searchQuery) queryObject.search = searchQuery;

    try {
      const response = await getProducts(queryObject);
      products.set(response || []);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      isLoading = false;
    }
  };

  const handleSearch = (event) => {
    searchQuery = event.detail.searchQuery;
    fetchProducts();
  };

  onMount(() => {
    fetchProducts();
  });
</script>

<div class="flex gap-2 max-md:flex-col container py-12">
  <Categories {translation} {categories} />
  <div class="flex-1">
    <Search {translation} {searchQuery} {isLoading} on:search={handleSearch} />
    <Products {translation} products={$products} {account} {isLoading} />
  </div>
</div>
