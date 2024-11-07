import { redirect } from '@sveltejs/kit';
import Cookies from 'js-cookie';

export async function load({ cookies }) {
    const token = cookies.get("auth_token");
    
    if (!token) {
        return { isModalOpen: true };
    }

    return { isModalOpen: false };
}