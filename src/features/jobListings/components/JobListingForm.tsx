"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { jobListingSchema } from "../actions/schemas"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  experienceLevels,
  JobListingTable,
  jobListingTypes,
  locationRequirementEnum,
  locationRequirements,
  wageIntervals,
} from "@/drizzle/schema"
import { StateSelectItems } from "./StateSelectItems"
import { MarkdownEditor } from "@/components/markdown/MarkdownEditor"
import { Button } from "@/components/ui/button"
import { LoadingSwap } from "@/components/LoadingSwap"
import { Loader2Icon } from "lucide-react"
import { createJobListing, updateJobListing } from "../actions/actions"
import { toast } from "sonner"
import { useTranslations } from "@/lib/i18n-context"
import { useJobListingFormatters } from "../hooks/useJobListingFormatters"

const NONE_SELECT_VALUE = "none"

export function JobListingForm({
  jobListing,
}: {
  jobListing: Pick<
    typeof JobListingTable.$inferSelect,
    | "title"
    | "description"
    | "experienceLevel"
    | "id"
    | "stateAbbreviation"
    | "type"
    | "wage"
    | "wageInterval"
    | "city"
    | "locationRequirement"
  > | null
}) {
  const t = useTranslations()
  const { formatLocationRequirement, formatExperienceLevel, formatJobType, formatWageInterval } =
    useJobListingFormatters()

  const form = useForm({
    resolver: zodResolver(jobListingSchema),
    defaultValues: jobListing ?? {
      title: "",
      description: "",
      stateAbbreviation: null,
      city: null,
      wage: null,
      wageInterval: null,
      experienceLevel: "junior",
      type: "full-time",
      locationRequirement: "in-office",
    },
  })

  async function onSubmit(data: z.infer<typeof jobListingSchema>) {
    console.log("jobListing", jobListing)
    const action = jobListing
      ? updateJobListing.bind(null, jobListing.id)
      : createJobListing
    const res = await action(data)

    if (res.error) {
      toast.error(res.message)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 @container"
      >
        <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-4 gap-y-6 items-start">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("jobListingForm.title_label")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("jobListingForm.title_placeholder")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="wage"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("jobListingForm.wage_label")}</FormLabel>
                <div className="flex">
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      value={field.value ?? ""}
                      className="rounded-r-none"
                      placeholder={t("jobListingForm.wage_placeholder")}
                      onChange={e =>
                        field.onChange(
                          isNaN(e.target.valueAsNumber)
                            ? null
                            : e.target.valueAsNumber
                        )
                      }
                    />
                  </FormControl>
                  <FormField
                    name="wageInterval"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          value={field.value ?? ""}
                          onValueChange={val => field.onChange(val ?? null)}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded-l-none">
                              / <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {wageIntervals.map(interval => (
                              <SelectItem key={interval} value={interval}>
                                {formatWageInterval(interval)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription>{t("common.optional") || "Optional"}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-4 gap-y-6 items-start">
          <div className="grid grid-cols-1 @xs:grid-cols-2 gap-x-2 gap-y-6 items-start">
            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("jobListingForm.city_label")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ""}
                      placeholder={t("jobListingForm.city_placeholder")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="stateAbbreviation"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("jobListingForm.state_label")}</FormLabel>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={val =>
                      field.onChange(val === NONE_SELECT_VALUE ? null : val)
                    }
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t("jobListingForm.state_placeholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {field.value != null && (
                        <SelectItem
                          value={NONE_SELECT_VALUE}
                          className="text-muted-foreground"
                        >
                          {t("common.clear")}
                        </SelectItem>
                      )}
                      <StateSelectItems />
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <FormField
            name="locationRequirement"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("jobListingForm.location_requirement_label")}</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {locationRequirements.map(lr => (
                      <SelectItem key={lr} value={lr}>
                        {formatLocationRequirement(lr)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-4 gap-y-6 items-start">
          <FormField
            name="type"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("jobListingForm.type_label")}</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobListingTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {formatJobType(type)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="experienceLevel"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("jobListingForm.experience_label")}</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {experienceLevels.map(experience => (
                      <SelectItem key={experience} value={experience}>
                        {formatExperienceLevel(experience)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("jobListingForm.description_label")}</FormLabel>
              <FormControl>
                <MarkdownEditor {...field} markdown={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          <LoadingSwap isLoading={form.formState.isSubmitting}>
            {jobListing ? t("jobListingForm.update") : t("jobListingForm.create_job")}
          </LoadingSwap>
        </Button>
      </form>
    </Form>
  )
}
