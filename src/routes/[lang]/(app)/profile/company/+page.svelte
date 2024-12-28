<script>
  import Company from '$lib/components/sections/profile/company.svelte';
  export let data;
</script>

<Company translation={data.lang.file} accountData={data.account} />
