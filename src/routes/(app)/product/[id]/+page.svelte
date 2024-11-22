<script>
  import { language } from '$lib/context/store.js';
  import {
    Contact,
    ProductDescription,
    ProductDetail,
    Simillar,
  } from '$lib/components/sections/shop/product/';

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
