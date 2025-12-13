import { db } from "../drizzle/db"
import { JobListingTable } from "../drizzle/schema"
import { eq } from "drizzle-orm"

async function main() {
  console.log("Checking for published job listings...")
  
  // Check if there are any published job listings
  const publishedJobs = await db.query.JobListingTable.findMany({
    where: eq(JobListingTable.status, "published"),
  })
  
  console.log(`Found ${publishedJobs.length} published job listings`)
  
  if (publishedJobs.length === 0) {
    console.log("Creating a test job listing...")
    
    // Create a test organization if needed
    let orgId = "test-org-id"
    const orgs = await db.query.OrganizationTable.findMany({
      limit: 1,
    })
    
    if (orgs.length > 0) {
      orgId = orgs[0].id
      console.log(`Using existing organization: ${orgId}`)
    }
    
    // Create a test job listing
    const [newJob] = await db
      .insert(JobListingTable)
      .values({
        organizationId: orgId,
        title: "Test Software Developer",
        description: "This is a test job listing for a software developer position. We're looking for someone with experience in React, Node.js, and TypeScript.",
        wage: 80000,
        wageInterval: "yearly",
        stateAbbreviation: "CA",
        city: "San Francisco",
        isFeatured: true,
        locationRequirement: "remote",
        experienceLevel: "mid-level",
        status: "published",
        type: "full-time",
        postedAt: new Date(),
      })
      .returning()
    
    console.log("Created test job listing:", newJob)
  } else {
    console.log("Sample job listing:", publishedJobs[0])
  }
}

main()
  .then(() => {
    console.log("Done!")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Error:", error)
    process.exit(1)
  }) 