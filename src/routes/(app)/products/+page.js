import { getProducts } from '@/stores/main.js';

export async function load({ data }) {
  try {
    const products = await getProducts();
    if (!products) {
      error(404, 'Not found');
    }

    return {
      products,
      account: data.account,
    };
  } catch (error) {
    error(500, error.message);
  }
}
