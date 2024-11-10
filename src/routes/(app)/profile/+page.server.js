import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const token = cookies.get('auth_token');

  if (!token) {
    return redirect(302, '/');
  }

  return;
}
