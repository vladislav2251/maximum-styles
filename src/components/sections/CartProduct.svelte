<style>
    h2 {
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>

<script>
    export let img;
    export let label;
    export let price;
    export let oldPrice;

    import Quantity from "./Quantity.svelte";
</script>

<div class="grid sm:grid-cols-1 max-lg:grid-cols-4 place-items-center py-2 md:p-4 md:gap-10 border-b border-solid border-[var(--color-gray)] items-center">
    <img  class="" src={img} alt={label}>
    
    <div class="flex sm:flex-col md:items-center gap-5 justify-start">
        <h2 class="text-[var(--color-gray) fomt-base text-lg">{label}</h2>
        <Quantity />
        
        <div class="flex gap-5 items-center justify-between">
            
        </div>
    </div>
    <div class="flex flex-col items-start">
        <p class="text-2xl font-medium">{price}</p>
        <p class="text-xl font-normal text-[var(--color-gray) line-through">{oldPrice}</p>
    </div>
    <img class="w-5 items-start" src="/svg/close.svg" alt="close icon">
</div>