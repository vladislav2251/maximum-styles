<script>
  import { getCategories } from '@/stores/main.js';
  import { createEventDispatcher, onMount } from 'svelte';
  import { language } from '$lib/context/store.js';
  let categories = [];
  export let selectedCategories = [];
  const dispatch = createEventDispatcher();

  let currentLang;
  language.subscribe((lang) => {
    currentLang = lang.code;
  });

  onMount(async () => {
    const data = await getCategories();
    if (data) {
      categories = data;
    }
  });

  function handleCategoryChange(categoryId) {
    if (selectedCategories.includes(categoryId)) {
      selectedCategories = selectedCategories.filter((id) => id !== categoryId);
    } else {
      selectedCategories = [...selectedCategories, categoryId];
    }
    dispatch('categoriesChange', { categories: selectedCategories });
  }
  console.log(currentLang);
</script>

<div class="space-y-4">
  <h3 class="font-semibold text-lg">Categories</h3>
  <div class="space-y-2">
    {#each categories as category}
      <label class="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={selectedCategories.includes(category._id)}
          on:change={() => handleCategoryChange(category._id)}
          class="rounded border-gray-300"
        />
        <span>{category.name[currentLang]}</span>
      </label>
    {/each}
  </div>
</div>
