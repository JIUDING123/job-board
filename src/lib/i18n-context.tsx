"use client"

import { createContext, useContext, ReactNode } from "react"

type Dictionary = Record<string, any>

const I18nContext = createContext<Dictionary | null>(null)

export function I18nProvider({
    dictionary,
    children,
}: {
    dictionary: Dictionary
    children: ReactNode
}) {
    return (
        <I18nContext.Provider value={dictionary}>{children}</I18nContext.Provider>
    )
}

export function useTranslations() {
    const dictionary = useContext(I18nContext)
    if (!dictionary) {
        throw new Error("useTranslations must be used within I18nProvider")
    }

    return function t(key: string, fallback?: string): string {
        const keys = key.split(".")
        let value: any = dictionary

        for (const k of keys) {
            value = value?.[k]
            if (value === undefined) break
        }

        return typeof value === "string" ? value : fallback || key
    }
}
