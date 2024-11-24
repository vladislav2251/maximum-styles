import { getCategories } from '@stores/main';

export async function load({ data }) {
  try {
    return {
      account: data.account,
    };
  } catch (error) {
    error(500, error.message);
  }
}
