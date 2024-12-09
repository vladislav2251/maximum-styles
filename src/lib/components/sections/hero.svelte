<script>
  export let translation;
</script>

<section
  style="background: linear-gradient(180deg, #c7c9de 33.52%, #d6dee9 79.87%);"
  class="py-12"
>
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
