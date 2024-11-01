<script>
    import MiniCard from "/src/components/sections/MiniCard.svelte";
    const infoCards = [
          { img: '/img/miniCard.webp', label: "Ala Factor JeuDerm Expert", price: "250" },
          { img: '/img/miniCard.webp', label: "Ala Factor JeuDerm Expert", price: "250" },
          { img: '/img/miniCard.webp', label: "Ala Factor JeuDerm Expert", price: "250" },
          { img: '/img/miniCard.webp', label: "Milk Shine Bright 430 Freckle Stars", price: "250" },
      ]
  </script>
  <section class= "py-12 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-y-8">
      {#each infoCards as card}
          <MiniCard
              img={card.img}
              label={card.label}
              price={card.price}
          />
      {/each}
  </section>