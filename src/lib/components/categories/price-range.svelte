<script>
  import { createEventDispatcher } from 'svelte';

  export let minPrice = 0;

  const dispatch = createEventDispatcher();
  let currentMin = minPrice;
  let currentMax = undefined;

  $: {
    if (currentMin > currentMax && currentMax !== undefined) {
      currentMin = currentMax;
    }
    if (currentMax < currentMin && currentMax !== undefined) {
      currentMax = currentMin;
    }
    dispatch('priceChange', {
      minPrice: currentMin,
      maxPrice: currentMax === '' ? undefined : currentMax,
    });
  }
</script>

<div class="space-y-4">
  <h3 class="font-semibold text-lg">Price Range</h3>
  <div class="flex gap-4 items-center">
    <div class="flex-1">
      <label for="min" class="text-sm text-gray-600">Min</label>
      <input
        type="number"
        bind:value={currentMin}
        placeholder="0"
        min={0}
        class="w-full px-2 py-1 border rounded"
      />
    </div>
    <div class="flex-1">
      <label for="max" class="text-sm text-gray-600">Max</label>
      <input
        type="number"
        bind:value={currentMax}
        placeholder="0"
        min={0}
        class="w-full px-2 py-1 border rounded"
      />
    </div>
  </div>
</div>
