import { redirect } from '@sveltejs/kit';
import { checkToken } from '@stores/main.js';

export async function load({ cookies, locals }) {
  const token = cookies.get('auth_token');

  if (token) {
    const isValid = await checkToken(token);
    if (!isValid) {
      return redirect(302, `/${locals.lang.code}/sign-in`);
    }
    return {
      lang: locals.lang,
    };
  }
}
