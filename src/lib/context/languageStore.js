import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { page } from '$app/stores';
import { goto } from '$app/navigation';
import { languagesList, getLang } from '$lib/js/languages';

function createLanguageStore() {
  const { subscribe, set } = writable({
    currentLang: 'bg',
    langFile: languagesList[0].langFile,
  });

  if (browser) {
    page.subscribe(($page) => {
      if ($page?.url?.pathname) {
        const langFromUrl = $page.url.pathname.split('/')[1];
        const lang = getLang(langFromUrl);
        if (lang) {
          set({ currentLang: lang.code, langFile: lang.langFile });
        }
      }
    });
  }

  return {
    subscribe,
    changeLanguage: async (langCode) => {
      const lang = getLang(langCode);
      if (lang) {
        const currentPath = window.location.pathname;
        const newPath = `/${lang.code}${currentPath.slice(3)}`;
        await goto(newPath);
        set({ currentLang: lang.code, langFile: lang.langFile });
      }
    },
  };
}

export const languageStore = createLanguageStore();
