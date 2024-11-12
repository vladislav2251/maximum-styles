import { getProduct } from '@/stores/main.js';

export async function load({ params }) {
    const product = await getProduct(params.product_id);

    return {
        product: product,
    };
}
