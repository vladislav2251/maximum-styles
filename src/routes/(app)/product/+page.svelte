<script>
    import Contact from "/src/components/sections/Contact.svelte";
    import ProductDescription from "/src/components/sections/ProductDescription.svelte";
    import ProductDetail from "/src/components/sections/ProductDetail.svelte";
    import Simillar from "/src/components/sections/Simillar.svelte";

    const details = [
        { id: 1, smallImage: "/img/productSmall.webp", largeImage: "/img/miniCard.webp", label: "Acnocell Multillululu", articul: "1234567891234", bestseller: "Лучшее предложение", last: "Заканчивается", oldPrice: "250", newPrice: "200", currency: " ₽", characteristic: "Lorem ipsum dolor sit amet consectetur"}
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