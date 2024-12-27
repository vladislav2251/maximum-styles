<script>
  import Hero from '$lib/components/sections/hero.svelte';
  import Caption from '$lib/components/sections/caption.svelte';
  import Cooperation from '$lib/components/sections/cooperation.svelte';
  import Popular from '$lib/components/sections/popular.svelte';
  import Achievements from '$lib/components/sections/achievements.svelte';
  import About from '$lib/components/sections/about.svelte';
  import Label from '$lib/components/sections/label.svelte';
  import Products from '$lib/components/sections/shop/products/products.svelte';
  import SecondLabel from '$lib/components/sections/second-label.svelte';
  import { languageStore } from '$lib/context/languageStore';
  $: translation = $languageStore.langFile;
</script>

<svelte:head><title>Maximum Style</title></svelte:head>

<Hero {translation} />
<Caption {translation} />
<Cooperation {translation} />
<Popular {translation} />
<Achievements {translation} />
<About {translation} />
<Label {translation} />

<div class="container">
  <Products {translation} />
</div>

<SecondLabel {translation} />

<div class="container">
  <Products {translation} />
</div>
