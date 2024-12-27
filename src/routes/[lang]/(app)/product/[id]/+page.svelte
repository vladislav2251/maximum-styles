<script>
  import { languageStore } from '$lib/context/languageStore';
  import {
    Contact,
    ProductDescription,
    ProductDetail,
    Simillar,
  } from '$lib/components/sections/shop/product/';

  $: translation = $languageStore.langFile;

  export let data;
</script>

<ProductDetail product={data.product} account={data.account} {translation} />
<ProductDescription {translation} description={data.product.description} />
<Simillar {translation} />
<Contact {translation} />
