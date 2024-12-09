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
    <div class="grid md:grid-cols-2 gap-10 max-md:place-items-start">
      <h2 class="text-[var(--color-black)] font-medium text-4xl md:text-6xl">
        {translation?.main?.popular?.title}
      </h2>
      <p class="text-[var(color-gray200)] font-normal text-xl">
        {translation?.main?.popular?.description}
      </p>
      <a
        href="/products"
        class="flex underline text-2xl row-span-2 text-[var(--color-gray800)] gap-2 md:gap-4 items-center md:justify-end font-medium"
      >
        {translation?.main?.popular?.link}
        {'→'}
      </a>
    </div>
    <div class="mt-12 gap-5 grid md:grid-cols-2 place-items-center">
      {#each cardsinfo as card}
        <PopularProduct
          {translation}
          img={card.img}
          label={card.label}
          description={card.description}
          price={card.price}
        />
      {/each}
    </div>
  </div>
</section>
