import { getOrder } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ params, data }) {
  const order = await getOrder(params.id);
  if (order) {
    return { order, lang: data.lang };
  }

  error(404, 'Product not found');
}
