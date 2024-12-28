<script>
  import '$lib/styles/styles.css';
  import Header from '$lib/components/layouts/header.svelte';
  import Footer from '$lib/components/layouts/footer.svelte';
  export let data;
</script>

<div class="flex flex-col min-h-screen">
  <Header translation={data.lang.file} currentLang={data.lang.code} />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer translation={data.lang.file} currentLang={data.lang.code} />
</div>
