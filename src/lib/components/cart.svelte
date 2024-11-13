<script>
  import {
    cartStore,
    toggleCart,
    removeProductFromCart,
  } from '$lib/context/cart.js';
  import Quantity from '$lib/components/sections/quantity.svelte';
  import { fly } from 'svelte/transition';

  export let translation;

  // Автоматично підписуємось на store `cartStore`
  $: items = $cartStore.items;
  $: isCartOpen = $cartStore.isCartOpen;
  $: total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  $: totalSale = items.reduce(
    (acc, item) => acc + item.sale * item.quantity,
    0
  );
  $: vat = (total * 0.2).toFixed(2);

  function handleRemove(item) {
    removeProductFromCart(item.id);
  }
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

    {#if items.length > 0}
      <div class="flex flex-col gap-5">
        <div class="flex justify-between mb-5">
          <button on:click={toggleCart} type="button"
            >{translation?.cart?.back}</button
          >
          <button type="button">{translation?.cart?.restore}</button>
        </div>

        <div class="flex max-md:flex-col gap-5">
          <div class="max-h-[300px] overflow-x-hidden overflow-scroll w-full">
            {#each items as { id, photo, name, price, sale, quantity }, index}
              <div
                class="flex items-center max-sm:flex-col max-sm:gap-5 justify-between md:grid md:grid-cols-5"
              >
                <button
                  class="sm:hidden grid place-content-end w-full"
                  type="button"
                  on:click={() => handleRemove({ id })}>✕</button
                >
                <img src={photo} alt={name} />
                <h2 class="text-base">{name}</h2>
                <Quantity
                  {quantity}
                  onChange={(newQuantity) => updateQuantity(index, newQuantity)}
                />
                <div class="flex sm:flex-col gap-2 items-center">
                  <p class="text-xl">${price * quantity}</p>
                  <p class="text-base text-[var(--color-gray100)] line-through">
                    ${sale * quantity}
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
              >{translation?.cart?.btn}</button
            >
          </div>
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
  class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40"
  on:click={toggleCart}
  aria-label="Close menu"
  style="outline: none;"
  class:opacity-100={isCartOpen}
  class:opacity-0={!isCartOpen}
  class:pointer-events-auto={isCartOpen}
  class:pointer-events-none={!isCartOpen}
></button>
