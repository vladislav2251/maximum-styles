<script>
  import Search from '$lib/components/sections/search.svelte';
  import Products from '$lib/components/sections/shop/products/products.svelte';
  import Pagination from '$lib/components/pagination/pagination.svelte';
  import CategoryFilter from '$lib/components/categories/category-filter.svelte';
  import PriceRange from '$lib/components/categories/price-range.svelte';
  import ManufacturerFilter from '$lib/components/categories/manufacturer-filter.svelte';
  import { getProducts } from '@stores/main.js';
  import { writable } from 'svelte/store';
  import { languageStore } from '$lib/context/languageStore';

  $: translation = $languageStore.langFile;

  let searchQuery = null;
  let isLoading = false;
  let selectedCategories = [];
  let selectedManufacturers = [];
  let minPrice = null;
  let maxPrice = null;
  let isActive = false;

  export let data;

  let currentPage = data.products.pages?.current || 1;
  let totalPages = data.products.pages?.total || 1;
  let totalProducts = data.products.products_count || 0;
  const products = writable(data.products.products || []);

  let account = data.account;

  const fetchProducts = async () => {
    isLoading = true;
    const queryObject = {
      page: currentPage,
      search: searchQuery,
      categories:
        selectedCategories.length > 0
          ? `[${selectedCategories.join(',')}]`
          : null,
      manufacturers:
        selectedManufacturers.length > 0
          ? `[${selectedManufacturers.join(',')}]`
          : null,
      'min-price': minPrice,
      'max-price': maxPrice,
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

  const handleSearch = (event) => {
    searchQuery = event.detail.searchQuery;
    currentPage = 1;
    fetchProducts();
  };

  const handlePageChange = (event) => {
    currentPage = event.detail.page;
    fetchProducts();
  };

  const handleCategoriesChange = (event) => {
    selectedCategories = event.detail.categories;
    currentPage = 1;
  };
  const handleManufacturersChange = (event) => {
    selectedManufacturers = event.detail.manufacturers;
    currentPage = 1;
  };

  const handlePriceChange = (event) => {
    minPrice = event.detail.minPrice;
    maxPrice = event.detail.maxPrice;
    currentPage = 1;
  };

  const handleApplyFilters = () => {
    fetchProducts();
  };

  const toggleFilters = () => {
    isActive = !isActive;
  };
</script>

<svelte:head>
  <title>Maximum Style - Products</title>
</svelte:head>

<div class="flex gap-6 max-md:flex-col container py-12">
  <div
    class="md:w-64 transition w-full space-y-6 flex-shrink-0 overflow-hidden border-zinc-50 border rounded-xl shadow-lg p-[14px_16px] bg-[#FAFAFA]"
    style="height: {isActive ? '750px' : '3.5rem'};"
  >
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold">Filters</h2>
      <button
        class="text-xl font-bold transition"
        on:click={toggleFilters}
        class:rotate-180={isActive}
      >
        ᐯ
      </button>
    </div>
    <CategoryFilter
      categories={data.categories}
      {selectedCategories}
      on:categoriesChange={handleCategoriesChange}
    />
    <ManufacturerFilter
      manufacturers={data.manufacturers}
      {selectedManufacturers}
      on:manufacturersChange={handleManufacturersChange}
    />
    <PriceRange {minPrice} on:priceChange={handlePriceChange} />
    <button
      class="px-8 py-4 w-full hover:bg-[var(--color-gray800)] transition-all duration-300 hover:scale-x-105 bg-[var(--color-black)] text-[var(--color-white)]"
      on:click={handleApplyFilters}
    >
      Apply Filters
    </button>
  </div>
  <div class="flex-1">
    <Search {translation} {searchQuery} {isLoading} on:search={handleSearch} />
    <Products {translation} products={$products} {account} {isLoading} />
    {#if totalProducts > 0}
      <Pagination
        {currentPage}
        {totalPages}
        {isLoading}
        {translation}
        on:pageChange={handlePageChange}
      />
    {/if}
  </div>
</div>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }
  .transition {
    transition:
      transform 0.3s ease,
      height 0.3s ease;
  }
</style>
