<script>
  import { cartStore, toggleCart } from '$lib/context/cart.js';
  import Quantity from '$lib/components/sections/quantity.svelte';
  import { fly } from 'svelte/transition';
  import { getCart, getProduct, removeProductFromCart } from '@stores/main';
  import { onMount } from 'svelte';

  export let translation;
  let products = [];

  $: items = $cartStore.items;
  $: isCartOpen = $cartStore.isCartOpen;
  $: total = products.reduce(
    (acc, item) => acc + item.price.regular * item.amount,
    0
  );
  $: totalSale = items.reduce(
    (acc, item) => acc + item.sale * item.quantity,
    0
  );
  $: vat = (total * 0.2).toFixed(2);

  onMount(async () => {
    const cartItems = await getCart(2);
    products = await Promise.all(
      cartItems.map(async (item) => {
        const productDetails = await getProduct(item.product_id);
        console.log(productDetails);
        return { ...productDetails, amount: item.amount };
      })
    );
  });
</script>

{#if isCartOpen}
  <div
    class="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-[22px] w-[91.666667%] max-w-[1024px] max-h-[80vh] z-50 flex flex-col gap-8 shadow-lg overflow-y-auto"
    in:fly={{ y: 200, duration: 400 }}
    out:fly={{ y: -200, duration: 300 }}
  >
    <div class="flex items-center justify-between">
      <h5 class="font-medium text-[40px]">{translation?.cart?.title}</h5>
      <button type="button" on:click={toggleCart}>✕</button>
    </div>

    {#if products.length > 0}
      <div class="flex flex-col gap-5">
        <div class="flex justify-between mb-5">
          <button on:click={toggleCart} type="button"
            >{translation?.cart?.back}</button
          >
          <button type="button">{translation?.cart?.restore}</button>
        </div>

        <div class="flex max-md:flex-col gap-5">
          <div
            class="max-h-[300px] md:overflow-x-hidden overflow-scroll w-full"
          >
            {#each products as { id, photo, name, price, sale, amount }, index}
              <div
                class="flex items-center max-sm:flex-col max-sm:gap-1 justify-between md:grid md:grid-cols-5 border-b border-solid border-[var(--color-white200)] py-3 px-5"
              >
                <button
                  class="sm:hidden grid place-content-end w-full"
                  type="button"
                  on:click={() => removeProductFromCart({ id })}>✕</button
                >
                <img src={photo} alt={name} />
                <h2 class="text-base">{name}</h2>
                <Quantity
                  bind:quantity={amount}
                  onChange={(newQuantity) => updateQuantity(index, newQuantity)}
                />
                <div class="flex sm:flex-col gap-2 items-center">
                  <p class="text-xl">${amount * price.regular}</p>
                  <p class="text-base text-[var(--color-gray100)] line-through">
                    ${price.discount.regular}
                  </p>
                </div>
                <button
                  class="max-sm:hidden"
                  type="button"
                  on:click={() => handleRemove({ id })}>✕</button
                >
              </div>
            {/each}
          </div>

          <div
            class="grid gap-3 w-full p-3 border border-solid border-[var(--color-gray100)] rounded-md flex-1"
          >
            <div class="flex md:gap-14 justify-between items-center">
              <p>{translation?.cart?.order_number}</p>
              <p>{Math.random().toString(36).substr(2, 9)}</p>
            </div>
            <div class="flex md:gap-14 justify-between items-center">
              <p>{translation?.cart?.sum}</p>
              <p>${total}</p>
            </div>
            <div class="flex md:gap-14 justify-between items-center">
              <p>{translation?.cart?.sale}</p>
              <p>${totalSale}</p>
            </div>
            <div class="flex md:gap-14 justify-between items-center">
              <p>{translation?.cart?.vat}</p>
              <p>${vat}</p>
            </div>
            <div
              class="flex md:gap-14 justify-between items-center border-t border-solid border-[var(--color-gray200)]"
            >
              <p>{translation?.cart?.total}</p>
              <p>${total}</p>
            </div>
            <button
              type="button"
              class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
              >{translation?.main?.cart?.btn}
            </button>
          </div>
        </div>
      </div>
      <div class="grid gap-5">
        <form class="grid gap-5 md:w-3/4">
          <div class="flex flex-col gap-3">
            <label for="displayName"
              >{translation?.cart?.inputs[0]?.label}</label
            >
            <input
              class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
              type="text"
              id="displayName"
              name="displayName"
              required
              minlength="2"
              maxlength="30"
              placeholder={translation?.cart?.inputs[0]?.placeholder}
            />
          </div>
          <div class="flex flex-col gap-3">
            <label for="email">{translation?.cart?.inputs[1]?.label}</label>
            <input
              class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
              autocomplete="email"
              type="email"
              id="email"
              name="email"
              required
              placeholder={translation?.cart?.inputs[1]?.placeholder}
            />
          </div>
          <div class="flex flex-col gap-3">
            <label for="phone">{translation?.cart?.inputs[2]?.label}</label>
            <input
              class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              placeholder={translation?.cart?.inputs[2]?.placeholder}
            />
          </div>

          <button
            class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-1/3 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
            type="submit"
            name="button">{translation?.main?.profile?.change}</button
          >
        </form>
      </div>
    {:else}
      <div class="products-container">
        <h2>{translation?.cart?.empty}</h2>
      </div>
    {/if}
  </div>
{/if}

<button
  class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40"
  on:click={toggleCart}
  aria-label="Close menu"
  style="outline: none;"
  class:opacity-100={isCartOpen}
  class:opacity-0={!isCartOpen}
  class:pointer-events-auto={isCartOpen}
  class:pointer-events-none={!isCartOpen}
></button>
