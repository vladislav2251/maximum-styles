<script>
  import { language } from '$lib/context/store.js';
  import EditOrder from '../../../../../../lib/components/sections/edit-order.svelte';

  let translation;
  export let data;
  console.log(data);

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }
</script>

<EditOrder {translation} {data} />
