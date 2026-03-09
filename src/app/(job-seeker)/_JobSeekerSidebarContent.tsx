import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup"
import {
    BrainCircuitIcon,
    ClipboardListIcon,
    LayoutDashboard,
    LogInIcon,
} from "lucide-react"
import { getDictionary } from "@/lib/i18n"
import { getLocaleFromCookies } from "@/lib/get-locale"

export async function JobSeekerSidebarContent() {
    const lang = await getLocaleFromCookies()
    const t = await getDictionary(lang)

    return (
        <SidebarNavMenuGroup
            className="mt-auto"
            items={[
                { href: "/", icon: <ClipboardListIcon />, label: t.nav.job_board },
                {
                    href: "/ai-search",
                    icon: <BrainCircuitIcon />,
                    label: t.nav.ai_search,
                },
                {
                    href: "/employer",
                    icon: <LayoutDashboard />,
                    label: t.common.employer_dashboard,
                    authStatus: "signedIn",
                },
                {
                    href: "/sign-in",
                    icon: <LogInIcon />,
                    label: t.common.sign_in,
                    authStatus: "signedOut",
                },
            ]}
        />
    )
}
