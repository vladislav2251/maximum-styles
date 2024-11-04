<script>
    import Contact from "$lib/components/sections/contact.svelte";
    import ProductDescription from "$lib/components/sections/product-description.svelte";
    import ProductDetail from "$lib/components/sections/product-detail.svelte";
    import Simillar from "$lib/components/sections/simillar.svelte";

    const details = [
        { id: 1, smallImage: "/img/productSmall.webp", largeImage: "/img/image.jpg", label: "Acnocell Multillululu", articul: "1234567891234", oldPrice: "250", newPrice: "200", currency: "$", characteristic: "Lorem ipsum dolor sit amet consectetur"}
    ]
</script>

{#each details as product}
    <ProductDetail 
        id={product.id}
        smallImage={product.smallImage}
        largeImage={product.largeImage}
        label={product.label}
        articul={product.articul}
        bestseller={product.bestseller}
        last={product.last}
        oldPrice={product.oldPrice}
        newPrice={product.newPrice}
        currency={product.currency}
        characteristic={product.characteristic}
    />
{/each }
<ProductDescription />
<Simillar />
<Contact />