<script>
  import Orders from '$lib/components/admin/orders/orders.svelte';
  import { languageStore } from '$lib/context/languageStore';
  export let data;
</script>

<Orders translation={$languageStore.langFile} {data} />
