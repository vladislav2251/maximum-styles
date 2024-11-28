<script>
  import { getProducts } from '@/stores/main.js';
  import { writable } from 'svelte/store';
  import Table from '$lib/components/admin/products/table.svelte';
  import Pagination from '$lib/components/pagination/pagination.svelte';
  import Search from '$lib/components/sections/search.svelte';
  import { language } from '$lib/context/store.js';
  import { goto } from '$app/navigation';

  let translation;
  let isLoading = false;
  let searchQuery = null;
  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
  let currentPage = data.products.pages?.current || 1;
  let totalPages = data.products.pages?.total || 1;
  let totalProducts = data.products.products_count || 0;
  let products = writable(data.products.products);

  const fetchProducts = async () => {
    isLoading = true;
    const queryObject = {
      page: currentPage,
      search: searchQuery,
    };

    try {
      const response = await getProducts(queryObject);
      products.set(response.products || []);
      currentPage = response.pages?.current || 1;
      totalPages = response.pages?.total || 1;
      totalProducts = response.products_count || 0;
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      isLoading = false;
    }
  };

  const handlePageChange = (event) => {
    currentPage = event.detail.page;
    fetchProducts();
  };
  const handleSearch = (event) => {
    searchQuery = event.detail.searchQuery;
    currentPage = 1;
    fetchProducts();
  };
</script>

<div>
  <div class="flex flex-col md:flex-row-reverse md:justify-between">
    <button
      type="button"
      class="px-8 hover:bg-[var(--color-gray800)] transition-all duration-300 hover:scale-x-105 bg-[var(--color-black)] text-[var(--color-white)]"
      on:click={() => {
        goto('product/create');
      }}
    >
      Create new product
    </button>
    <Search {translation} {searchQuery} {isLoading} on:search={handleSearch} />
  </div>
  <Table products={$products} {fetchProducts} />
  {#if totalProducts > 0}
    <Pagination
      {currentPage}
      {totalPages}
      {isLoading}
      on:pageChange={handlePageChange}
    />
  {/if}
</div>
