<script>
    import { language } from "$lib/context/store.js";
    import Hero from "/src/components/sections/Hero.svelte";
    import Caption from "/src/components/sections/Caption.svelte";
    import Cooperation from "/src/components/sections/Cooperation.svelte";
    import Popular from "/src/components/sections/Popular.svelte";
    import Achievements from "/src/components/sections/Achievements.svelte";
    import About from "/src/components/sections/About.svelte";
    import Label from "/src/components/sections/Label.svelte";
    import Products from "/src/components/sections/Products.svelte";
    import SecondLabel from "/src/components/sections/SecondLabel.svelte";
    let translation;

    $: {
        if ($language) {
            translation = $language.langFile; 
        }
    }
</script>

<Hero {translation}/>
<Caption {translation}/>
<Cooperation {translation}/>
<Popular {translation}/>
<Achievements {translation}/>
<About {translation}/>
<Label {translation}/>
<div class="container">
    <Products {translation}/>
</div>
<SecondLabel {translation}/>
<div class="container">
    <Products {translation}/>
</div>