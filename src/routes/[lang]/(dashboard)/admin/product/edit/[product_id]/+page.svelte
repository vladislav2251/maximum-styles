<script>
  import EditProduct from '$lib/components/admin/products/edit-product.svelte';
  export let data;
</script>

<EditProduct
  translation={data.lang.file}
  product={data.product}
  categories={data.categories}
  manufacturers={data.manufacturers}
/>
