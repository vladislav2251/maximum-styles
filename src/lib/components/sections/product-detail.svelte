<script>
  import * as FancyboxModule from '@fancyapps/ui';
  import '@fancyapps/ui/dist/fancybox/fancybox.css';
  import { onMount } from 'svelte';
  import { language } from '$lib/context/store.js';
  import Quantity from '$lib/components/sections/quantity.svelte';
  import { addProduct } from '@stores/main';

  export let product;
  export let account;
  export let translation;

  let currentLang;
  language.subscribe((lang) => {
    currentLang = lang.code;
  });

  const { Fancybox } = FancyboxModule;
  onMount(() => {
    Fancybox.bind('[data-fancybox]', {});
  });

  let quantity = 1;
  let account_id = account?._id ? account._id : null;

  function handleQuantityChange(newQuantity) {
    quantity = newQuantity;
  }
</script>

<section class="py-12 container" id={product._id}>
  <div class="grid lg:grid-cols-2 gap-8">
    <div class="flex gap-5">
      <div class="grid max-md:hidden gap-5">
        {#each product.photos as photo}
          <a data-fancybox="gallery" data-caption="Caption #1" href={photo}>
            <img
              src={photo}
              alt="jopa"
              class="hover:scale-105 transition-all duration-500"
            />
          </a>
        {/each}
      </div>
      <a
        data-fancybox
        data-caption="Single image"
        class="max-md:justify-center w-full flex overflow-hidden"
        href={product.photo}
      >
        <img
          src={product.photo}
          alt={product.name}
          class="hover:scale-105 max-h-96 w-full object-contain transition-all duration-500"
        />
      </a>
    </div>

    <div class="grid gap-5">
      <h1 class="font-bold text-[var(--color-black)] text-2xl md:text-4xl">
        {product.name}
      </h1>
      <div class="flex max-md:flex-col md:items-center gap-8">
        <p class="text-[var(--color-gray100)] text-md font-medium">
          {translation?.main?.product_detail?.article}
          {product._id}
        </p>
        <!-- <p class="text-[var(--color-black)] text-md font-medium">{bestseller}</p> -->
        <!-- <p class="text-[var(--color-black)] text-md font-medium">{last}</p> -->
      </div>
      <div class="py-4">
        <hr />
      </div>
      <div class="flex gap-3 items-center md:gap-5">
        <p class="line-through text-2xl font-normal text-[var(--color-gray)]">
          {product.price.discount.regular ? product.price.regular + ' $' : null}
        </p>
        <h2 class="text-[var(--color-black)] text-4xl font-bold">
          {product.price.discount.regular
            ? product.price.regular * (1 - product.price.discount.regular / 100)
            : product.price.regular} $
        </h2>

        <Quantity bind:quantity max={25} onChange={handleQuantityChange} />
      </div>
      <div class="py-8">
        <button
          on:click={(e) => {
            e.stopPropagation();
            if (account_id === null) {
              console.log('please login or register');
              return;
            }
            addProduct({
              account_id,
              product_id: product._id,
              amount: quantity,
            });
          }}
          type="button"
          class="bg-[var(--color-violet)] py-4 px-6 active:scale-x-105 hover:scale-x-105 md:py-5 md:px-10 uppercase shadow-sm flex justify-center items-center text-[var(--color-white)] font-bold text-md md:text-2xl hover:bg-[var(--color-purple)] transition-all duration-300"
        >
          {translation?.main?.product_detail?.add_to_cart}
        </button>
      </div>
      <div class="grid gap-5">
        <h2 class="text-[var(--color-black)] text-2xl font-bold">
          {translation?.main?.product_detail?.info}:
        </h2>
        <p class="text-[var(--color-gray100)] text-md md:text-xl font-medium">
          {@html product.description.detail[currentLang]}
        </p>
      </div>
    </div>
  </div>
</section>
