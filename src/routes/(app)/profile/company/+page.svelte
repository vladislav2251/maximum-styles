<script>
  import Company from '$lib/components/sections/profile/company.svelte';
  import { language } from '$lib/context/store.js';
  export let data;
  const accountData = data.account;

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }
</script>

<Company {translation} {accountData} />
