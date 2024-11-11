<script>
    import { language } from "$lib/context/store.js";
    import "$lib/styles/styles.css";
    import Menu from "$lib/components/admin/menu.svelte";
    let translation;

    $: {
        if ($language) {
            translation = $language.langFile;
        }
    }
</script>

<svelte:head>
    <title>{translation?.dashboard?.title}</title>
</svelte:head>

<div class="container">
    <Menu {translation}/>

    <slot/>
</div>