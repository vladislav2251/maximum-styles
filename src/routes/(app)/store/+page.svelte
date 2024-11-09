<script>
    import { language } from "$lib/context/store.js";
    
    import Categories from "$lib/components/sections/categories.svelte";
    import Search from "$lib/components/sections/search.svelte";
    import Products from "$lib/components/sections/products.svelte";
    let translation;

    $: {
        if ($language) {
            translation = $language.langFile;
        }
    }

    export let data;

    const products = data.products;
</script>

<div class="flex gap-2 max-md:flex-col container py-12">
    <Categories {translation}/>

    <div class="flex-1">
        <Search {translation}/>
        <Products {translation} {products}/>
    </div>
</div>