<script>
  import EditOrder from '$lib/components/admin/orders/edit-order.svelte';
  import { languageStore } from '$lib/context/languageStore';
  export let data;
</script>

<EditOrder {data} translation={$languageStore.langFile} />
