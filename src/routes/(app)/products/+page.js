import { getProducts } from '@/stores/main.js';

export async function load({ params }) {
  const products = await getProducts();

  console.log(products);

  return {
    products: products,
  };
}
