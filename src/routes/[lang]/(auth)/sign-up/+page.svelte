<script>
  import SignUp from '$lib/components/auth/sign-up.svelte';
  export let data;
</script>

<svelte:head>
  <title>Maximum Style - Sign Up</title>
</svelte:head>

<SignUp translation={data.lang.file} currentLang={data.lang.code} />
