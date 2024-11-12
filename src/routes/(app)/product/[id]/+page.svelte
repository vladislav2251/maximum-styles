<script>
    import { addProductToCart } from '$lib/context/cart.js';
    
    import { language } from "$lib/context/store.js";
    import Contact from "$lib/components/sections/contact.svelte";
    import ProductDescription from "$lib/components/sections/product-description.svelte";
    import ProductDetail from "$lib/components/sections/product-detail.svelte";
    import Simillar from "$lib/components/sections/simillar.svelte";

    let translation;

    $: {
        if ($language) {
            translation = $language.langFile; 
        }
    }

    export let data;
</script>

<!-- Компонент ProductDetail -->
<ProductDetail 
    {data}
    {translation}
    addToCart={addProductToCart}
/>

<ProductDescription {translation} description={data.description}/>
<Simillar {translation}/>
<Contact {translation}/>
