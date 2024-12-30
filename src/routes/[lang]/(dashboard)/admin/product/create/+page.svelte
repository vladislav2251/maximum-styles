<script>
  import CreateProduct from '$lib/components/admin/products/create-product.svelte';
  export let data;
</script>

<CreateProduct
  translation={data.lang.file}
  currentLang={data.lang.code}
  categories={data.category}
  manufacturers={data.manufacturer}
/>
