<script>
  export let translation;
</script>

<section class="py-12">
  <div class="container grid md:grid-cols-2 gap-5 items-center">
    <div class="flex flex-col gap-5">
      <h2 class="text-[var(--color-black)] font-medium text-3xl md:text-4xl">
        {translation?.main?.about?.title}
      </h2>
      <p class="text-[var(--color-gray200)] font-normal text-xl">
        {translation?.main?.about?.sub_title}
      </p>

      <a href="/store">
        <button
          type="button"
          class="bg-[var(--color-violet)] px-8 py-4 flex justify-center items-center border border-solid border-[var(--color-gray)] active:scale-x-105 hover:scale-x-105 transition-all duration-300 max-md:w-full hover:bg-[var(--color-purple)]"
          >{translation?.main?.about?.btn}</button
        >
      </a>
    </div>

    <div class="overflow-hidden">
      <img
        class="max-md:mx-auto transition-all duration-500 hover:scale-105"
        src="/img/anastasia.webp"
        alt="anastasia img"
      />
    </div>
  </div>
</section>
