<script>
  import { languageStore } from '$lib/context/languageStore';
  import '$lib/styles/styles.css';
  import Menu from '$lib/components/admin/Menu.svelte';
  $: translation = $languageStore.langFile;
</script>

<svelte:head>
  <title>{translation?.dashboard?.title}</title>
</svelte:head>

<div class="container">
  <Menu {translation} currentLang={$languageStore.currentLang} />

  <slot />
</div>
