import { getOrder } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const data = await getOrder(params.id);
  if (data) {
    return {
      data,
    };
  }

  error(404, 'Product not found');
}
