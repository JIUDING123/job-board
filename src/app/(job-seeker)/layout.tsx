import { AppSidebar } from "@/components/sidebar/AppSidebar"
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton"
import { ReactNode } from "react"
import { JobSeekerSidebarContent } from "./_JobSeekerSidebarContent"

export default function JobSeekerLayout({
  children,
  sidebar,
}: {
  children: ReactNode
  sidebar: ReactNode
}) {
  return (
    <AppSidebar
      content={
        <>
          {sidebar}
          <JobSeekerSidebarContent />
        </>
      }
      footerButton={<SidebarUserButton />}
    >
      {children}
    </AppSidebar>
  )
}
