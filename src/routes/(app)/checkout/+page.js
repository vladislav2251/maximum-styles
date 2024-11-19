import { getCart, getProduct } from '@/stores/main.js';
import { error } from '@sveltejs/kit';
export const load = async ({ data }) => {
  try {
    const account = data.account;
    const cart = await getCart(2);
    const products = await Promise.all(
      cart.map(async (item) => {
        const productDetails = await getProduct(item.product_id);
        return { ...productDetails, amount: item.amount };
      })
    );
    return { account, products };
  } catch (e) {
    error(500, e.message);
  }
};
