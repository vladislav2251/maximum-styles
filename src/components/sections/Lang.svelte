<script>
    import { language, languageList, changeLang } from '/src/store/languageStore.js';

    let languagesMenuOpened = false;

    const toggleLanguageMenu = () => {
        languagesMenuOpened = !languagesMenuOpened;
    };

    const selectLanguage = (id) => {
        changeLang(id);
        languagesMenuOpened = false;
    };
</script>

<div class="relative">
    <div class="cursor-pointer flex items-center" on:click={toggleLanguageMenu} aria-hidden="true">
        <img src={$language.flag} alt={$language.name} class="w-10 h-6 rounded" />
    </div>

    {#if languagesMenuOpened}
        <div class="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-md z-10">
            {#each languageList as lang (lang.id)}
                {#if lang.id !== $language.id}
                    <div 
                        class="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        on:click={() => selectLanguage(lang.id)}
                        aria-hidden="true"
                    >
                        <img src={lang.flag} alt={lang.name} class="w-10 h-5 rounded mr-2" />
                    </div>
                {/if}
            {/each}
        </div>
    {/if}
</div>
