<script>
  import { language } from '$lib/context/store.js';

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  import CreateCategory from '$lib/components/admin/categories/create-category.svelte';
</script>

<CreateCategory {translation} />
