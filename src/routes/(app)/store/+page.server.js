import { getCategory } from "/src/stores/main.js";
import { error } from '@sveltejs/kit';

export const prerender = false;

export async function load({ params }) {
    const category = await getCategory(params.category_id);

    if (category) {
        return { category }; 
    } else {
        throw error(404, 'Not found');  
    }
}
