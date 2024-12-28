import { getProducts } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
  const products = await getProducts();
  if (products) {
    return {
      products,
      lang: locals.lang,
    };
  }

  error(404, 'Product not found');
}
