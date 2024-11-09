<script>
    import MiniCard from "$lib/components/sections/mini-card.svelte";
    export let translation;

    // const infoCards = [
    //       { img: '/img/miniCard.webp', label: "Ala Factor JeuDerm Expert", price: "250" },
    //       { img: '/img/miniCard.webp', label: "Ala Factor JeuDerm Expert", price: "250" },
    //       { img: '/img/miniCard.webp', label: "Ala Factor JeuDerm Expert", price: "250" },
    //       { img: '/img/miniCard.webp', label: "Milk Shine Bright 430 Freckle Stars", price: "250" },
    //   ]

    export let products;
  </script>

  <section class= "py-12 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-y-8">
      {#each products as product}
          <MiniCard
              {translation}
              {product}
          />
      {/each}
  </section>