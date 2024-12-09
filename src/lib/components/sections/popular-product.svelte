<script>
  export let translation;
  export let img;
  export let label;
  export let description;
  export let price;
</script>

<li class="border border-solid border-[var(--color-gray)]">
  <div class="overflow-hidden">
    <img
      class="transition-all duration-500 hover:scale-105 w-full object-cover"
      src={img}
      alt={label}
      loading="lazy"
    />
  </div>
  <div class="p-[32px_24px]">
    <h2 class="text-[var(--color-gray800)] font-medium text-4xl">{label}</h2>
    <p class="text-[var(--color-gray200)] font-normal text-xl">{description}</p>
    <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <a
        href="/products"
        class="bg-[var(--color-violet)] text-black px-8 py-4 text-nowrap text-center self-center border border-solid border-[var(--color-gray)] transition-all duration-300 hover:bg-[var(--color-purple)] focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {translation?.main?.popular_product?.buy_now}
      </a>
      <a
        href="/cart"
        class="bg-[var(--color-white)] text-[var(--color-gray800)] text-nowrap text-center self-center px-8 py-4 border border-solid border-[var(--color-gray)] transition-all duration-300 hover:bg-[var(--color-white200)] focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {translation?.main?.popular_product?.add_to_cart}
      </a>
      <span
        class="self-center place-self-end text-[var(--color-gray800)] font-semibold text-3xl"
        >${price}</span
      >
    </div>
  </div>
</li>
