<div class="bg-[var(--color-white100)] px-5 pb-5 md:w-56 max-md:grid max-md:gap-5 max-md:grid-cols-2">
    <Selector 
        label="Крем"
        id="1"
        selectedOption="крем"
        options={options}
    />
    <Selector 
        label="Масло"
        id="2"
        selectedOption="не крем"
        options={options}
    />
</div>

<script>
    import Selector from "$lib/components/sections/selector.svelte";
    
    export let translation;

    $:options = [
        translation?.main?.categories?.title
    ]
</script>