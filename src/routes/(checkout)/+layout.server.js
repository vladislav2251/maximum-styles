import { redirect } from '@sveltejs/kit';
import { checkToken } from '@stores/main.js';

export async function load({ cookies }) {
  const token = cookies.get('auth_token');

  if (token) {
    const isValid = await checkToken(token);
    if (!isValid) {
      return redirect(302, '/sign-in');
    }
  }
}
