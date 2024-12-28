import { getCart } from '@/stores/main.js';
import { error } from '@sveltejs/kit';
export const load = async ({ data }) => {
  try {
    const account = data.account;
    const products = await getCart(account._id);
    return { account, products, lang: data.lang };
  } catch (e) {
    error(500, e.message);
  }
};
