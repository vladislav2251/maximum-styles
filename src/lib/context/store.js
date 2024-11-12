import { writable } from 'svelte/store';
import { languagesList } from '$lib/context/language.js';

export const isLogged = writable(false);

const currentLangInit = (startValue) => {
  const store = writable(startValue);

  if (typeof window !== 'undefined') {
    let currentLangCode = localStorage.getItem('language');

    if (!languagesList.some((lang) => lang.code === currentLangCode)) {
      currentLangCode = 'de';
    }

    const currentLang = languagesList.find(
      (language) => language.code === currentLangCode
    );
    store.set(currentLang);

    store.subscribe((value) => {
      const currentLang = languagesList.find(
        (language) => language.code === value.code
      );
      localStorage.setItem('language', currentLang.code);
    });
  }

  return store;
};

export const language = currentLangInit(languagesList[0]);

