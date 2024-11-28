import { getManufacturers, getCategories } from '@/stores/main.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const [manufacturer, category] = await Promise.all([
      getManufacturers(),
      getCategories(),
    ]);

    if (!manufacturer || !category) {
      error(404, 'Manufacturer or category not found');
    }
    return {
      manufacturer,
      category,
    };
  } catch (error) {
    error(500, 'Server error');
  }
}
