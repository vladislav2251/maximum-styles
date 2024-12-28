import { getProduct, getCategories, getManufacturers } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
  try {
    const [product, manufacturers, categories] = await Promise.all([
      getProduct(params.product_id),
      getManufacturers(),
      getCategories(),
    ]);
    if (!product || !manufacturers || !categories) {
      return error(404, 'Not found');
    }
    return {
      product,
      manufacturers,
      categories,
      lang: locals.lang,
    };
  } catch (error) {
    error(500, 'Internal server error');
  }
}
