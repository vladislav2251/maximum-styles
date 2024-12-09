<script>
  export let translation;
</script>

<section class="py-12 bg-[var(--color-purple)]">
  <ul class="container grid max-md:gap-8 md:grid-cols-3 place-items-center">
    <li><img src="/svg/jeuDerm.svg" alt="jeuDerm icon" /></li>
    <li><img src="/svg/logo.svg" alt="logo icon" /></li>

    <li class="flex flex-col items-center gap-2 md:gap-1 cursor-default">
      <h2 class="text-[var(--color-gray800)] text-3xl font-bold">
        {translation?.main?.cooperation?.name_surname}
      </h2>
      <hr class="border border-[var(--color-gray800)] w-14" />
      <p class="text-[var(--color-gray200)] font-normal text-lg">
        {translation?.main?.cooperation?.job_title}
      </p>
    </li>
  </ul>
</section>
