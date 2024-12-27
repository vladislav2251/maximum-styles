<script>
  import { languageStore } from '$lib/context/languageStore';
  import '$lib/styles/styles.css';
  import Header from '$lib/components/layouts/header.svelte';
  import Footer from '$lib/components/layouts/footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Header
    translation={$languageStore.langFile}
    currentLang={$languageStore.currentLang}
  />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer
    translation={$languageStore.langFile}
    currentLang={$languageStore.currentLang}
  />
</div>
