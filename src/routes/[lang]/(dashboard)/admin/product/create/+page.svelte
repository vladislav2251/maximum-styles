<script>
  import CreateProduct from '$lib/components/admin/products/create-product.svelte';
  import { languageStore } from '$lib/context/languageStore';
  export let data;
</script>

<CreateProduct
  translation={$languageStore.langFile}
  categories={data.category}
  manufacturers={data.manufacturer}
/>
