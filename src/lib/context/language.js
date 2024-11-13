import { language } from '$lib/context/store.js';

import de from '$lib/languages/de.json';
import bg from '$lib/languages/bg.json';

export const languagesList = [
  { id: 0, name: 'DEU', code: 'de', langFile: de },
  { id: 1, name: 'BG', code: 'bg', langFile: bg },
];

export const changeLang = async (id) => {
  const currentLang = languagesList.find((language) => language.id === id);
  language.set(currentLang);
};
