<script>
  import { onMount } from 'svelte';

  export let category;
  export let selectedOption = '';

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectOption(option) {
    selectedOption = option;
    isOpen = false;
  }

  function handleClickOutside(event) {
    const dropdown = document.getElementById('dropdownMenu' + category._id);
    const toggleButton = document.getElementById('toggleButton' + category._id);

    if (
      isOpen &&
      !dropdown.contains(event.target) &&
      !toggleButton.contains(event.target)
    ) {
      isOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div>
  <label
    for=""
    id="listbox-label"
    class="mt-5 block text-sm font-medium leading-6 text-gray-900"
    >{category.name.de}</label
  >

  <div class="relative mt-0.5">
    <button
      id={`toggleButton${category._id}`}
      type="button"
      class="relative outline-none w-full cursor-default rounded-md bg-white h-[60px] pl-3 pr-10 text-left text-gray-900 shadow-sm ring-gray-300 sm:text-sm sm:leading-6"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      on:click={toggleDropdown}
    >
      <span class="flex items-center">
        <span class="ml-3 block truncate"
          >{selectedOption || category.name.de}</span
        >
      </span>

      <span
        class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    {#if isOpen}
      <ul
        id={`dropdownMenu${category._id}`}
        class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        role="listbox"
        aria-labelledby="listbox-label"
      >
        {#each Object.entries(category.name) as [key, value]}
          <li
            class="text-gray-900 cursor-pointer select-none relative mx-1 rounded-lg py-2 pl-3 pr-9 hover:bg-gray-100"
            role="option"
            aria-selected={selectedOption === key}
            tabindex="0"
            on:click={() => selectOption(value)}
          >
            <span class="block truncate">{value}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
