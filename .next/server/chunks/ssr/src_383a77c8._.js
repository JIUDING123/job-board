module.exports = {

"[project]/src/features/jobListings/actions/schemas.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "jobListingAiSearchSchema": (()=>jobListingAiSearchSchema),
    "jobListingSchema": (()=>jobListingSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
;
const jobListingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Required"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Required"),
    experienceLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["experienceLevels"]),
    locationRequirement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationRequirements"]),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobListingTypes"]),
    wage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().min(1).nullable(),
    wageInterval: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wageIntervals"]).nullable(),
    stateAbbreviation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val.trim() === "" ? null : val).nullable(),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val.trim() === "" ? null : val).nullable()
}).refine((listing)=>{
    return listing.locationRequirement === "remote" || listing.city != null;
}, {
    message: "Required for non-remote listings",
    path: [
        "city"
    ]
}).refine((listing)=>{
    return listing.locationRequirement === "remote" || listing.stateAbbreviation != null;
}, {
    message: "Required for non-remote listings",
    path: [
        "stateAbbreviation"
    ]
});
const jobListingAiSearchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Required")
});
}),
"[project]/src/features/jobListings/db/cache/jobListings.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getJobListingGlobalTag": (()=>getJobListingGlobalTag),
    "getJobListingIdTag": (()=>getJobListingIdTag),
    "getJobListingOrganizationTag": (()=>getJobListingOrganizationTag),
    "revalidateJobListingCache": (()=>revalidateJobListingCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dataCache.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
;
;
function getJobListingGlobalTag() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalTag"])("jobListings");
}
function getJobListingOrganizationTag(organizationId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrganizationTag"])("jobListings", organizationId);
}
function getJobListingIdTag(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIdTag"])("jobListings", id);
}
function revalidateJobListingCache({ id, organizationId }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(getJobListingGlobalTag());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(getJobListingOrganizationTag(organizationId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(getJobListingIdTag(id));
}
}),
"[project]/src/features/jobListings/db/jobListings.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "deleteJobListing": (()=>deleteJobListing),
    "insertJobListing": (()=>insertJobListing),
    "updateJobListing": (()=>updateJobListing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/db/cache/jobListings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
async function insertJobListing(jobListing) {
    const [newListing] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"]).values(jobListing).returning({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].id,
        organizationId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].organizationId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateJobListingCache"])(newListing);
    return newListing;
}
async function updateJobListing(id, jobListing) {
    const [updatedListing] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"]).set(jobListing).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].id, id)).returning({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].id,
        organizationId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].organizationId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateJobListingCache"])(updatedListing);
    return updatedListing;
}
async function deleteJobListing(id) {
    const [deletedJobListing] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].id, id)).returning({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].id,
        organizationId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].organizationId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateJobListingCache"])(deletedJobListing);
    return deletedJobListing;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/services/clerk/lib/orgUserPermissions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "hasOrgUserPermission": (()=>hasOrgUserPermission)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
async function hasOrgUserPermission(permission) {
    const { has } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    return has({
        permission
    });
}
}),
"[project]/src/features/jobListings/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getNextJobListingStatus": (()=>getNextJobListingStatus),
    "sortJobListingsByStatus": (()=>sortJobListingsByStatus)
});
function getNextJobListingStatus(status) {
    switch(status){
        case "draft":
        case "delisted":
            return "published";
        case "published":
            return "delisted";
        default:
            throw new Error(`Unknown job listing status: ${status}`);
    }
}
function sortJobListingsByStatus(a, b) {
    return JOB_LISTING_STATUS_SORT_ORDER[a] - JOB_LISTING_STATUS_SORT_ORDER[b];
}
const JOB_LISTING_STATUS_SORT_ORDER = {
    published: 0,
    draft: 1,
    delisted: 2
};
}),
"[project]/src/services/clerk/lib/planFeatures.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "hasPlanFeature": (()=>hasPlanFeature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
async function hasPlanFeature(feature) {
    const { has } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    return has({
        feature
    });
}
}),
"[project]/src/features/jobListings/lib/planfeatureHelpers.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"c04916f4942a5758d1da6a69c2ae20cd0efee8aaee":"$$RSC_SERVER_CACHE_1","c062db06a18e25517bec890e618639728bdcf93b1f":"$$RSC_SERVER_CACHE_0"},"",""] */ __turbopack_context__.s({
    "$$RSC_SERVER_CACHE_0": (()=>$$RSC_SERVER_CACHE_0),
    "$$RSC_SERVER_CACHE_1": (()=>$$RSC_SERVER_CACHE_1),
    "hasReachedMaxFeaturedJobListings": (()=>hasReachedMaxFeaturedJobListings),
    "hasReachedMaxPublishedJobListings": (()=>hasReachedMaxPublishedJobListings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/db/cache/jobListings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/use-cache/cache-tag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/functions/aggregate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$planFeatures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/planFeatures.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
async function hasReachedMaxPublishedJobListings() {
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentOrganization"])();
    if (orgId == null) return true;
    const count = await getPublishedJobListingsCount(orgId);
    const canPost = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$planFeatures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPlanFeature"])("post_1_job_listing").then((has)=>has && count < 1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$planFeatures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPlanFeature"])("post_3_job_listings").then((has)=>has && count < 3),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$planFeatures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPlanFeature"])("post_15_job_listings").then((has)=>has && count < 15)
    ]);
    return !canPost.some(Boolean);
}
async function hasReachedMaxFeaturedJobListings() {
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentOrganization"])();
    if (orgId == null) return true;
    const count = await getFeaturedJobListingsCount(orgId);
    const canFeature = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$planFeatures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPlanFeature"])("1_featured_job_listing").then((has)=>has && count < 1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$planFeatures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPlanFeature"])("unlimited_featured_jobs_listings")
    ]);
    return !canFeature.some(Boolean);
}
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])("default", "c062db06a18e25517bec890e618639728bdcf93b1f", 0, async function getPublishedJobListingsCount(orgId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobListingOrganizationTag"])(orgId));
    const [res] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
        count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["count"])()
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].organizationId, orgId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].status, "published")));
    return res?.count ?? 0;
});
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "getPublishedJobListingsCount",
    writable: false
});
var getPublishedJobListingsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "c062db06a18e25517bec890e618639728bdcf93b1f", null);
var $$RSC_SERVER_CACHE_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])("default", "c04916f4942a5758d1da6a69c2ae20cd0efee8aaee", 0, async function getFeaturedJobListingsCount(orgId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobListingOrganizationTag"])(orgId));
    const [res] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
        count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["count"])()
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].organizationId, orgId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].isFeatured, true)));
    return res?.count ?? 0;
});
Object["defineProperty"]($$RSC_SERVER_CACHE_1, "name", {
    value: "getFeaturedJobListingsCount",
    writable: false
});
var getFeaturedJobListingsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_1, "c04916f4942a5758d1da6a69c2ae20cd0efee8aaee", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/services/inngest/ai/getLastOutputMessage.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getLastOutputMessage": (()=>getLastOutputMessage)
});
function getLastOutputMessage(result) {
    console.log("Processing agent result:", JSON.stringify(result, null, 2));
    const lastMessage = result.output.at(-1);
    if (lastMessage == null) {
        console.log("No last message found in output");
        return;
    }
    console.log("Last message type:", lastMessage.type);
    if (lastMessage.type !== "text") {
        console.log("Last message is not text type");
        return;
    }
    // Handle different content formats
    if (typeof lastMessage.content === "string") {
        const content = lastMessage.content.trim();
        console.log("String content:", content);
        return content;
    } else if (Array.isArray(lastMessage.content)) {
        const content = lastMessage.content.join("\n").trim();
        console.log("Array content joined:", content);
        return content;
    } else {
        console.log("Unexpected content format:", lastMessage.content);
        return;
    }
}
}),
"[project]/src/services/inngest/ai/getMatchingJobListings.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getMatchingJobListings": (()=>getMatchingJobListings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/env/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/dist/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$dist$2f$chunk$2d$S7IH62QX$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/dist/chunk-S7IH62QX.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f40$inngest$2f$ai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inngest$2f$ai$2f$getLastOutputMessage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/inngest/ai/getLastOutputMessage.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const listingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    wage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    wageInterval: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wageIntervals"]).nullable(),
    stateAbbreviation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    experienceLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["experienceLevels"]),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobListingTypes"]),
    locationRequirement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationRequirements"])
});
async function getMatchingJobListings(prompt, jobListings, { maxNumberOfJobs } = {}) {
    const NO_JOBS = "NO_JOBS";
    console.log("Gemini API Key Loaded:", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GEMINI_API_KEY ? "Yes" : "No");
    const agent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$dist$2f$chunk$2d$S7IH62QX$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAgent"])({
        name: "Job Matching Agent",
        description: "Agent for matching users with job listings",
        system: `You are an expert at matching people with jobs based on their specific experience, and requirements. The provided user prompt will be a description that includes information about themselves and their job requirements. ${maxNumberOfJobs ? `You are to return up to ${maxNumberOfJobs} jobs.` : `Return all jobs that match their requirements.`} 
        
    Return the jobs as a comma separated list of jobIds. If you cannot find any jobs that match the user prompt, return the text "${NO_JOBS}". Here is the JSON array of available job listings: ${JSON.stringify(jobListings.map((listing)=>listingSchema.transform((listing)=>({
                    ...listing,
                    wage: listing.wage ?? undefined,
                    wageInterval: listing.wageInterval ?? undefined,
                    city: listing.city ?? undefined,
                    stateAbbreviation: listing.stateAbbreviation ?? undefined,
                    locationRequirement: listing.locationRequirement ?? undefined
                })).parse(listing)))}`,
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f40$inngest$2f$ai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["openai"])({
            model: "qwen-turbo",
            apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].QWEN_API_KEY,
            baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1"
        })
    });
    const result = await agent.run(prompt);
    const lastMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inngest$2f$ai$2f$getLastOutputMessage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLastOutputMessage"])(result);
    if (lastMessage == null || lastMessage === NO_JOBS) return [];
    return lastMessage.split(",").map((jobId)=>jobId.trim()).filter(Boolean);
}
}),
"[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"4010224807ae4e4123218b8ba3cc4c15a0cb408a04":"toggleJobListingStatus","40483df4255ed0bb57bd48932055f31327a1f15a9c":"toggleJobListingFeatured","40a9bbb3c1d78a72478bee3f8ca554b7728cf30ed5":"getAiJobListingSearchResults","40ba250c4858599fac42466f1ae19bd523c742bbe8":"createJobListing","40d6ca8269f645e3734f949c79a8bfed237b5cce5d":"deleteJobListing","6074f86aff7dc7881cf6ba1ab7d4a5cdc2d743ae92":"updateJobListing","800f2cd53af8da2399dba7816987c0df1e280122b6":"$$RSC_SERVER_CACHE_1","e0090bcad38a27e22062d6624e4b04d499c1b4c46d":"$$RSC_SERVER_CACHE_0"},"",""] */ __turbopack_context__.s({
    "$$RSC_SERVER_CACHE_0": (()=>$$RSC_SERVER_CACHE_0),
    "$$RSC_SERVER_CACHE_1": (()=>$$RSC_SERVER_CACHE_1),
    "createJobListing": (()=>createJobListing),
    "deleteJobListing": (()=>deleteJobListing),
    "getAiJobListingSearchResults": (()=>getAiJobListingSearchResults),
    "toggleJobListingFeatured": (()=>toggleJobListingFeatured),
    "toggleJobListingStatus": (()=>toggleJobListingStatus),
    "updateJobListing": (()=>updateJobListing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/actions/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/db/jobListings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/db/cache/jobListings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/use-cache/cache-tag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$orgUserPermissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/orgUserPermissions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$lib$2f$planfeatureHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/lib/planfeatureHelpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inngest$2f$ai$2f$getMatchingJobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/inngest/ai/getMatchingJobListings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$lib$2f$planfeatureHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$lib$2f$planfeatureHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function createJobListing(unsafeData) {
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentOrganization"])();
    if (orgId == null || !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$orgUserPermissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOrgUserPermission"])("org:job_listings:create")) {
        return {
            error: true,
            message: "You don't have permission to create a job listing"
        };
    }
    const { success, data } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobListingSchema"].safeParse(unsafeData);
    console.log("data", data);
    if (!success) {
        return {
            error: true,
            message: "There was an error creating your job listing"
        };
    }
    const jobListing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insertJobListing"])({
        ...data,
        organizationId: orgId,
        status: "draft"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/employer/job-listings/${jobListing.id}`);
}
async function updateJobListing(id, unsafeData) {
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentOrganization"])();
    if (orgId == null || !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$orgUserPermissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOrgUserPermission"])("org:job_listings:update")) {
        return {
            error: true,
            message: "You don't have permission to update this job listing"
        };
    }
    const { success, data } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobListingSchema"].safeParse(unsafeData);
    if (!success) {
        return {
            error: true,
            message: "There was an error updating your job listing"
        };
    }
    const jobListing = await getJobListing(id, orgId);
    if (jobListing == null) {
        return {
            error: true,
            message: "There was an error updating your job listing"
        };
    }
    const updatedJobListing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateJobListing"])(id, data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/employer/job-listings/${updatedJobListing.id}`);
}
async function toggleJobListingStatus(id) {
    const error = {
        error: true,
        message: "You don't have permission to update this job listing's status"
    };
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentOrganization"])();
    if (orgId == null) return error;
    const jobListing = await getJobListing(id, orgId);
    if (jobListing == null) return error;
    const newStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextJobListingStatus"])(jobListing.status);
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$orgUserPermissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOrgUserPermission"])("org:job_listings:change_status") || newStatus === "published" && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$lib$2f$planfeatureHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasReachedMaxPublishedJobListings"])()) {
        return error;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateJobListing"])(id, {
        status: newStatus,
        isFeatured: newStatus === "published" ? undefined : false,
        postedAt: newStatus === "published" && jobListing.postedAt == null ? new Date() : undefined
    });
    return {
        error: false
    };
}
async function toggleJobListingFeatured(id) {
    const error = {
        error: true,
        message: "You don't have permission to update this job listing's featured status"
    };
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentOrganization"])();
    if (orgId == null) return error;
    const jobListing = await getJobListing(id, orgId);
    if (jobListing == null) return error;
    const newFeaturedStatus = !jobListing.isFeatured;
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$orgUserPermissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOrgUserPermission"])("org:job_listings:change_status") || newFeaturedStatus && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$lib$2f$planfeatureHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasReachedMaxFeaturedJobListings"])()) {
        return error;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateJobListing"])(id, {
        isFeatured: newFeaturedStatus
    });
    return {
        error: false
    };
}
async function deleteJobListing(id) {
    const error = {
        error: true,
        message: "You don't have permission to delete this job listing"
    };
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentOrganization"])();
    if (orgId == null) return error;
    const jobListing = await getJobListing(id, orgId);
    if (jobListing == null) return error;
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$orgUserPermissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOrgUserPermission"])("org:job_listings:delete")) {
        return error;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteJobListing"])(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/employer");
}
async function getAiJobListingSearchResults(unsafe) {
    const { success, data } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jobListingAiSearchSchema"].safeParse(unsafe);
    if (!success) {
        return {
            error: true,
            message: "There was an error processing your search query"
        };
    }
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (userId == null) {
        return {
            error: true,
            message: "You need an account to use AI job search"
        };
    }
    const allListings = await getPublicJobListings();
    const matchedListings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inngest$2f$ai$2f$getMatchingJobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMatchingJobListings"])(data.query, allListings, {
        maxNumberOfJobs: 10
    });
    console.log("matchedListings", matchedListings);
    if (matchedListings.length === 0) {
        return {
            error: true,
            message: "No jobs match your search criteria"
        };
    }
    return {
        error: false,
        jobIds: matchedListings
    };
}
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])("default", "e0090bcad38a27e22062d6624e4b04d499c1b4c46d", 0, async function getJobListing(id, orgId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobListingIdTag"])(id));
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].query.JobListingTable.findFirst({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].id, id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].organizationId, orgId))
    });
});
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "getJobListing",
    writable: false
});
var getJobListing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "e0090bcad38a27e22062d6624e4b04d499c1b4c46d", null);
var $$RSC_SERVER_CACHE_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])("default", "800f2cd53af8da2399dba7816987c0df1e280122b6", 0, async function getPublicJobListings() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$db$2f$cache$2f$jobListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobListingGlobalTag"])());
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].query.JobListingTable.findMany({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobListingTable"].status, "published")
    });
});
Object["defineProperty"]($$RSC_SERVER_CACHE_1, "name", {
    value: "getPublicJobListings",
    writable: false
});
var getPublicJobListings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_1, "800f2cd53af8da2399dba7816987c0df1e280122b6", null);
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createJobListing,
    updateJobListing,
    toggleJobListingStatus,
    toggleJobListingFeatured,
    deleteJobListing,
    getAiJobListingSearchResults
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createJobListing, "40ba250c4858599fac42466f1ae19bd523c742bbe8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateJobListing, "6074f86aff7dc7881cf6ba1ab7d4a5cdc2d743ae92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleJobListingStatus, "4010224807ae4e4123218b8ba3cc4c15a0cb408a04", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleJobListingFeatured, "40483df4255ed0bb57bd48932055f31327a1f15a9c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteJobListing, "40d6ca8269f645e3734f949c79a8bfed237b5cce5d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAiJobListingSearchResults, "40a9bbb3c1d78a72478bee3f8ca554b7728cf30ed5", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(job-seeker)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(job-seeker)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(job-seeker)/ai-search/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(job-seeker)/ai-search/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(job-seeker)/@sidebar/ai-search/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": (()=>AiSearchSidebar)
});
function AiSearchSidebar() {
    return null;
}
}),
"[project]/src/app/(job-seeker)/@sidebar/ai-search/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(job-seeker)/@sidebar/ai-search/page.tsx [app-rsc] (ecmascript)"));
}),

};

//# sourceMappingURL=src_383a77c8._.js.map