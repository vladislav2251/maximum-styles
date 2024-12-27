<script>
  import EditProduct from '$lib/components/admin/products/edit-product.svelte';
  import { languageStore } from '$lib/context/languageStore';
  export let data;
</script>

<EditProduct
  translation={$languageStore.langFile}
  product={data.product}
  categories={data.categories}
  manufacturers={data.manufacturers}
/>
