"use client"

import {
    ExperienceLevel,
    JobListingStatus,
    JobListingType,
    LocationRequirement,
    WageInterval,
} from "@/drizzle/schema"
import { useTranslations } from "@/lib/i18n-context"

export function useJobListingFormatters() {
    const t = useTranslations()

    const formatLocationRequirement = (locationRequirement: LocationRequirement) => {
        switch (locationRequirement) {
            case "remote":
                return t("jobListing.remote")
            case "in-office":
                return t("jobListing.onsite")
            case "hybrid":
                return t("jobListing.hybrid")
            default:
                throw new Error(
                    `Unknown location requirement: ${locationRequirement satisfies never}`
                )
        }
    }

    const formatExperienceLevel = (experienceLevel: ExperienceLevel) => {
        switch (experienceLevel) {
            case "junior":
                return t("jobListing.entry")
            case "mid-level":
                return t("jobListing.mid")
            case "senior":
                return t("jobListing.senior")
            default:
                throw new Error(
                    `Unknown experience level: ${experienceLevel satisfies never}`
                )
        }
    }

    const formatJobType = (type: JobListingType) => {
        switch (type) {
            case "full-time":
                return t("jobListing.full_time")
            case "part-time":
                return t("jobListing.part_time")
            case "internship":
                return t("jobListing.internship")
            default:
                throw new Error(`Unknown job type: ${type satisfies never}`)
        }
    }

    const formatJobListingStatus = (status: JobListingStatus) => {
        switch (status) {
            case "published":
                return t("employer.job_status.published")
            case "draft":
                return t("employer.job_status.draft")
            case "delisted":
                return t("employer.job_status.archived")
            default:
                throw new Error(`Unknown status: ${status satisfies never}`)
        }
    }

    const formatWageInterval = (interval: WageInterval) => {
        switch (interval) {
            case "hourly":
                return t("jobListing.per_hour")
            case "yearly":
                return t("jobListing.per_year")
            default:
                throw new Error(`Invalid wage interval: ${interval satisfies never}`)
        }
    }

    return {
        formatLocationRequirement,
        formatExperienceLevel,
        formatJobType,
        formatJobListingStatus,
        formatWageInterval,
    }
}
