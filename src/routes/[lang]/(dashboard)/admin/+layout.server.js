import { redirect } from '@sveltejs/kit';
import { checkToken } from '@stores/main.js';

export async function load({ cookies }) {
  const token = cookies.get('auth_token');

  if (!token) {
    return redirect(302, '/sign-in');
  }

  const isValid = await checkToken(token);
  if (isValid.token_status !== true) {
    return redirect(302, '/sign-in');
  }

  if (isValid.account.admin !== true) {
    redirect(302, '/');
  }
}
