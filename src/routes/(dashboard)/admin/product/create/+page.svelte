<script>
    import { language } from "$lib/context/store.js";
    
    $: {
        if ($language) {
            translation = $language.langFile;
        }
    }
    
    export let translation;

    import CreateProduct from "$lib/components/admin/create-product.svelte";
</script>

<CreateProduct {translation}/>