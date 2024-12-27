import { error } from '@sveltejs/kit';
export const load = async ({ locals }) => {
  try {
    console.log(locals.lang);
  } catch (e) {
    error(500, e.message);
  }
};
