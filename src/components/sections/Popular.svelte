<script>
    import PopularProduct from "/src/components/sections/PopularProduct.svelte";
    export let translation;
    const cardsinfo = [
        { img: "/img/largeCard.webp", label: "Ala Factor", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: "120" },
        { img: "/img/largeCard2.webp", label: "Vita Force", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: "120" },
    ]
</script>

<section class="py-12">
    <div class="container">
        <div class="grid md:grid-cols-2 max-md:gap-5 max-md:place-items-start">
            <div class="flex flex-col gap-4 md:gap-6">
                <h2 class="text-[var(--color-black)] font-medium text-4xl  md:text-6xl">{translation?.main?.popular?.title}</h2>
                <p class="text-[var(color-gray200)] font-normal text-xl">{translation?.main?.popular?.description}</p>
            </div>

            <div class="flex gap-2 md:gap-4 items-center md:justify-end">
                <a href="/products">
                    <p class="underline text-2xl font-medium text-[var(--color-gray800)]">{translation?.main?.popular?.link}</p>
                </a>
                <img src="/svg/arrowRight.svg" alt="arrow icon">
            </div>
        </div>
        <div class="mt-12 gap-5 grid md:grid-cols-2 place-items-center">
            {#each cardsinfo as card}
                <PopularProduct
                    img={card.img}
                    label={card.label}
                    description={card.description}
                    price={card.price}
                />
            {/each}
        </div>
    </div>
</section>