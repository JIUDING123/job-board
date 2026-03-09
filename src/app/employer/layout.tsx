import { AsyncIf } from "@/components/AsyncIf"
import { AppSidebar } from "@/components/sidebar/AppSidebar"
import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup"
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { db } from "@/drizzle/db"
import {
  JobListingApplicationTable,
  JobListingStatus,
  JobListingTable,
} from "@/drizzle/schema"
import { getJobListingApplicationJobListingTag } from "@/features/jobListingApplications/db/cache/jobListingApplications"
import { getJobListingOrganizationTag } from "@/features/jobListings/db/cache/jobListings"
import { sortJobListingsByStatus } from "@/features/jobListings/lib/utils"
import { SidebarOrganizationButton } from "@/features/organizations/components/SidebarOrganizationButton"
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth"
import { hasOrgUserPermission } from "@/services/clerk/lib/orgUserPermissions"
import { count, desc, eq } from "drizzle-orm"
import { ClipboardListIcon, PlusIcon } from "lucide-react"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ReactNode, Suspense } from "react"
import { JobListingMenuGroup } from "./_JobListingMenugroup"
import { EmployerSidebarContent } from "./_EmployerSidebarContent"
import { EmptyJobListingMenu } from "./_EmptyJobListingMenu"

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <LayoutSuspense>{children}</LayoutSuspense>
    </Suspense>
  )
}

async function LayoutSuspense({ children }: { children: ReactNode }) {
  const { orgId } = await getCurrentOrganization()
  if (orgId == null) return redirect("/organizations/select")

  return (
    <AppSidebar
      content={
        <EmployerSidebarContent
          orgId={orgId}
          jobListingMenu={
            <Suspense>
              <JobListingMenu orgId={orgId} />
            </Suspense>
          }
        />
      }
      footerButton={<SidebarOrganizationButton />}
    >
      {children}
    </AppSidebar>
  )
}

async function JobListingMenu({ orgId }: { orgId: string }) {
  const jobListings = await getJobListings(orgId)

  if (
    jobListings.length === 0 &&
    (await hasOrgUserPermission("org:job_listings:create"))
  ) {
    return <EmptyJobListingMenu />
  }

  return Object.entries(Object.groupBy(jobListings, j => j.status))
    .sort(([a], [b]) => {
      return sortJobListingsByStatus(
        a as JobListingStatus,
        b as JobListingStatus
      )
    })
    .map(([status, jobListings]) => (
      <JobListingMenuGroup
        key={status}
        status={status as JobListingStatus}
        jobListings={jobListings}
      />
    ))
}

async function getJobListings(orgId: string) {
  // "use cache"
  // cacheTag(getJobListingOrganizationTag(orgId))

  const data = await db
    .select({
      id: JobListingTable.id,
      title: JobListingTable.title,
      status: JobListingTable.status,
      applicationCount: count(JobListingApplicationTable.userId),
    })
    .from(JobListingTable)
    .where(eq(JobListingTable.organizationId, orgId))
    .leftJoin(
      JobListingApplicationTable,
      eq(JobListingTable.id, JobListingApplicationTable.jobListingId)
    )
    .groupBy(JobListingApplicationTable.jobListingId, JobListingTable.id)
    .orderBy(desc(JobListingTable.createdAt))

  data.forEach(jobListing => {
    // cacheTag(getJobListingApplicationJobListingTag(jobListing.id))
  })

  return data
}
