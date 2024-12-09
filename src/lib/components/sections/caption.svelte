<script>
  export let translation;
</script>

<section class="py-12">
  <div class="container flex justify-center items-center gap-4">
    <h2
      class="text-[var(--color-gray100)] font-normal text-lg md:text-2xl uppercase"
    >
      {translation?.main?.caption?.caption}
    </h2>
    <img src="/img/cup.webp" alt="cup img" />
  </div>
</section>
