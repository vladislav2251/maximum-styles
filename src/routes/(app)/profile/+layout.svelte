<script>
  import SideBar from '$lib/components/sections/profile/sidebar.svelte';
  import { language } from '$lib/context/store.js';

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }
</script>

<section class="flex flex-col lg:flex-row gap-4 w-full p-[40px_16px]">
  <SideBar {translation} />
  <slot />
</section>
