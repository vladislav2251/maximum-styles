import { redirect } from '@sveltejs/kit';
import { getAccount } from '@stores/main.js';

export const load = async ({ cookies }) => {
  try {
    const token = cookies.get('auth_token');

    if (!token) {
      return redirect(302, '/');
    }

    const account = await getAccount(token);

    if (account === null) {
      return redirect(302, '/');
    }
    return {
      account: account,
    };
  } catch (e) {
    error(500, e.message);
  }
};
