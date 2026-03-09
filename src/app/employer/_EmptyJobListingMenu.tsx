import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { PlusIcon } from "lucide-react"
import Link from "next/link"
import { getDictionary } from "@/lib/i18n"
import { getLocaleFromCookies } from "@/lib/get-locale"

export async function EmptyJobListingMenu() {
    const lang = await getLocaleFromCookies()
    const t = await getDictionary(lang)

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/employer/job-listings/new">
                        <PlusIcon />
                        <span>{t.sidebar.create_first_listing}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
