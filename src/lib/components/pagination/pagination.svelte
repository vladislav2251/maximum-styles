<script>
  import { createEventDispatcher } from 'svelte';
  export let currentPage = 1;
  export let totalPages = 1;
  export let isLoading = false;
  export let translation;

  const dispatch = createEventDispatcher();
  let inputPage = currentPage;
  $: inputPage = currentPage;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      dispatch('pageChange', { page: newPage });
    }
  };
  const handleInputChange = () => {
    const pageNum = parseInt(inputPage);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      handlePageChange(pageNum);
    } else {
      inputPage = currentPage;
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleInputChange();
    }
  };
</script>

<div class="flex items-center justify-center gap-4 my-8">
  <button
    class="px-4 py-2 bg-[var(--color-black)] rounded text-[var(--color-white)] disabled:opacity-50 disabled:cursor-not-allowed"
    on:click={() => handlePageChange(currentPage - 1)}
    disabled={currentPage <= 1 || isLoading}
  >
    {translation?.createProduct?.btn?.prev}
  </button>

  <div class="flex items-center gap-2">
    <input
      type="number"
      bind:value={inputPage}
      on:keypress={handleKeyPress}
      on:blur={handleInputChange}
      min="1"
      max={totalPages}
      class="w-16 text-center px-2 py-1 border border-gray-300"
      disabled={isLoading}
    />
    <span class="text-gray-600">of {totalPages}</span>
  </div>

  <button
    class="px-4 py-2 bg-[var(--color-black)] rounded text-[var(--color-white)] disabled:opacity-50 disabled:cursor-not-allowed"
    on:click={() => handlePageChange(currentPage + 1)}
    disabled={currentPage >= totalPages || isLoading}
  >
    {translation?.createProduct?.btn?.next}
  </button>
</div>
