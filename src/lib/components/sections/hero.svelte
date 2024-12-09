<script>
  export let translation;
</script>

<section class="py-12 bg-gradient-to-b from-[#C8CBDF] to-[#D7DFEB]">
  <div class="container grid grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col items-start justify-center gap-4">
      <h2 class="text-[var(--color-black)] font-medium text-4xl">
        {translation?.main?.hero?.title}
      </h2>

      <p
        class="text-[var(--color-gray200)] font-normal text-base max-w-[500px]"
      >
        {translation?.main?.hero?.sub_title}
      </p>
    </div>

    <img src="/img/bg.webp" alt="hero img" loading="eager" />
  </div>
</section>
