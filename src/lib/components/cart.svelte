<script>
    import { fly } from 'svelte/transition';
    import Quantity from '$lib/components/sections/quantity.svelte';
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    export let translation;
    export let isCartOpen;
    export let closeCart;

    const toggleCloseCart = () => {
        closeCart();
    };

    let cartItemIds = [1];
    let cart = [];

    function updateQuantity(index, newQuantity) {
        cart[index].quantity = newQuantity;
    }

    function backToShopping() {
        goto('/products');
        closeCart();
    }

    async function fetchProductById(product_id) {
        try {
            const response = await fetch(`http://162.19.155.230:4000/products/get/${product_id}/`);
            if (response.ok) {
                const data = await response.json();
                if (data.product) {
                    return {
                        ...data.product,
                        quantity: data.amount || 1,
                        price: data.product.price.regular,
                        sale: data.product.price.discount?.regular || data.product.price.regular,
                        photo: data.product.photos[0]
                    };
                }
            }
            console.error("Помилка: товар не знайдено з ID", product_id);
            return null;
        } catch (error) {
            console.error("Помилка запиту", error);
            return null;
        }
    }

    async function loadCartItems() {
        const products = await Promise.all(cartItemIds.map(id => fetchProductById(id)));
        cart = products.filter(product => product !== null);
    }

    onMount(() => {
        loadCartItems();
    });

    async function addProductToCart(product_id) {
        if (!cartItemIds.includes(product_id)) {
            cartItemIds = [...cartItemIds, product_id];
            await loadCartItems();
        }
    }

    // Розрахунок загальної суми та ПДВ
    $: total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    $: totalSale = cart.reduce((acc, item) => acc + item.sale * item.quantity, 0);
    $: vat = (total * 0.2).toFixed(2);
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
                    <button on:click={backToShopping} type="button" class="outline-none">{translation?.cart?.back}</button>
                    <button type="button" class="outline-none">{translation?.cart?.restore}</button>
                </div>

                <div class="flex max-md:flex-col gap-5">
                    <div class="max-h-[300px] overflow-x-hidden overflow-scroll">
                        {#each cart as { photo, name, price, sale, quantity }, index}
                        <div class="flex max-sm:flex-col max-sm:gap-5 justify-between md:grid md:grid-cols-5 place-items-center items-center border-b border-solid border-[var(--color-white200)]">
                            <button class="sm:hidden grid place-content-end w-full mr-10 mt-5" type="button" aria-label="Delete">✕</button>
                            <img src={photo} alt={name} />
                            <h2 class="text-base font-normal text-[var(--color-gray800)]">{name}</h2>
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
                            <p class="text-xl font-thin">{Math.random().toString(36).substr(2, 9)}</p> <!-- Випадковий номер замовлення -->
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
                    <form class="grid gap-5 md:w-3/4">
                        <div class="flex flex-col gap-3">
                            <label for="displayName">{translation?.cart?.inputs[0]?.label}</label>
                            <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" type="text" id="displayName" name="displayName" required minlength="2" maxlength="30" placeholder="{translation?.cart?.inputs[0]?.placeholder}" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="email">{translation?.cart?.inputs[1]?.label}</label>
                            <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" autocomplete="email" type="email" id="email" name="email" required placeholder="{translation?.cart?.inputs[1]?.placeholder}" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="phone">{translation?.cart?.inputs[2]?.label}</label>
                            <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="{translation?.cart?.inputs[2]?.placeholder}" />
                        </div>

                        <button class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-1/3 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105" type="submit" name="button">{translation?.cart.btn}</button>
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
