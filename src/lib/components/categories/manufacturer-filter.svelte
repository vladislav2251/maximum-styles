<script>
  import { getManufacturers } from '@/stores/main.js';
  import { createEventDispatcher, onMount } from 'svelte';

  let manufacturers = [];
  export let selectedManufacturers = [];

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
      <label class="flex items-center gap-2">
        <input
          type="checkbox"
          checked={selectedManufacturers.includes(manufacturer._id)}
          on:change={() => handleManufacturerChange(manufacturer._id)}
          class="rounded border-gray-300"
        />
        <span>{manufacturer.name.de}</span>
      </label>
    {/each}
  </div>
</div>
