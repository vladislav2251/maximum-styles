<script>
  import {
    Contact,
    ProductDescription,
    ProductDetail,
    Simillar,
  } from '$lib/components/sections/shop/product/';
  export let data;
  let translation = data.lang.file;
</script>

<ProductDetail product={data.product} account={data.account} {translation} />
<ProductDescription {translation} description={data.product.description} />
<Simillar {translation} />
<Contact {translation} />
