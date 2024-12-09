<script>
  import Lang from '$lib/components/sections/lang.svelte';
  import { onMount } from 'svelte';
  import Cookies from 'js-cookie';
  import { goto } from '$app/navigation';

  export let translation;

  let isMenuOpen = false;

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

  const onProfileClick = () => {
    const token = Cookies.get('auth_token');
    if (!token || token === 'undefined' || token === null) {
      goto('/sign-in');
      return;
    }
    goto('/profile/personal');
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
  <div class="container pt-4">
    <div
      class="grid max-md:flex max-md:justify-between items-center md:grid-cols-3"
    >
      <a class="max-w-fit max-sm:w-24" href="/">
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
      <div
        class="flex items-center gap-3 sm:gap-6 max-xl:justify-end justify-between"
      >
        <div class="flex items-center gap-3 sm:gap-6">
          <a aria-label="phone" href="tel:+79991234567">
            <div class="flex items-center gap-2">
              <svg
                width="20"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1090_1304)">
                  <path
                    d="M23.7091 18.584C23.0949 17.9445 22.3541 17.6026 21.569 17.6026C20.7902 17.6026 20.0431 17.9382 19.4036 18.5777L17.4027 20.5722C17.2381 20.4835 17.0735 20.4012 16.9152 20.3189C16.6873 20.2049 16.472 20.0973 16.2884 19.9833C14.4142 18.793 12.7109 17.2417 11.0774 15.2345C10.2859 14.2341 9.75404 13.392 9.36781 12.5372C9.88701 12.0624 10.3682 11.5685 10.8368 11.0936C11.0141 10.9163 11.1913 10.7327 11.3686 10.5554C12.6983 9.22576 12.6983 7.50353 11.3686 6.17388L9.64007 4.44532C9.44379 4.24904 9.24117 4.04642 9.05122 3.84381C8.67132 3.45124 8.27242 3.04601 7.86086 2.66611C7.24669 2.05827 6.51221 1.73535 5.73974 1.73535C4.96727 1.73535 4.22013 2.05827 3.58696 2.66611C3.58063 2.67244 3.58063 2.67244 3.5743 2.67878L1.42152 4.85055C0.61106 5.66101 0.148846 6.64876 0.0475384 7.79479C-0.104423 9.64365 0.440104 11.3659 0.857997 12.4929C1.88373 15.2599 3.41601 17.8242 5.70175 20.5722C8.47504 23.8837 11.8118 26.4986 15.6235 28.3412C17.0798 29.0313 19.0237 29.8481 21.1954 29.9874C21.3284 29.9938 21.4677 30.0001 21.5943 30.0001C23.057 30.0001 24.2853 29.4746 25.2477 28.4298C25.2541 28.4172 25.2667 28.4108 25.2731 28.3982C25.6023 27.9993 25.9822 27.6384 26.3811 27.2521C26.6534 26.9925 26.932 26.7203 27.2042 26.4353C27.8311 25.7832 28.1603 25.0234 28.1603 24.2446C28.1603 23.4594 27.8247 22.706 27.1852 22.0728L23.7091 18.584ZM25.9759 25.2513C25.9695 25.2513 25.9695 25.2576 25.9759 25.2513C25.7289 25.5172 25.4757 25.7578 25.2034 26.0238C24.7918 26.4163 24.3739 26.8279 23.9814 27.2901C23.3419 27.9739 22.5884 28.2969 21.6007 28.2969C21.5057 28.2969 21.4044 28.2969 21.3094 28.2905C19.4289 28.1702 17.6813 27.4357 16.3707 26.8089C12.7869 25.074 9.64007 22.611 7.02508 19.4895C4.86597 16.8871 3.42234 14.4811 2.46625 11.8977C1.8774 10.3211 1.66212 9.09279 1.7571 7.93409C1.82042 7.19328 2.10534 6.57911 2.63087 6.05358L4.78999 3.89446C5.10024 3.6032 5.42949 3.44491 5.7524 3.44491C6.1513 3.44491 6.47422 3.68552 6.67683 3.88813C6.68317 3.89446 6.6895 3.90079 6.69583 3.90713C7.08206 4.26803 7.4493 4.6416 7.83554 5.0405C8.03182 5.24312 8.23443 5.44573 8.43705 5.65468L10.1656 7.38323C10.8368 8.05439 10.8368 8.6749 10.1656 9.34606C9.98198 9.52968 9.8047 9.7133 9.62108 9.89059C9.08921 10.4351 8.58268 10.9417 8.03182 11.4355C8.01915 11.4482 8.00649 11.4545 8.00016 11.4672C7.45563 12.0117 7.55694 12.5436 7.67091 12.9045C7.67724 12.9235 7.68357 12.9425 7.68991 12.9615C8.13946 14.0505 8.77263 15.0763 9.73505 16.2983L9.74138 16.3046C11.4889 18.4574 13.3315 20.1353 15.3639 21.4206C15.6235 21.5852 15.8895 21.7182 16.1427 21.8448C16.3707 21.9588 16.586 22.0665 16.7696 22.1804C16.7949 22.1931 16.8202 22.2121 16.8456 22.2248C17.0608 22.3324 17.2634 22.383 17.4724 22.383C17.9979 22.383 18.3272 22.0538 18.4348 21.9462L20.6003 19.7807C20.8155 19.5654 21.1574 19.3058 21.5563 19.3058C21.9489 19.3058 22.2718 19.5528 22.4681 19.768C22.4744 19.7744 22.4744 19.7744 22.4808 19.7807L25.9695 23.2695C26.6217 23.9153 26.6217 24.5801 25.9759 25.2513Z"
                    fill="#1E1E1E"
                    fill-opacity="0.792157"
                  />
                  <path
                    d="M16.2124 7.13611C17.8713 7.4147 19.3782 8.19983 20.5813 9.40286C21.7843 10.6059 22.5631 12.1128 22.848 13.7717C22.9176 14.1896 23.2786 14.4809 23.6901 14.4809C23.7408 14.4809 23.7851 14.4746 23.8357 14.4682C24.3043 14.3922 24.6145 13.949 24.5386 13.4805C24.1967 11.4733 23.2469 9.64346 21.7969 8.1935C20.347 6.74354 18.5171 5.79379 16.51 5.45187C16.0414 5.37589 15.6045 5.68615 15.5222 6.14836C15.4399 6.61058 15.7438 7.06013 16.2124 7.13611Z"
                    fill="#1E1E1E"
                    fill-opacity="0.792157"
                  />
                  <path
                    d="M29.9654 13.2336C29.4019 9.92848 27.8443 6.92092 25.4509 4.52754C23.0575 2.13415 20.05 0.576553 16.7448 0.0130316C16.2826 -0.0692806 15.8457 0.247305 15.7634 0.709519C15.6874 1.17807 15.9977 1.61495 16.4662 1.69727C19.4168 2.19747 22.1078 3.59678 24.2479 5.73056C26.388 7.87068 27.781 10.5617 28.2812 13.5122C28.3508 13.9301 28.7117 14.2214 29.1233 14.2214C29.1739 14.2214 29.2183 14.215 29.2689 14.2087C29.7311 14.1391 30.0477 13.6958 29.9654 13.2336Z"
                    fill="#1E1E1E"
                    fill-opacity="0.792157"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1090_1304">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h2 class="font-medium text-black text-sm max-xl:hidden">
                +79991234567
              </h2>
            </div>
          </a>
          <a aria-label="email" href="mailto:mail@mail.com">
            <div class="flex items-center gap-2">
              <svg
                height="20"
                width="30"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
                ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g><g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        style="fill:#231F20;"
                        d="M425.367,72.125H86.633C38.752,72.125,0,111.131,0,158.759v194.482 c0,47.839,38.98,86.633,86.633,86.633h338.734c47.741,0,86.633-38.888,86.633-86.633V158.759 C512,111.069,473.187,72.125,425.367,72.125z M425.367,110.411c9.804,0,18.928,2.942,26.556,7.976l-184.231,120.58 c-7.102,4.649-16.282,4.649-23.386,0l-184.23-120.58C76.732,107.394,58.236,110.411,425.367,110.411z M39.03,150.368 l126.776,82.975L38.286,350.222C38.286,142.169,37.967,156.414,39.03,150.368z M425.367,401.589H86.633 c-12.865,0-24.563-5.061-33.235-13.284l145.463-133.326c59.59,39.003,66.629,31.186,114.278,0l145.463,133.326 C449.931,396.528,438.232,401.589,425.367,401.589z M473.716,350.222l-127.52-116.879l126.776-82.975 C474.035,156.414,473.716,142.206,473.716,350.222z"
                      ></path>
                    </g>
                  </g>
                </g></svg
              >
              <h2 class="font-medium text-black text-sm max-xl:hidden">
                mail@mail.com
              </h2>
            </div>
          </a>
        </div>
        <div class="flex gap-3 items-center sm:gap-6">
          <Lang {translation} />

          <button type="button" on:click={onProfileClick} aria-label="Profile">
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
