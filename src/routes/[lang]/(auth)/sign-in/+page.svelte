<script>
  import SignIn from '$lib/components/auth/sign-in.svelte';
  export let data;
</script>

<svelte:head>
  <title>Maximum Style - Sign In</title>
</svelte:head>

<SignIn translation={data.lang.file} currentLang={data.lang.code} />
