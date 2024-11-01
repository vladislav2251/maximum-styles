<section class="bg-[var(--color-violet)] py-12">
    <div class="container grid md:grid-cols-3 place-items-center max-md:gap-10">
        <div class="flex flex-col gap-4 items-center">
            <h2 class="text-[var[(--color-gray-800)] text-5xl md:text-6xl underline font-bold">100%</h2>
            <p class="text-[var[(--color-gray-200)] font-normal text-2xl">{translation?.main?.achievements?.organic_products}</p>
        </div>
        <div class="flex flex-col gap-4 items-center">
            <h2 class="text-[var[(--color-gray-800)] text-5xl md:text-6xl underline font-bold">100k+</h2>
            <p class="text-[var[(--color-gray-200)] font-normal text-2xl">{translation?.main?.achievements?.annual_sales}</p>
        </div>
        <div class="flex flex-col gap-4 items-center">
            <h2 class="text-[var[(--color-gray-800)] text-5xl md:text-6xl underline font-bold">10k+</h2>
            <p class="text-[var[(--color-gray-200)] font-normal text-2xl">{translation?.main?.achievements?.satisfield_customers}</p>
        </div>
    </div>
</section>
<script>
    export let translation;
</script>