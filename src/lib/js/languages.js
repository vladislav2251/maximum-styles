import bg from '$lib/languages/bg.json';
import de from '$lib/languages/de.json';

export const languagesList = [
  {
    id: 0,
    title: 'Bulgarian',
    code: 'bg',
    langFile: bg,
  },
  {
    id: 1,
    title: 'Deutsch',
    code: 'de',
    langFile: de,
  },
];

export const getAcceptedLang = async (headers) => {
  const acceptLanguage = headers.get('accept-language') || 'bg';
  return acceptLanguage.split(',')[0].split('-')[0];
};

export const getLang = (langCode) => {
  return languagesList.find((item) => item.code === langCode);
};
