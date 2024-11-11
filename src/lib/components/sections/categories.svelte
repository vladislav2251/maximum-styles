<div class="bg-[var(--color-white100)] px-5 pb-5 md:w-56 max-md:grid max-md:gap-5 max-md:grid-cols-2">
    {#each categories as category}
        <Selector {category}/>
    {/each}
</div>

<script>
    import Selector from "$lib/components/sections/selector.svelte";
    import { onMount } from "svelte";
    import { getCategories } from "@/stores/main.js";
    export let categories = [];

    onMount(async () => {
        const data = await getCategories();
        if (data) {
            categories = data;
        }
    });

</script>