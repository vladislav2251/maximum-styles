import { getProduct } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const product = await getProduct(params.product_id);
  if (product) {
    return {
      product: product,
    };
  }

  error(404, 'Product not found');
}
