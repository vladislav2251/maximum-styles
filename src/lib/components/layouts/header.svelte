<script>
  import Lang from '$lib/components/sections/lang.svelte';
  import AuthModal from '$lib/components/auth.svelte';
  import { onMount } from 'svelte';

  export let translation;

  let isMenuOpen = false;
  let isModalOpen = false;

  $: menuItems = [
    { label: translation?.header?.menuItems?.home, href: '/' },
    { label: translation?.header?.menuItems?.store, href: '/products' },
    { label: translation?.header?.menuItems?.about, href: '/about' },
  ];

  let resizeTimeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth > 1024) closeMenu();
    }, 150);
  };

  const toggleOverflow = (state) => {
    document.body.style.overflow = state ? 'hidden' : 'auto';
  };

  const toggleModal = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.logged !== null) {
      window.location.href = 'profile';
    } else {
      isModalOpen = !isModalOpen;
      toggleOverflow(isModalOpen);
    }
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    toggleOverflow(isMenuOpen);
    window.addEventListener('resize', handleResize);
  };

  const closeMenu = () => {
    isMenuOpen = false;
    toggleOverflow(false);
    window.removeEventListener('resize', handleResize);
  };

  onMount(() => () => window.removeEventListener('resize', handleResize));
</script>

<header
  class="grid items-center md:items-start w-full bg-[var(--color-violet)]"
  id="header"
>
  <div class="container">
    <div class="grid grid-cols-2 md:grid-cols-3">
      <a class="max-w-fit" href="/">
        <img src="/svg/logo.svg" alt="logo" loading="lazy" />
      </a>
      <div class="hidden md:flex justify-center items-center">
        {#each menuItems as element}
          <li class="relative group">
            <a
              href={element.href}
              class="px-2.5 flex items-center"
              aria-label={element.label}>{element.label}</a
            >
            <span
              class="absolute left-0 top-[22px] h-[2px] w-0 bg-black rounded transition-all duration-500 group-active:w-3/4 group-hover:w-full"
            ></span>
          </li>
        {/each}
      </div>
      <div class="flex items-center justify-end gap-4 md:gap-6">
        <Lang {translation} />

        <button type="button" on:click={toggleModal} aria-label="Profile">
          <img src="/svg/profile.svg" alt="profile icon" loading="lazy" />
        </button>
        <button
          type="button"
          class="md:hidden"
          on:click={toggleMenu}
          aria-label="Menu"
        >
          <img
            class="w-[24px]"
            src="/svg/burger.svg"
            alt="burger"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  </div>
</header>

<div
  class="w-full md:hidden flex flex-col transition-all z-30 duration-300 bg-white border-l fixed top-0 right-0 bottom-0 sm:w-[350px]"
  class:is-open={isMenuOpen}
  class:translate-x-full={!isMenuOpen}
>
  <div
    class="flex items-center justify-end p-4 border-b border-[var(--color-gray)]"
  >
    <button type="button" on:click={toggleMenu} aria-label="Close menu">
      <img class="w-[24px]" src="/svg/close.svg" alt="close" loading="lazy" />
    </button>
  </div>

  <div class="grid items-center place-items-center place-content-center gap-8">
    {#each menuItems as element}
      <li class="relative group">
        <a
          href={element.href}
          class="px-4 flex items-center"
          aria-label={element.label}
          on:click={closeMenu}
        >
          {element.label}
        </a>
        <span
          class="absolute left-0 top-[22px] h-[2px] w-0 bg-black rounded transition-all duration-500 group-active:w-3/4 group-hover:w-3/4"
        ></span>
      </li>
    {/each}
  </div>
</div>

<AuthModal
  {translation}
  {isModalOpen}
  closeModal={() => {
    isModalOpen = false;
    toggleOverflow(false);
  }}
/>

<button
  class="fixed lg:hidden inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-20 cursor-default"
  on:click={toggleMenu}
  tabindex="0"
  class:opacity-100={isMenuOpen}
  class:opacity-0={!isMenuOpen}
  class:pointer-events-auto={isMenuOpen}
  class:pointer-events-none={!isMenuOpen}
  aria-label="Close menu overlay"
>
</button>
