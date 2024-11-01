<script>
    import { language } from "$lib/context/store.js";
    import Profile from "/src/components/sections/Profile.svelte";


    let translation;

    $: {
        if ($language) {
            translation = $language.langFile
        }
    }
</script>

<Profile {translation}/>