<script>
  import { getManufacturers } from '@/stores/main.js';
  import { createEventDispatcher, onMount } from 'svelte';
  import { language } from '$lib/context/store.js';

  let manufacturers = [];
  export let selectedManufacturers = [];
  let currentLang;
  language.subscribe((lang) => {
    currentLang = lang.code;
  });

  onMount(async () => {
    const data = await getManufacturers();
    if (data) {
      manufacturers = data;
    }
  });

  const dispatch = createEventDispatcher();

  function handleManufacturerChange(manufacturerId) {
    if (selectedManufacturers.includes(manufacturerId)) {
      selectedManufacturers = selectedManufacturers.filter(
        (id) => id !== manufacturerId
      );
    } else {
      selectedManufacturers = [...selectedManufacturers, manufacturerId];
    }
    dispatch('manufacturersChange', { manufacturers: selectedManufacturers });
  }
</script>

<div class="space-y-4">
  <h3 class="font-semibold text-lg">Manufacturers</h3>
  <div class="space-y-2">
    {#each manufacturers as manufacturer}
      <label class="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={selectedManufacturers.includes(manufacturer._id)}
          on:change={() => handleManufacturerChange(manufacturer._id)}
          class="rounded border-gray-300"
        />
        <span>{manufacturer.name[currentLang]}</span>
      </label>
    {/each}
  </div>
</div>
