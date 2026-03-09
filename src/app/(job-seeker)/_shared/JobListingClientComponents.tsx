"use client"

import { useTranslations } from "@/lib/i18n-context"
import { JobListingTable, OrganizationTable } from "@/drizzle/schema"
import Link from "next/link"
import { convertSearchParamsToString } from "@/lib/convertSearchParamsToString"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { JobListingBadges } from "@/features/jobListings/components/JobListingBadges"
import { Suspense } from "react"

export function NoJobListingsFound() {
    const t = useTranslations()
    return <div className="text-muted-foreground p-4">{t("jobListing.no_listings_found")}</div>
}

export function NewBadge() {
    const t = useTranslations()
    return <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">{t("common.new")}</span>
}

export function JobListingLink({
    jobListingId,
    searchParams,
    jobListing,
    organization,
}: {
    jobListingId: string
    searchParams: Record<string, any>
    jobListing: Pick<
        typeof JobListingTable.$inferSelect,
        | "title"
        | "stateAbbreviation"
        | "city"
        | "wage"
        | "wageInterval"
        | "experienceLevel"
        | "type"
        | "postedAt"
        | "locationRequirement"
        | "isFeatured"
    >
    organization: Pick<typeof OrganizationTable.$inferSelect, "name" | "imageUrl">
}) {
    return (
        <Link
            className="block"
            href={`/job-listings/${jobListingId}?${convertSearchParamsToString(searchParams)}`}
        >
            <JobListingCard jobListing={jobListing} organization={organization} />
        </Link>
    )
}

function JobListingCard({
    jobListing,
    organization,
}: {
    jobListing: Pick<
        typeof JobListingTable.$inferSelect,
        | "title"
        | "stateAbbreviation"
        | "city"
        | "wage"
        | "wageInterval"
        | "experienceLevel"
        | "type"
        | "postedAt"
        | "locationRequirement"
        | "isFeatured"
    >
    organization: Pick<typeof OrganizationTable.$inferSelect, "name" | "imageUrl">
}) {
    const nameInitials = organization?.name
        .split(" ")
        .splice(0, 4)
        .map(word => word[0])
        .join("")

    return (
        <Card
            className={cn(
                "@container",
                jobListing.isFeatured && "border-featured bg-featured/20"
            )}
        >
            <CardHeader>
                <div className="flex gap-4">
                    <Avatar className="size-14 @max-sm:hidden">
                        <AvatarImage
                            src={organization.imageUrl ?? undefined}
                            alt={organization.name}
                        />
                        <AvatarFallback className="uppercase bg-primary text-primary-foreground">
                            {nameInitials}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <CardTitle className="text-xl">{jobListing.title}</CardTitle>
                        <CardDescription className="text-base">
                            {organization.name}
                        </CardDescription>
                        {jobListing.postedAt != null && (
                            <div className="text-sm font-medium text-primary @min-md:hidden">
                                {jobListing.postedAt.toLocaleDateString()}
                            </div>
                        )}
                    </div>
                    {jobListing.postedAt != null && (
                        <div className="text-sm font-medium text-primary ml-auto @max-md:hidden">
                            {jobListing.postedAt.toLocaleDateString()}
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                <JobListingBadges
                    jobListing={jobListing}
                    className={jobListing.isFeatured ? "border-primary/35" : undefined}
                />
            </CardContent>
        </Card>
    )
}
