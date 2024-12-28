<script>
  import '$lib/styles/styles.css';
  import Menu from '$lib/components/admin/Menu.svelte';
  export let data;
  let translation = data.lang.file;
</script>

<svelte:head>
  <title>{translation?.dashboard?.title}</title>
</svelte:head>

<div class="container">
  <Menu {translation} currentLang={data.lang.code} />

  <slot />
</div>
