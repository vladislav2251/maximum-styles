<script>
    import {addProductToCart } from '$lib/context/cart.js';
    import Product from "$lib/components/sections/product.svelte";

    export let translation;
    export let products;
</script>

<section class="py-12 flex flex-wrap justify-center items-center gap-y-8">
    {#each products as product}
        <Product
            {translation}
            {product}
            addToCart={addProductToCart}
        />
    {/each}
</section>
