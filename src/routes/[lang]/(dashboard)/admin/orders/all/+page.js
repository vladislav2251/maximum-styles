import { getOrders } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ data }) {
  const orders = await getOrders();
  if (orders) {
    return {
      orders,
      lang: data.lang,
    };
  }
  error(404, 'Product not found');
}
