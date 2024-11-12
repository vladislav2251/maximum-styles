<script>
import EditProduct from "@components/admin/edit-product.svelte";
    import { language } from "$lib/context/store.js";

    $: {
        if ($language) {
            translation = $language.langFile;
        }
    }

    export let translation;
    export let data;
</script>

<EditProduct {translation} data={data}/>
