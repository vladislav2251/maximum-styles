import { getCategories } from '@stores/main';

export async function load({ data }) {
  try {
    const categories = await getCategories();
    if (!categories) {
      error(404, 'Not found');
    }
    return {
      categories,
      account: data.account,
    };
  } catch (error) {
    error(500, error.message);
  }
}
