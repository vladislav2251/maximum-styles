<script>
  import { language } from '$lib/context/store.js';
  import '$lib/styles/styles.css';
  import Header from '$lib/components/layouts/header.svelte';
  import Footer from '$lib/components/layouts/footer.svelte';

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }
</script>

<div class="flex flex-col min-h-screen">
  <Header {translation} />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer {translation} />
</div>
