<script>
  export let translation;

  let cardsinfo = [
    {
      heading: '100%',
      description: translation?.main?.achievements?.organic_products,
    },
    {
      heading: '100k+',
      description: translation?.main?.achievements?.annual_sales,
    },
    {
      heading: '10k+',
      description: translation?.main?.achievements?.satisfield_customers,
    },
  ];
</script>

<section class="bg-[var(--color-violet)] py-12">
  <ul class="container grid md:grid-cols-3 place-items-center max-md:gap-10">
    {#each cardsinfo as card}
      <li class="flex flex-col items-center">
        <h2
          class="text-[var(--color-gray800)] text-5xl md:text-6xl underline font-bold"
        >
          {card.heading}
        </h2>
        <p class="text-[var(--color-gray200)] font-normal text-2xl">
          {card.description}
        </p>
      </li>
    {/each}
  </ul>
</section>
