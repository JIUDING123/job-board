import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { SignedIn } from "@/services/clerk/components/SignInStatus"
import { AppSidebarClient } from "./_AppSidebarClient"
import { ReactNode } from "react"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { getLocaleFromCookies } from "@/lib/get-locale"

export async function AppSidebar({
  children,
  content,
  footerButton,
}: {
  children: ReactNode
  content: ReactNode
  footerButton: ReactNode
}) {
  const currentLocale = await getLocaleFromCookies()

  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">Jiuding</span>
          </SidebarHeader>
          <SidebarContent>{content}</SidebarContent>
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="px-2 py-1">
                    <LanguageSwitcher currentLocale={currentLocale} />
                  </div>
                </SidebarMenuItem>
                <SidebarMenuItem>{footerButton}</SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className="flex-1">{children}</main>
      </AppSidebarClient>
    </SidebarProvider>
  )
}

