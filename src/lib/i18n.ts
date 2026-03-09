import "server-only"

// Re-export config for server components
export { locales, defaultLocale, type Locale } from "./i18n-config"

const dictionaries = {
  en: () =>
    import("../dictionaries/en.json").then((module) => module.default),
  zh: () =>
    import("../dictionaries/zh.json").then((module) => module.default),
}

import type { Locale } from "./i18n-config"

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
