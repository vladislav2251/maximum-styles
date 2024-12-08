<script>
  export let translation;

  $: links = [
    { href: '/profile/personal', label: translation?.main?.profile?.link },
    {
      href: '/profile/delivery',
      label: translation?.main?.profile?.delivery_info,
    },
    {
      href: '/profile/company',
      label: translation?.main?.profile?.company_information,
    },
    {
      href: '/profile/specialist',
      label: translation?.main?.profile?.specialist_information,
    },
  ];
</script>

<aside class="flex flex-col gap-3 w-full lg:w-1/5">
  <h2 class="text-2xl font-medium">
    {translation?.main?.profile?.my_account}
  </h2>

  <hr class="w-full" />

  <ul class="flex flex-col gap-3 w-full">
    {#each links as link}
      <a
        href={link.href}
        class="py-3 px-3 w-full text-left flex items-center hover:bg-[var(--color-white100)] rounded-sm transition-all duration-300"
      >
        {link.label}
      </a>
    {/each}
  </ul>
</aside>
