<script>
  import { language } from '$lib/context/store.js';
  import Contact from '$lib/components/sections/contact.svelte';
  import ProductDescription from '$lib/components/sections/product-description.svelte';
  import ProductDetail from '$lib/components/sections/product-detail.svelte';
  import Simillar from '$lib/components/sections/simillar.svelte';

  let translation;

  $: {
    if ($language) {
      translation = $language.langFile;
    }
  }

  export let data;
</script>

<ProductDetail product={data.product} account={data.account} {translation} />
<ProductDescription {translation} description={data.product.description} />
<Simillar {translation} />
<Contact {translation} />
