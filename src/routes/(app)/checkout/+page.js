import { redirect } from '@sveltejs/kit';
import { getAccount } from '@stores/main.js';
import Cookies from 'js-cookie';

export const load = async ({ params }) => {
  try {
    const token = Cookies.get('auth_token');
    console.log(token);
    if (!token) {
      return redirect(302, '/');
    }

    const account = await getAccount(token);
    console.log(account);

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
