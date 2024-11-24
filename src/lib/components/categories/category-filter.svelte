<script>
  import { createEventDispatcher } from 'svelte';

  export let categories = [];
  export let selectedCategories = [];

  const dispatch = createEventDispatcher();

  function handleCategoryChange(categoryId) {
    if (selectedCategories.includes(categoryId)) {
      selectedCategories = selectedCategories.filter((id) => id !== categoryId);
    } else {
      selectedCategories = [...selectedCategories, categoryId];
    }
    dispatch('categoriesChange', { categories: selectedCategories });
  }
</script>

<div class="space-y-4">
  <h3 class="font-semibold text-lg">Categories</h3>
  <div class="space-y-2">
    {#each categories as category}
      <label class="flex items-center gap-2">
        <input
          type="checkbox"
          checked={selectedCategories.includes(category._id)}
          on:change={() => handleCategoryChange(category._id)}
          class="rounded border-gray-300"
        />
        <span>{category.name.de}</span>
      </label>
    {/each}
  </div>
</div>
