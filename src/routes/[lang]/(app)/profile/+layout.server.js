import { redirect } from '@sveltejs/kit';
import { getAccount, checkToken } from '@stores/main.js';

export async function load({ cookies, locals }) {
  const token = cookies.get('auth_token');
  if (!token) {
    return redirect(302, `/${locals.lang.code}/sign-in`);
  }

  const isValid = await checkToken(token);
  if (!isValid) {
    return redirect(302, `/${locals.lang.code}/sign-in`);
  }

  const account = await getAccount(token);
  if (account === null) {
    return redirect(302, `/${locals.lang.code}/sign-in`);
  }

  return {
    account: account,
    lang: locals.lang,
  };
}
