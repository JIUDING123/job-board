"use client"

import { Badge } from "@/components/ui/badge"
import { JobListingTable } from "@/drizzle/schema"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"
import { formatWage, formatJobListingLocation } from "../lib/formatters"
import {
  BanknoteIcon,
  BuildingIcon,
  GraduationCapIcon,
  HourglassIcon,
  MapPinIcon,
} from "lucide-react"
import { useJobListingFormatters } from "../hooks/useJobListingFormatters"
import { useTranslations } from "@/lib/i18n-context"

export function JobListingBadges({
  jobListing: {
    wage,
    wageInterval,
    stateAbbreviation,
    city,
    type,
    experienceLevel,
    locationRequirement,
    isFeatured,
  },
  className,
}: {
  jobListing: Pick<
    typeof JobListingTable.$inferSelect,
    | "wage"
    | "wageInterval"
    | "stateAbbreviation"
    | "city"
    | "type"
    | "experienceLevel"
    | "locationRequirement"
    | "isFeatured"
  >
  className?: string
}) {
  const t = useTranslations()
  const { formatLocationRequirement, formatExperienceLevel, formatJobType } =
    useJobListingFormatters()

  const badgeProps = {
    variant: "outline",
    className,
  } satisfies ComponentProps<typeof Badge>

  return (
    <>
      {isFeatured && (
        <Badge
          {...badgeProps}
          className={cn(
            className,
            "border-featured bg-featured/50 text-featured-foreground"
          )}
        >
          {t("jobListing.featured")}
        </Badge>
      )}
      {wage != null && wageInterval != null && (
        <Badge {...badgeProps}>
          <BanknoteIcon />
          {formatWage(wage, wageInterval)}
        </Badge>
      )}
      {(stateAbbreviation != null || city != null) && (
        <Badge {...badgeProps}>
          <MapPinIcon className="size-10" />
          {formatJobListingLocation({ stateAbbreviation, city })}
        </Badge>
      )}
      <Badge {...badgeProps}>
        <BuildingIcon />
        {formatLocationRequirement(locationRequirement)}
      </Badge>
      <Badge {...badgeProps}>
        <HourglassIcon />
        {formatJobType(type)}
      </Badge>
      <Badge {...badgeProps}>
        <GraduationCapIcon />
        {formatExperienceLevel(experienceLevel)}
      </Badge>
    </>
  )
}
