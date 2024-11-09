<script>
    import { language } from "$lib/context/store.js";
    import Profile from "$lib/components/sections/profile.svelte";

    let translation;

    $: {
        if ($language) {
            translation = $language.langFile;
        }
    }
</script>

<Profile {translation} />