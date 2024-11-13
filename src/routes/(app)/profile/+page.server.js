import { redirect } from '@sveltejs/kit';
import { getAccount } from '@stores/main.js';

export async function load({ cookies }) {
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
}
