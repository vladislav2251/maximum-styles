<script>
  import EditProduct from '$lib/components/admin/products/edit-product.svelte';
  export let data;
</script>

<EditProduct
  translation={data.lang.file}
  currentLang={data.lang.code}
  product={data.product}
  categories={data.categories}
  manufacturers={data.manufacturers}
/>
