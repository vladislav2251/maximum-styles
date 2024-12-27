<script>
  import SideBar from '$lib/components/sections/profile/sidebar.svelte';
  import { languageStore } from '$lib/context/languageStore';
</script>

<section class="flex flex-col lg:flex-row gap-4 w-full p-[40px_16px]">
  <SideBar
    translation={$languageStore.langFile}
    currentLang={$languageStore.currentLang}
  />
  <slot />
</section>
