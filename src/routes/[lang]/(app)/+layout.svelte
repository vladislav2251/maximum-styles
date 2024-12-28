<script>
  import '$lib/styles/styles.css';
  import Header from '$lib/components/layouts/header.svelte';
  import Footer from '$lib/components/layouts/footer.svelte';
  import { goto } from '$app/navigation';
  export let data;
</script>

<div class="flex flex-col min-h-screen">
  <Header translation={data.lang.file} currentLang={data.lang.code} />
  <main class="flex-grow">
    <slot />

    <button
      on:click={() => {
        goto(`/${data.lang.code}/cart`);
      }}
      class="fixed bottom-10 right-5 md:bottom-20 md:right-10 p-4 bg-[var(--color-black)] text-white rounded-full"
      aria-label="cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    </button>
  </main>
  <Footer translation={data.lang.file} currentLang={data.lang.code} />
</div>
