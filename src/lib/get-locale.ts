import { cookies, headers } from "next/headers"
import { defaultLocale, locales, Locale, LOCALE_COOKIE_NAME } from "./i18n-config"

export async function getLocaleFromCookies(): Promise<Locale> {
    const cookieStore = await cookies()
    const localeCookie = cookieStore.get(LOCALE_COOKIE_NAME)

    if (localeCookie && locales.includes(localeCookie.value as Locale)) {
        return localeCookie.value as Locale
    }

    // Fall back to accept-language header
    const headersList = await headers()
    const acceptLanguage = headersList.get("accept-language")

    if (acceptLanguage) {
        const preferredLocales = acceptLanguage
            .split(",")
            .map((lang) => {
                const [locale, q = "1"] = lang.trim().split(";q=")
                return { locale: locale.split("-")[0], priority: parseFloat(q) }
            })
            .sort((a, b) => b.priority - a.priority)

        for (const { locale } of preferredLocales) {
            if (locales.includes(locale as Locale)) {
                return locale as Locale
            }
        }
    }

    return defaultLocale
}
