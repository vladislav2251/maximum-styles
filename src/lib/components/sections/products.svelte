<script>
  import { addProductToCart } from '$lib/context/cart.js';
  import Product from '$lib/components/sections/product.svelte'; // Импортируем компонент для каждого продукта

  export let translation;
  export let products; // Список продуктов, который передается в компонент Product

  let filteredProducts = products; // Список фильтрованных продуктов
  function setFilteredProducts(newProducts) {
    filteredProducts = newProducts;
  }
</script>

<section class="py-12 flex flex-wrap justify-center items-center gap-y-8">
  {#each filteredProducts as product (product._id)}
    <Product {translation} {product} addToCart={addProductToCart} />
    <!-- Передаем каждый продукт в дочерний компонент -->
  {/each}
</section>
