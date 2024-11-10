import { getProduct } from '@/stores/main.js';
import { error } from '@sveltejs/kit';
export const load = async ({ params }) => {
  try {
    const data = await getProduct(params.id);
    if (!data) {
      error(404, 'Not found');
    }
    return data;
  } catch (e) {
    error(500, e.message);
  }
};
