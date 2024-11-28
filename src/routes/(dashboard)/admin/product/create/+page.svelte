<script>
  import { language } from '$lib/context/store.js';

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
  export let translation;

  import CreateProduct from '$lib/components/admin/products/create-product.svelte';
</script>

<CreateProduct
  {translation}
  categories={data.category}
  manufacturers={data.manufacturer}
/>
