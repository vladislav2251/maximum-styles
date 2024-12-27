import { getProducts } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const products = await getProducts();
  if (products) {
    return {
      products,
    };
  }

  error(404, 'Product not found');
}
