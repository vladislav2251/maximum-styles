<script>
    import { language } from "$lib/context/store.js";
    import Menu from "$lib/components/admin/Menu.svelte";
    let translation;

    $: {
        if ($language) {
            translation = $language.langFile;
        }
    }
</script>

<svelte:head>
    <title>{translation.dashboard.title}</title>
</svelte:head>

<Menu {translation}/>

<slot />