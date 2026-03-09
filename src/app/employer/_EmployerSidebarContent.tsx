import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup"
import { AsyncIf } from "@/components/AsyncIf"
import {
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { hasOrgUserPermission } from "@/services/clerk/lib/orgUserPermissions"
import { PlusIcon, ClipboardListIcon } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { getDictionary } from "@/lib/i18n"
import { getLocaleFromCookies } from "@/lib/get-locale"

export async function EmployerSidebarContent({
    orgId,
    jobListingMenu,
}: {
    orgId: string
    jobListingMenu: ReactNode
}) {
    const lang = await getLocaleFromCookies()
    const t = await getDictionary(lang)

    return (
        <>
            <SidebarGroup>
                <SidebarGroupLabel>{t.sidebar.job_listings}</SidebarGroupLabel>
                <AsyncIf
                    condition={() => hasOrgUserPermission("org:job_listings:create")}
                >
                    <SidebarGroupAction title={t.sidebar.add_job_listing} asChild>
                        <Link href="/employer/job-listings/new">
                            <PlusIcon />{" "}
                            <span className="sr-only">{t.sidebar.add_job_listing}</span>
                        </Link>
                    </SidebarGroupAction>
                </AsyncIf>
                <SidebarGroupContent className="group-data-[state=collapsed]:hidden">
                    {jobListingMenu}
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarNavMenuGroup
                className="mt-auto"
                items={[
                    {
                        href: "/",
                        icon: <ClipboardListIcon />,
                        label: t.nav.job_board,
                    },
                ]}
            />
        </>
    )
}
