<script>
    import { fly } from 'svelte/transition';
    import Quantity from '$lib/components/sections/quantity.svelte';
    export let translation;
    export let isCartOpen;
    export let closeCart;

    let cart = [
        { img: "/img/miniCard.webp", label: "Sample Item 1", price: 200, sale: 500, quantity: 1 },
        { img: "/img/miniCard.webp", label: "Sample Item 2", price: 150, sale: 300, quantity: 1 },
        { img: "/img/miniCard.webp", label: "Sample Item 3", price: 150, sale: 300, quantity: 1 },
    ];
    let id = '1';

    const toggleCloseCart = () => {
        closeCart();
    };

    $: total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    $: totalSale = cart.reduce((acc, item) => acc + item.sale * item.quantity, 0);
    $: vat = (total * 0.2).toFixed(2);

    function updateQuantity(index, newQuantity) {
        cart[index].quantity = newQuantity;
    }
</script>

{#if isCartOpen}
    <div class="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-[22px] w-[91.666667%] max-w-[1024px] max-h-[80vh] z-50 flex flex-col gap-8 shadow-lg overflow-y-auto"
        in:fly={{ y: 200, duration: 400 }} out:fly={{ y: -200, duration: 300 }}>

        <div class="flex items-center justify-between">
            <h5 class="font-medium text-[40px]">{translation?.cart?.title}</h5>
            <button type="button" on:click={toggleCloseCart} aria-label="Close modal">✕</button>
        </div>

        {#if cart.length > 0}
            <div class="flex flex-col gap-5">
                <div class="flex justify-between mb-5">
                    <button type="button" class="outline-none">{translation?.cart?.back}</button>
                    <button type="button" class="outline-none">{translation?.cart?.restore}</button>
                </div>

                <div class="flex max-md:flex-col gap-5">
                    <div class="max-h-[300px] overflow-x-hidden overflow-scroll">
                        {#each cart as { img, label, price, sale, quantity }, index}
                        <div class="flex max-sm:flex-col max-sm:gap-5 justify-between md:grid md:grid-cols-5 place-items-center items-center border-b border-solid border-[var(--color-white200)]">
                            <button class="sm:hidden grid place-content-end w-full mr-10 mt-5" type="button" aria-label="Delete">✕</button>
                            <img src={img} alt={label} />
                            <h2 class="text-base font-normal text-[var(--color-gray800)]">{label}</h2>
                            <Quantity {quantity} onChange={(newQuantity) => updateQuantity(index, newQuantity)} />
                            <div class="flex sm:flex-col gap-2 items-center">
                                <p class="text-xl font-base">${price * quantity}</p>
                                <p class="text-base font-thin line-through text-[var(--color-gray100)]">${sale * quantity}</p>
                            </div>
                            <button class="max-sm:hidden" type="button" aria-label="Delete">✕</button>
                        </div>
                        {/each}
                    </div>

                    <div class="grid gap-3 w-full md:w-2/4 p-3 border border-solid border-[var(--color-gray100)] rounded-md">
                        <div class="flex justify-between items-center">
                            <p class="text-[var(--color-gray)]">{translation?.cart?.order_number}</p>
                            <p class="text-xl font-thin">{id}</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-[var(--color-gray)]">{translation?.cart?.sum}</p>
                            <p class="text-xl font-thin">${total}</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-[var(--color-gray)]">{translation?.cart?.sale}</p>
                            <p class="text-xl font-thin">${totalSale}</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-[var(--color-gray)]">{translation?.cart?.vat}</p>
                            <p class="text-xl font-thin">${vat}</p>
                        </div>
                        <div class="flex justify-between items-center border-t border-solid border-[var(--color-gray200)]">
                            <p class="text-xl text-[var(--color-gray)]">{translation?.cart?.total}</p>
                            <p class="text-xl font-thin">${total}</p>
                        </div>
                        <button type="button" class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105">{translation?.cart?.btn}</button>
                    </div>
                </div>

                <div class="grid gap-5">
                    <div class="inline-flex items-center">
                        <label class="flex items-center cursor-pointer relative" for="check-1">
                            <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-1" />
                            <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </label>
                        <label class="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">{translation?.cart?.checkbox}</label>
                    </div>
                    <div class="inline-flex items-center">
                        <label class="flex items-center cursor-pointer relative" for="check-1">
                            <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-1" />
                            <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </label>
                        <label class="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">{translation?.cart?.checkbox}</label>
                    </div>
                </div>

                <div class="grid gap-5">
                    <h2 class="text-3xl lg:text-4xl font-bold">{translation?.main?.profile?.personal_information}</h2>
                    <form class="grid gap-5 md:w-3/4">
                        <div class="flex flex-col gap-3">
                            <label for="displayName">{translation?.main?.profile?.inputs[2]?.label}</label>
                            <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" type="text" id="displayName" name="displayName" required minlength="2" maxlength="30" placeholder="{translation?.main?.profile?.inputs[2]?.placeholder}" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="email">{translation?.main?.profile?.inputs[3]?.label}</label>
                            <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" autocomplete="email" type="email" id="email" name="email" required placeholder="{translation?.main?.profile?.inputs[3]?.placeholder}" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="phone">{translation?.main?.profile?.inputs[4]?.label}</label>
                            <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="{translation?.main?.profile?.inputs[4]?.placeholder}" />
                        </div>

                        <button class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-1/3 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105" type="submit" name="button">{translation?.main?.profile?.change}</button>
                    </form>
                </div>
            </div>
        {:else}
            <div class="products-container">
                <h2>{translation?.cart?.empty}</h2>
            </div>
        {/if}
    </div>
{/if}

<button
    class="fixed inset-0 bg-black/50 cursor-default backdrop-blur-sm transition-opacity duration-300 z-40"
    on:click={toggleCloseCart}
    aria-label="Close menu"
    tabindex="0"
    style="outline: none;"
    class:opacity-100={isCartOpen}
    class:opacity-0={!isCartOpen}
    class:pointer-events-auto={isCartOpen}
    class:pointer-events-none={!isCartOpen}
></button>
