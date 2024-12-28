import { redirect } from '@sveltejs/kit';
import { checkToken } from '@stores/main.js';

export async function load({ cookies, locals }) {
  const token = cookies.get('auth_token');

  if (!token) {
    return redirect(302, `/${locals.lang.code}/sign-in`);
  }

  const isValid = await checkToken(token);
  if (isValid.token_status !== true) {
    return redirect(302, `/${locals.lang.code}/sign-in`);
  }

  if (isValid.account.admin !== true) {
    redirect(302, `/${locals.lang.code}`);
  }
  return { lang: locals.lang };
}
