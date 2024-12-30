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
    class="font-bold transition border border-solid rounded-t-xl min-h-7"
    on:click|preventDefault|stopPropagation={toggleFilters}
  >
    {lang.toUpperCase()}
  </button>
  {#if isActive}
    <fieldset
      class="md:col-span-2 flex flex-col gap-2 border border-solid border-t-0 rounded-b-xl p-3"
    >
      {#each descriptionFields as field}
        <textarea
          id={`${field.key}_${lang}`}
          name={`${field.key}_${lang}`}
          class="textarea-class"
          placeholder={translation?.createProduct?.inputs?.[6]?.[field.label] ||
            ''}
        ></textarea>
      {/each}
    </fieldset>
  {/if}
</div>

<style>
  .textarea-class {
    padding: 1rem 2rem;
    border: 1px solid var(--color-gray);
    border-radius: 0.5rem;
    font-size: 1rem;
    color: var(--color-gray);
    transition: all 0.3s;
  }

  .textarea-class:focus {
    color: var(--color-primary-300);
    border-color: var(--color-primary-300);
  }
</style>
