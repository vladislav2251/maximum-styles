<script>
    import { language } from "$lib/context/store.js";
    
    import Categories from "/src/components/sections/Categories.svelte";
    import Search from "/src/components/sections/Search.svelte";
    import Products from "/src/components/sections/Products.svelte";
    let translation;

    $: {
    if ($language) {
        translation = $language.langFile; 
    }
    }
</script>

<div class="flex gap-2 max-md:flex-col container py-12">
    <Categories {translation}/>

    <div class="flex-1">
        <Search {translation}/>
        <Products {translation}/>
    </div>
</div>