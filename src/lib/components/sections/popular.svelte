<script>
  import PopularProduct from '$lib/components/sections/popular-product.svelte';
  export let translation;
  const cardsinfo = [
    {
      img: '/img/largeCard.webp',
      label: 'Ala Factor',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: '120',
    },
    {
      img: '/img/largeCard2.webp',
      label: 'Vita Force',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: '120',
    },
  ];
</script>

<section class="py-12">
  <div class="container">
    <div
      class="grid md:grid-cols-2 md:grid-rows-2 gap-4 max-md:place-items-start"
    >
      <h2
        class="text-[var(--color-black)] order-1 font-medium text-4xl md:text-6xl"
      >
        {translation?.main?.popular?.title}
      </h2>
      <p
        class="text-[var(color-gray200)] font-normal order-2 md:order-3 text-xl"
      >
        {translation?.main?.popular?.description}
      </p>
      <a
        href="/products"
        class="order-3 md:order-2 flex underline text-2xl row-span-2 text-[var(--color-gray800)] gap-2 md:gap-4 items-center md:justify-end font-medium"
      >
        {translation?.main?.popular?.link}
        {'→'}
      </a>
    </div>
    <ul class="flex justify-center gap-5">
      {#each cardsinfo as card}
        <PopularProduct
          {translation}
          img={card.img}
          label={card.label}
          description={card.description}
          price={card.price}
        />
      {/each}
    </ul>
  </div>
</section>
