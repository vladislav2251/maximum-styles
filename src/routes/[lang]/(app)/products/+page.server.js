import {
  getAccount,
  getCategories,
  getManufacturers,
  getProducts,
} from '@stores/main.js';

export async function load({ cookies, locals }) {
  const token = cookies.get('auth_token');

  const [account, categories, manufacturers, products] = await Promise.all([
    getAccount(token),
    getCategories(),
    getManufacturers(),
    getProducts(),
  ]);

  return {
    account,
    categories,
    manufacturers,
    products,
    lang: locals.lang,
  };
}
