<script>
    import { cart } from "/src/stores/user.js";
    import { fly } from 'svelte/transition';
    export let translation;
    export let isCartOpen;
    export let closeCart;

    const toggleCloseCart = () => {
        closeCart();
    };
</script>

{#if isCartOpen}
    <div
        class="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-[22px] w-[91.666667%] max-w-[652px] z-50 flex flex-col gap-8 shadow-lg"
        in:fly={{ y: 200, duration: 400 }}
        out:fly={{ y: -200, duration: 300 }}
    >
        <div class="flex items-center justify-between">
            <h5 class="font-medium text-[40px]">{translation?.cart?.title}</h5>
            <button type="button" on:click={() => toggleCloseCart()} aria-label="Close modal">
                ✕
            </button>
        </div>

        {#if $cart.length > 0}
        й
        {:else}
			<div class="products-container">
				<h2>На жаль, Ви сюди нічого не додали :(</h2>
			</div>
		{/if}
    </div>
{/if}

<button
    class="fixed flex inset-0 bg-black/50 cursor-default backdrop-blur-sm transition-opacity duration-300 z-40"
    on:click={() => toggleCloseCart()}
    aria-label="Close menu"
    tabindex="0"
    style="outline: none;"
    class:opacity-100={isCartOpen}
    class:opacity-0={!isCartOpen}
    class:pointer-events-auto={isCartOpen}
    class:pointer-events-none={!isCartOpen}
>
</button>
