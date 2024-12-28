<script>
  import SideBar from '$lib/components/sections/profile/sidebar.svelte';
  export let data;
</script>

<section class="flex flex-col lg:flex-row gap-4 w-full p-[40px_16px]">
  <SideBar translation={data.lang.file} currentLang={data.lang.code} />
  <slot />
</section>
