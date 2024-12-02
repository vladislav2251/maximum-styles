import { getCart, getAccount } from '@stores/main.js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
  try {
    const token = cookies.get('auth_token');
    const account = await getAccount(token);
    if (!account) {
      return error(404, 'Account is not found');
    }
    const cart = await getCart(account._id);
    if (!cart) {
      return error(404, 'Cart is not found');
    }
    return { account, cart };
  } catch (e) {
    error(500, e.message);
  }
};
