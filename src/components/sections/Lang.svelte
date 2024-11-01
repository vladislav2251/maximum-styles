<script>
    import { language } from "$lib/context/store.js";
    import { languagesList } from '$lib/context/language.js';
    import { changeLang } from "$lib/context/language.js"; 
    import { onMount } from "svelte";
    import { derived } from 'svelte/store';

    let selectedOption = derived(language, $language => $language.name);
    let isOpenLanguage = false;

    function toggleDropdown() {
        isOpenLanguage = !isOpenLanguage;
    };

    function selectOption(option) {
        changeLang(option);
        isOpenLanguage = false;
    };

    function handleClickOutside(event) {
        const dropdown = document.getElementById("dropdownMenu");
        const toggleButton = document.getElementById("toggleButton");

        if (isOpenLanguage && !dropdown.contains(event.target) && !toggleButton.contains(event.target)) {
            isOpenLanguage = false;
        }
    }

    onMount(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    });
</script>

<div class="relative">
    <button
        id="toggleButton"
        aria-haspopup="listbox"
        aria-expanded={isOpenLanguage}
        on:click={toggleDropdown}
        class="relative mt-0.5 flex font-semibold cursor-pointer items-center"
    >
        {$selectedOption}
    </button>

    <ul
        id="dropdownMenu"
        class="absolute z-50 left-0 top-full mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm transition-opacity duration-200 ease-in-out"
        role="listbox" 
        aria-labelledby="listbox-label"
        style="opacity: {isOpenLanguage ? 1 : 0}; pointer-events: {isOpenLanguage ? 'auto' : 'none'}; transform: scale({isOpenLanguage ? 1 : 0});"
    >
        {#each languagesList as lang}
            <button 
                type="button"
                class="text-gray-900 cursor-pointer select-none relative mx-1 rounded-lg py-2 flex items-center justify-center px-3 hover:bg-gray-100" 
                role="option"
                aria-selected={selectedOption === lang.name}
                tabindex="0" 
                on:click={() => selectOption(lang.id)} 
            >
                <span class="block truncate">{lang.name}</span>
            </button>
        {/each}
    </ul>
</div>
