import { redirect } from '@sveltejs/kit';
import { checkToken } from '@stores/main.js';

export async function load({ cookies, locals }) {
  const token = cookies.get('auth_token');
  if (!token) {
    return { lang: locals.lang };
  }
  const isValid = await checkToken(token);
  if (!isValid) {
    throw redirect(302, `/${locals.lang.code}/sign-in`);
  }
  throw redirect(302, `/${locals.lang.code}`);
}
