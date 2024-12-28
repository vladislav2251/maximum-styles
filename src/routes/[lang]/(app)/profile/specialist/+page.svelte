<script>
  import Specialist from '$lib/components/sections/profile/specialist.svelte';
  export let data;
</script>

<Specialist translation={data.lang.file} accountData={data.account} />
