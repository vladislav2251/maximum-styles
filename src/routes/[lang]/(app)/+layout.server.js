import { error } from '@sveltejs/kit';
export const load = async ({ locals }) => {
  try {
    return {
      lang: locals.lang,
    };
  } catch (e) {
    error(500, e.message);
  }
};
