<script>
  import { language } from '$lib/context/store.js';
  import Search from '$lib/components/sections/search.svelte';
  import Products from '$lib/components/sections/shop/products/products.svelte';
  import Pagination from '$lib/components/pagination/pagination.svelte';
  import CategoryFilter from '$lib/components/categories/category-filter.svelte';
  import PriceRange from '$lib/components/categories/price-range.svelte';
  import ManufacturerFilter from '$lib/components/categories/manufacturer-filter.svelte';
  import { getProducts } from '@stores/main.js';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  let translation;
  let searchQuery = null;
  let currentPage = 1;
  let totalPages = 1;
  let isLoading = false;
  let totalProducts = 0;
  let selectedCategories = [];
  let selectedManufacturers = [];
  let minPrice = null;
  let maxPrice = null;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
  const products = writable([]);
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

  onMount(() => {
    fetchProducts();
  });
</script>

<div class="flex gap-6 max-md:flex-col container py-12">
  <div class="w-64 space-y-6 flex-shrink-0">
    <CategoryFilter
      {selectedCategories}
      on:categoriesChange={handleCategoriesChange}
    />
    <ManufacturerFilter
      {selectedManufacturers}
      on:manufacturersChange={handleManufacturersChange}
    />
    <PriceRange {minPrice} on:priceChange={handlePriceChange} />
    <button
      class="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
        on:pageChange={handlePageChange}
      />
    {/if}
  </div>
</div>
