<script>
  $: menuItems = [
    { label: translation?.header?.menuItems?.home, href: '/' },
    { label: translation?.header?.menuItems?.store, href: '/products' },
    { label: translation?.header?.menuItems?.about, href: '/about' },
  ];
  export let translation;
</script>

<section class="py-12 bg-[var(--color-white100)]">
  <div class="container">
    <div class="flex max-lg:flex-col lg:justify-between max-lg:gap-5">
      <!-- <h2 class="text-[var(--color-gray800)] font-medium text-4xl">
        {translation?.footer?.info?.title}
      </h2>

      <form class="flex">
        <input
          type="email"
          required
          autocomplete="email"
          name="input"
          id="email"
          placeholder={translation?.footer?.info?.placeholder}
          class="px-8 py-4 max-md:w-full cursor-pointer outline-none"
        />
        <button
          type="submit"
          name="button"
          class="px-8 py-4 justify-center flex items-center bg-[var(--color-black)] text-[var(--color-white)] hover:bg-[var(--color-gray800)] transition-all duration-300 hover:scale-x-105"
          >{translation?.footer?.info?.btn}</button
        >
      </form>
    </div>
    <div class="py-12">
      <hr class="border border-[var(--color-gray)]" />
    </div> -->
    <div
      class="grid md:grid-cols-3 max-md:gap-5 items-center md:place-items-center"
    >
      <div class="flex flex-gap gap-5">
        <a href="/">
          <img src="/svg/logo.svg" alt="logo icon" />

          <p class="text-[var(--color-gray200)] font-normal text-xl">
            {translation?.footer?.info?.sub_title}
          </p>
        </a>
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-[var(--color-gray200)] font-normal text-2xl">
          {translation?.footer?.info?.link_title}
        </p>

        <div class="flex flex-col gap-4">
          {#each menuItems as element}
            <a class="underline" href={element.href}>
              {element.label}
            </a>
          {/each}
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-[var(--color-gray200)] font-normal text-2xl">
          {translation?.footer?.info?.second_link_title}
        </p>

        <a href="mailto:maximumstyle@email.com">maximumstyle@email.com</a>
        <a href="tel:+123456789">+123456789</a>
        <div class="flex gap-4">
          <a href="/">
            <img src="/svg/facebook.svg" alt="facebook icon" />
          </a>
          <a href="/">
            <img src="/svg/twitter.svg" alt="twitter icon" />
          </a>
          <a href="/">
            <img src="/svg/insta.svg" alt="insta icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
