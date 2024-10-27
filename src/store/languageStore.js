
import { writable } from "svelte/store";

export const languageList = [
    { id: 0, name: "Polski", flag: "/svg/pl.svg", code: "pl" },
    { id: 1, name: "English", flag: "/svg/en.svg", code: "en" },
    { id: 2, name: "Deutsch", flag: "/svg/de.svg", code: "de" }
];

// Функция для инициализации текущего языка
const currentLangInit = () => {
    const savedLangCode = typeof window !== "undefined" && localStorage.getItem("language");
    const defaultLang = languageList.find(lang => lang.code === savedLangCode) || languageList[0];
    const { subscribe, set } = writable(defaultLang);

    subscribe(value => {
        if (typeof window !== "undefined") {
            localStorage.setItem("language", value.code);
        }
    });

    return {
        subscribe,
        set: (lang) => set(lang)
    };
};

export const language = currentLangInit();

export const changeLang = (id) => {
    const selectedLang = languageList.find(lang => lang.id === id);
    language.set(selectedLang);
};
