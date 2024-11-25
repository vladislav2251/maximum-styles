import { getAccount, getCategories, getManufacturers } from '@stores/main.js';

export async function load({ cookies }) {
    const token = cookies.get('auth_token');

    const [account, categories, manufacturers] = await Promise.all([
        getAccount(token),
        getCategories(),
        getManufacturers()
    ]);

    return {
        account,
        categories,
        manufacturers
    };
}
