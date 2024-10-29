<script>
    import { fly } from 'svelte/transition';
    import CartProduct from './CartProduct.svelte';

    export let isOpen;
    export let onClose;

    const info = [
        { img: "/img/miniCard.webp", label: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018", price: "435$",  oldPrice: "522$"},
        { img: "/img/miniCard.webp", label: "Trek Fx 3 Disc Dnister Black HYBD 2022", price: "328$"},
        { img: "/img/miniCard.webp", label: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018", price: "435$",  oldPrice: "522$"},
        { img: "/img/miniCard.webp", label: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018", price: "435$",  oldPrice: "522$"},
    ]
</script>

{#if isOpen}
    <div
        class="bg-white relative  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-[22px] w-[91.666667%] max-w-[1052px] z-50 flex flex-col gap-8 shadow-lg"
        in:fly={{ y: 200, duration: 400 }} 
        out:fly={{ y: -200, duration: 300 }}
    >
        
    {#each info as product}
        <CartProduct 
        img={product.img}
        label={product.label}
        price={product.price}
        oldPrice={product.oldPrice}

        class="overflow-y-auto max-h-80"
    />
    {/each}
    </div>
    
    
    <button
        class="fixed inset-0 bg-black/50 cursor-default backdrop-blur-sm transition-opacity duration-300 z-40"
        on:click={onClose}
        aria-label="Close menu"
        tabindex="0"
    >


    </button>
    {/if}

<style>

</style>