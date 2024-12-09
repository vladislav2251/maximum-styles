<script>
  $: menuItems = [
    { label: translation?.header?.menuItems?.home, href: '/' },
    { label: translation?.header?.menuItems?.store, href: '/products' },
    { label: translation?.header?.menuItems?.about, href: '/about' },
  ];
  export let translation;
</script>

<footer class="bg-[var(--color-white100)] p-8 sm:p-12">
  <div class="container grid grid-cols-1 sm:grid-cols-3 items-center gap-8">
    <div class="flex flex-col items-start">
      <a href="/" aria-label="Home">
        <img src="/svg/logo.svg" alt="Website Logo" class="w-48 h-24" />
      </a>
      <p class="text-[var(--color-gray200)] font-normal text-lg">
        {translation?.footer?.info?.sub_title}
      </p>
    </div>

    <nav aria-labelledby="footer-navigation" class="flex flex-col">
      <h2
        id="footer-navigation"
        class="text-[var(--color-gray200)] font-semibold text-xl mb-4"
      >
        {translation?.footer?.info?.link_title}
      </h2>
      <ul class="space-y-2">
        {#each menuItems as element}
          <li>
            <a
              class="text-[var(--color-gray200)] hover:underline text-lg"
              href={element.href}
            >
              {element.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <address class="not-italic flex flex-col">
      <h2 class="text-[var(--color-gray200)] font-semibold text-xl mb-4">
        {translation?.footer?.info?.second_link_title}
      </h2>
      <a
        href="mailto:maximumstyle@email.com"
        class="text-[var(--color-gray200)] text-lg hover:underline"
      >
        maximumstyle@email.com
      </a>
      <a
        href="tel:+123456789"
        class="text-[var(--color-gray200)] text-lg hover:underline mt-2"
      >
        +123456789
      </a>
      <ul class="flex space-x-4 mt-4">
        <li>
          <a href="/" aria-label="Facebook">
            <img src="/svg/facebook.svg" alt="Facebook" class="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="/" aria-label="Twitter">
            <img src="/svg/twitter.svg" alt="Twitter" class="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="/" aria-label="Instagram">
            <img src="/svg/insta.svg" alt="Instagram" class="w-6 h-6" />
          </a>
        </li>
      </ul>
    </address>
  </div>
</footer>
