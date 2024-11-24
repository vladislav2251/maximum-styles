<script>
  import { createEventDispatcher } from 'svelte';

  export let translation;
  export let searchQuery = '';
  export let isLoading = false;

  const dispatch = createEventDispatcher();

  const handleSearch = () => {
    dispatch('search', { searchQuery });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
</script>

<div class="flex mb-4">
  <input
    type="search"
    name="input"
    id="search"
    placeholder={translation?.main?.search?.placeholder}
    class="px-8 py-4 cursor-pointer outline-none w-full bg-[var(--color-white100)]"
    bind:value={searchQuery}
    on:keypress={handleKeyPress}
    disabled={isLoading}
  />
  <button
    type="button"
    class="px-8 py-4 justify-center flex items-center hover:bg-[var(--color-gray800)] transition-all duration-300 hover:scale-x-105 bg-[var(--color-black)] text-[var(--color-white)]"
    on:click={handleSearch}
    disabled={isLoading}
  >
    {translation?.main?.search?.label}
  </button>
</div>
