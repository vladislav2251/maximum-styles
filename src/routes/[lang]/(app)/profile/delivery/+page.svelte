<script>
  import Delivery from '$lib/components/sections/profile/delivery.svelte';
  export let data;
</script>

<Delivery translation={data.lang.file} accountData={data.account} />
