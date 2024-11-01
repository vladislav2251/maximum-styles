<script>
    import Lang from "/src/components/sections/Lang.svelte";

    export let translation;

    let isMenuOpen = false;

    $: menuItems = [
        { label: translation?.header?.menuItems?.home, href: "/" },
        { label: translation?.header?.menuItems?.store, href: "/store" },
        { label: translation?.header?.menuItems?.about, href: "/about" }
    ];

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }
</script>

<header class="grid items-center md:items-start w-full bg-[var(--color-violet)]" id="header">
    <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-3">
            <a href="/">
                <img src="/svg/logo.svg" alt="logo" />
            </a>
            
            <div class="hidden md:flex justify-center">
                {#each menuItems as element}
                <a href={element.href} class="px-4 flex items-center">
                    {element.label}
                </a>
                {/each}
            </div>
            
            <div class="flex md:hidden justify-end items-center gap-6">
                <!-- <Lang /> -->
                <button type="button" on:click={() => toggleMenu()}>
                    <img class="w-[24px]" src="/svg/burger.svg" alt="burger" />
                </button>
            </div>
            
            <div class="flex max-md:hidden items-center gap-6 justify-end">           
                <Lang />

                <a href="/profile">
                    <img src="/svg/profile.svg" alt="profile icon">
                </a>
                
                <a href="/cart">
                    <img src="/svg/cart.svg" alt="cart icon">
                </a>
            </div>
        </div>
    </div>
</header>

<div class="w-full md:hidden flex flex-col transition-all z-30 duration-300 bg-white border-l fixed top-0 right-0 bottom-0 sm:w-[350px]" class:is-open={isMenuOpen} class:translate-x-full={!isMenuOpen}>
    <div class="flex items-center justify-end p-4 border-b border-solid border-[var(--color-gray)]">
        <button type="button" on:click={() => toggleMenu()}>
            <img class="w-[24px]" src="/svg/close.svg" alt="close" />
        </button>
    </div>
    
    <div class="grid">
        {#each menuItems as element}
            <a href={element.href} class="px-4 border-b border-solid border-[var(--color-gray)] justify-center text-[var(--color-black)] h-[80px] flex items-center">
                {element.label}
            </a>
        {/each}
    </div>
        
    <div class="flex md:hidden py-8 justify-center gap-8 px-4">
        <a href="/profile">
            <img src="/svg/profile.svg" alt="profile icon">
        </a>

        <a href="/cart">
            <img src="/svg/cart.svg" alt="cart icon">
        </a>
    </div>
</div>

{#if isMenuOpen}
    <button class="fixed md:hidden flex inset-0 bg-black/50 transition-opacity duration-700 z-20"
         on:click={() => toggleMenu()}
         on:keydown={(e) => e.key === 'Escape' && (toggleMenu())} 
         aria-label="Close menu"
         tabindex="0" 
         style="outline: none;"
    >
    </button>
{/if}
