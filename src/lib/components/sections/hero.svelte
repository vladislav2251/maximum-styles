<script>
  export let translation;
</script>

<section
  style="background: linear-gradient(180deg, #c7c9de 33.52%, #d6dee9 79.87%);"
  class="py-12"
>
  <div class="container">
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="grid gap-4 md:gap-7">
        <h2 class="text-[var(--color-black)] font-medium text-4xl">
          {translation?.main?.hero?.title}
        </h2>

        <p class="text-[var(--color-gray200)] font-normal text-base">
          {translation?.main?.hero?.sub_title}
        </p>

        <div class="relative flex items-center md:mt-14">
          <input
            type="search"
            class="py-4 pl-14 pr-3 outline-none w-full md:w-[65%]"
          />
          <div
            class="absolute left-1.5 bg-[var(--color-violet)] w-10 h-10 flex items-center justify-center"
          >
            <img src="/svg/search.svg" alt="search icon" />
          </div>
        </div>

        <a class="max-w-fit" href="/products">
          <button
            type="button"
            class="bg-[var(--color-violet)] border border-solid border-[var(--color-gray)] px-8 py-4 flex active:scale-x-105 hover:scale-x-105 justify-between items-center transition-all duration-600 hover:bg-[var(--color-purple)]"
            >{translation?.main?.hero?.btn}</button
          >
        </a>
      </div>

      <img src="/img/bg.webp" alt="hero img" />
    </div>
  </div>
</section>
