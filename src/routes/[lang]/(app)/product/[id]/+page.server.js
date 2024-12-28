import { getAccount } from '@stores/main.js';

export async function load({ cookies, locals }) {
  const token = cookies.get('auth_token');
  const account = await getAccount(token);

  return {
    account: account,
    lang: locals.lang,
  };
}
