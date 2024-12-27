<script>
  import { languageStore } from '$lib/context/languageStore';
  import CreateCategory from '$lib/components/admin/categories/create-category.svelte';
</script>

<CreateCategory translation={$languageStore.langFile} />
