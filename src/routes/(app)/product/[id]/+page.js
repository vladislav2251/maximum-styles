import { getProduct } from '@/stores/main.js';
import { error } from '@sveltejs/kit';
export const load = async ({ params, data }) => {
  try {
    const product = await getProduct(params.id);
    if (!product) {
      error(404, 'Not found');
    }
    return {
      product,
      account: data.account,
    };
  } catch (e) {
    error(500, e.message);
  }
};
