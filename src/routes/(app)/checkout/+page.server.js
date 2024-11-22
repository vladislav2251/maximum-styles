import { redirect } from '@sveltejs/kit';
import { getAccount } from '@stores/main.js';

export const load = async ({ cookies }) => {
  const token = cookies.get('auth_token');

  if (!token) {
    return redirect(302, '/sign-in');
  }

  const account = await getAccount(token);

  if (account === null) {
    return redirect(302, '/sign-in');
  }
  return {
    account: account,
  };
};
