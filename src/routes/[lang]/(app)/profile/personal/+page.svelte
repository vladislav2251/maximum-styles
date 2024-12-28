<script>
  import Personal from '$lib/components/sections/profile/personal.svelte';
  export let data;
</script>

<Personal translation={data.lang.file} accountData={data.account} />
