<script>
  export let translation;
  export let products = [];
  export let filterProducts;

  let searchQuery = '';
  let sortOption = 'name_asc';

  $: filteredProducts = filter(products);

  function filter(products) {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return filtered.sort(sortProducts);
  }

  function sortProducts(a, b) {
    if (sortOption === 'name_asc') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'name_desc') {
      return b.name.localeCompare(a.name);
    } else if (sortOption === 'price_asc') {
      return a.price.regular - b.price.regular;
    } else if (sortOption === 'price_desc') {
      return b.price.regular - a.price.regular;
    }
    return 0;
  }

  $: filterProducts(filteredProducts);
</script>

<div class="flex mb-4">
  <input
    type="search"
    name="input"
    id="search"
    placeholder={translation?.main?.search?.placeholder}
    class="px-8 py-4 cursor-pointer outline-none w-full bg-[var(--color-white100)]"
    bind:value={searchQuery}
  />
  <button
    type="submit"
    name="button"
    class="px-8 py-4 justify-center flex items-center hover:bg-[var(--color-gray800)] transition-all duration-300 hover:scale-x-105 bg-[var(--color-black)] text-[var(--color-white)]"
    on:click={() => {}}
  >
    {translation?.main?.search?.label}
  </button>
</div>

<div class="mb-4">
  <select
    class="px-4 py-2 border rounded"
    bind:value={sortOption}
  >
    <option value="name_asc">{translation?.main?.sort?.name_asc}</option>
    <option value="name_desc">{translation?.main?.sort?.name_desc}</option>
    <option value="price_asc">{translation?.main?.sort?.price_asc}</option>
    <option value="price_desc">{translation?.main?.sort?.price_desc}</option>
  </select>
</div>