import { redirect } from '@sveltejs/kit';
import { getAccount } from '@stores/main.js';

export const load = async ({ cookies, locals }) => {
  const token = cookies.get('auth_token');

  if (!token) {
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
};
