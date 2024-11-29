<script>
  import EditProduct from '$lib/components/admin/products/edit-product.svelte';
  import { language } from '$lib/context/store.js';

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let translation;
  export let data;
</script>

<EditProduct
  {translation}
  product={data.product}
  categories={data.categories}
  manufacturers={data.manufacturers}
/>
