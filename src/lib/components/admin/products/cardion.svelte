<script>
  export let translation;
  export let lang;

  const descriptionFields = [
    { key: 'detail', label: 'placeholder1' },
    { key: 'short', label: 'placeholder2' },
    { key: 'usage', label: 'placeholder3' },
    { key: 'ingredients', label: 'placeholder4' },
  ];

  let isActive = false;

  const toggleFilters = () => {
    isActive = !isActive;
  };
</script>

<div class="md:col-span-2 flex flex-col">
  <button
    type="button"
    class="font-bold text-start transition border border-solid rounded-t-md min-h-8 px-3"
    on:click|preventDefault|stopPropagation={toggleFilters}
  >
    {lang.toUpperCase()}
  </button>
  {#if isActive}
    <fieldset
      class="md:col-span-2 flex flex-col gap-2 border border-solid border-t-0 rounded-b-md p-3"
    >
      {#each descriptionFields as field}
        <textarea
          id={`${field.key}_${lang}`}
          name={`${field.key}_${lang}`}
          class="p-4 pl-8 border border-solid border-gray-300 rounded-md text-base font-normal text-black"
          placeholder={translation?.createProduct?.inputs?.[6]?.[field.label] ||
            ''}
        ></textarea>
      {/each}
    </fieldset>
  {/if}
</div>
