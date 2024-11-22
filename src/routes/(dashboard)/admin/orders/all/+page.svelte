<script>
  import { language } from '$lib/context/store.js';
  import Orders from '$lib/components/admin/orders/orders.svelte';

  let translation;
  export let data;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }
</script>

<Orders {translation} {data} />
