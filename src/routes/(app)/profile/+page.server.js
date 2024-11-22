import { redirect } from '@sveltejs/kit';
import { getAccount, checkToken } from '@stores/main.js';

export async function load({ cookies }) {
  const token = cookies.get('auth_token');
  // const isValid = await checkToken(token);
  // console.log(isValid);
  // if (!isValid) {
  //   return redirect(302, '/login');
  // }
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
