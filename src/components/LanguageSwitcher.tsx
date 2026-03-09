"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { locales, Locale } from "@/lib/i18n-config"
import { useTranslations } from "@/lib/i18n-context"
import { Globe } from "lucide-react"
import { setLocale } from "@/lib/set-locale"

const languageNames: Record<Locale, string> = {
    en: "English",
    zh: "中文",
}

export function LanguageSwitcher({ currentLocale = "en" }: { currentLocale?: Locale }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const t = useTranslations()

    const handleLanguageChange = async (newLocale: Locale) => {
        if (newLocale === currentLocale) return

        startTransition(async () => {
            await setLocale(newLocale)
            router.refresh()
        })
    }

    return (
        <Select
            value={currentLocale}
            onValueChange={handleLanguageChange}
            disabled={isPending}
        >
            <SelectTrigger className="w-[140px]">
                <Globe className="mr-2 size-4" />
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {locales.map((locale) => (
                    <SelectItem key={locale} value={locale}>
                        {languageNames[locale]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
