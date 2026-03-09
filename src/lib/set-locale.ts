"use server"

import { cookies } from "next/headers"
import { Locale, LOCALE_COOKIE_NAME, locales } from "./i18n-config"

export async function setLocale(locale: Locale) {
    if (!locales.includes(locale)) {
        return { error: "Invalid locale" }
    }

    const cookieStore = await cookies()
    cookieStore.set(LOCALE_COOKIE_NAME, locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: "lax",
    })

    return { success: true }
}
