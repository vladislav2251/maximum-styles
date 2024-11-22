<script>
  import { language } from '$lib/context/store.js';
  import EditOrder from '$lib/components/admin/orders/edit-order.svelte';

  let translation;
  export let data;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }
</script>

<EditOrder {translation} {data} />
