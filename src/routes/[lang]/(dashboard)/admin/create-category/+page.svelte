<script>
  import CreateCategory from '$lib/components/admin/categories/create-category.svelte';
  export let data;
</script>

<CreateCategory translation={data.lang.file} />
