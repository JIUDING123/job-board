module.exports = {

"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7fc56a2b87c9475d61c2a91cc13b8d7b1e269e70f2":"invalidateCacheAction"},"",""] */ __turbopack_context__.s({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7fc56a2b87c9475d61c2a91cc13b8d7b1e269e70f2", null);
}),
"[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "40ba250c4858599fac42466f1ae19bd523c742bbe8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJobListing"]),
    "6074f86aff7dc7881cf6ba1ab7d4a5cdc2d743ae92": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateJobListing"]),
    "7f3e6904262b752c3d7b8852736789c70751bebc81": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"]),
    "7f5c071d3b58d443c08e4f89a6d5c1362fb3ebd8c4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"]),
    "7f981cd83a171ac6617bce42457e28213f4a39ae77": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"]),
    "7fc56a2b87c9475d61c2a91cc13b8d7b1e269e70f2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"]),
    "c00073e427cae4da9db7280ffaaf41e5ab6b702bfc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_CACHE_1"]),
    "c010323ae3ad72decf16f1156d7ad6f5d0835db2db": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_CACHE_0"]),
    "c04dfcbd1153b9e546d06dc92d4704174a5a49619c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_CACHE_0"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "40ba250c4858599fac42466f1ae19bd523c742bbe8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ba250c4858599fac42466f1ae19bd523c742bbe8"]),
    "6074f86aff7dc7881cf6ba1ab7d4a5cdc2d743ae92": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6074f86aff7dc7881cf6ba1ab7d4a5cdc2d743ae92"]),
    "7f3e6904262b752c3d7b8852736789c70751bebc81": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f3e6904262b752c3d7b8852736789c70751bebc81"]),
    "7f5c071d3b58d443c08e4f89a6d5c1362fb3ebd8c4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f5c071d3b58d443c08e4f89a6d5c1362fb3ebd8c4"]),
    "7f981cd83a171ac6617bce42457e28213f4a39ae77": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f981cd83a171ac6617bce42457e28213f4a39ae77"]),
    "7fc56a2b87c9475d61c2a91cc13b8d7b1e269e70f2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fc56a2b87c9475d61c2a91cc13b8d7b1e269e70f2"]),
    "c00073e427cae4da9db7280ffaaf41e5ab6b702bfc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["c00073e427cae4da9db7280ffaaf41e5ab6b702bfc"]),
    "c010323ae3ad72decf16f1156d7ad6f5d0835db2db": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["c010323ae3ad72decf16f1156d7ad6f5d0835db2db"]),
    "c04dfcbd1153b9e546d06dc92d4704174a5a49619c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["c04dfcbd1153b9e546d06dc92d4704174a5a49619c"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/employer/job-listings/new/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/clerk/lib/getCurrentAuth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/employer/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/features/jobListings/actions/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$job$2d$listings$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$employer$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$features$2f$jobListings$2f$actions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/cuint/lib/uint32.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
/**
	C-like unsigned 32 bits integers in Javascript
	Copyright (C) 2013, Pierre Curto
	MIT license
 */ ;
(function(root) {
    // Local cache for typical radices
    var radixPowerCache = {
        36: UINT32(Math.pow(36, 5)),
        16: UINT32(Math.pow(16, 7)),
        10: UINT32(Math.pow(10, 9)),
        2: UINT32(Math.pow(2, 30))
    };
    var radixCache = {
        36: UINT32(36),
        16: UINT32(16),
        10: UINT32(10),
        2: UINT32(2)
    };
    /**
	 *	Represents an unsigned 32 bits integer
	 * @constructor
	 * @param {Number|String|Number} low bits     | integer as a string 		 | integer as a number
	 * @param {Number|Number|Undefined} high bits | radix (optional, default=10)
	 * @return 
	 */ function UINT32(l, h) {
        if (!(this instanceof UINT32)) return new UINT32(l, h);
        this._low = 0;
        this._high = 0;
        this.remainder = null;
        if (typeof h == 'undefined') return fromNumber.call(this, l);
        if (typeof l == 'string') return fromString.call(this, l, h);
        fromBits.call(this, l, h);
    }
    /**
	 * Set the current _UINT32_ object with its low and high bits
	 * @method fromBits
	 * @param {Number} low bits
	 * @param {Number} high bits
	 * @return ThisExpression
	 */ function fromBits(l, h) {
        this._low = l | 0;
        this._high = h | 0;
        return this;
    }
    UINT32.prototype.fromBits = fromBits;
    /**
	 * Set the current _UINT32_ object from a number
	 * @method fromNumber
	 * @param {Number} number
	 * @return ThisExpression
	 */ function fromNumber(value) {
        this._low = value & 0xFFFF;
        this._high = value >>> 16;
        return this;
    }
    UINT32.prototype.fromNumber = fromNumber;
    /**
	 * Set the current _UINT32_ object from a string
	 * @method fromString
	 * @param {String} integer as a string
	 * @param {Number} radix (optional, default=10)
	 * @return ThisExpression
	 */ function fromString(s, radix) {
        var value = parseInt(s, radix || 10);
        this._low = value & 0xFFFF;
        this._high = value >>> 16;
        return this;
    }
    UINT32.prototype.fromString = fromString;
    /**
	 * Convert this _UINT32_ to a number
	 * @method toNumber
	 * @return {Number} the converted UINT32
	 */ UINT32.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
    };
    /**
	 * Convert this _UINT32_ to a string
	 * @method toString
	 * @param {Number} radix (optional, default=10)
	 * @return {String} the converted UINT32
	 */ UINT32.prototype.toString = function(radix) {
        return this.toNumber().toString(radix || 10);
    };
    /**
	 * Add two _UINT32_. The current _UINT32_ stores the result
	 * @method add
	 * @param {Object} other UINT32
	 * @return ThisExpression
	 */ UINT32.prototype.add = function(other) {
        var a00 = this._low + other._low;
        var a16 = a00 >>> 16;
        a16 += this._high + other._high;
        this._low = a00 & 0xFFFF;
        this._high = a16 & 0xFFFF;
        return this;
    };
    /**
	 * Subtract two _UINT32_. The current _UINT32_ stores the result
	 * @method subtract
	 * @param {Object} other UINT32
	 * @return ThisExpression
	 */ UINT32.prototype.subtract = function(other) {
        //TODO inline
        return this.add(other.clone().negate());
    };
    /**
	 * Multiply two _UINT32_. The current _UINT32_ stores the result
	 * @method multiply
	 * @param {Object} other UINT32
	 * @return ThisExpression
	 */ UINT32.prototype.multiply = function(other) {
        /*
			a = a00 + a16
			b = b00 + b16
			a*b = (a00 + a16)(b00 + b16)
				= a00b00 + a00b16 + a16b00 + a16b16

			a16b16 overflows the 32bits
		 */ var a16 = this._high;
        var a00 = this._low;
        var b16 = other._high;
        var b00 = other._low;
        /* Removed to increase speed under normal circumstances (i.e. not multiplying by 0 or 1)
		// this == 0 or other == 1: nothing to do
		if ((a00 == 0 && a16 == 0) || (b00 == 1 && b16 == 0)) return this

		// other == 0 or this == 1: this = other
		if ((b00 == 0 && b16 == 0) || (a00 == 1 && a16 == 0)) {
			this._low = other._low
			this._high = other._high
			return this
		}
*/ var c16, c00;
        c00 = a00 * b00;
        c16 = c00 >>> 16;
        c16 += a16 * b00;
        c16 &= 0xFFFF; // Not required but improves performance
        c16 += a00 * b16;
        this._low = c00 & 0xFFFF;
        this._high = c16 & 0xFFFF;
        return this;
    };
    /**
	 * Divide two _UINT32_. The current _UINT32_ stores the result.
	 * The remainder is made available as the _remainder_ property on
	 * the _UINT32_ object. It can be null, meaning there are no remainder.
	 * @method div
	 * @param {Object} other UINT32
	 * @return ThisExpression
	 */ UINT32.prototype.div = function(other) {
        if (other._low == 0 && other._high == 0) throw Error('division by zero');
        // other == 1
        if (other._high == 0 && other._low == 1) {
            this.remainder = new UINT32(0);
            return this;
        }
        // other > this: 0
        if (other.gt(this)) {
            this.remainder = this.clone();
            this._low = 0;
            this._high = 0;
            return this;
        }
        // other == this: 1
        if (this.eq(other)) {
            this.remainder = new UINT32(0);
            this._low = 1;
            this._high = 0;
            return this;
        }
        // Shift the divisor left until it is higher than the dividend
        var _other = other.clone();
        var i = -1;
        while(!this.lt(_other)){
            // High bit can overflow the default 16bits
            // Its ok since we right shift after this loop
            // The overflown bit must be kept though
            _other.shiftLeft(1, true);
            i++;
        }
        // Set the remainder
        this.remainder = this.clone();
        // Initialize the current result to 0
        this._low = 0;
        this._high = 0;
        for(; i >= 0; i--){
            _other.shiftRight(1);
            // If shifted divisor is smaller than the dividend
            // then subtract it from the dividend
            if (!this.remainder.lt(_other)) {
                this.remainder.subtract(_other);
                // Update the current result
                if (i >= 16) {
                    this._high |= 1 << i - 16;
                } else {
                    this._low |= 1 << i;
                }
            }
        }
        return this;
    };
    /**
	 * Negate the current _UINT32_
	 * @method negate
	 * @return ThisExpression
	 */ UINT32.prototype.negate = function() {
        var v = (~this._low & 0xFFFF) + 1;
        this._low = v & 0xFFFF;
        this._high = ~this._high + (v >>> 16) & 0xFFFF;
        return this;
    };
    /**
	 * Equals
	 * @method eq
	 * @param {Object} other UINT32
	 * @return {Boolean}
	 */ UINT32.prototype.equals = UINT32.prototype.eq = function(other) {
        return this._low == other._low && this._high == other._high;
    };
    /**
	 * Greater than (strict)
	 * @method gt
	 * @param {Object} other UINT32
	 * @return {Boolean}
	 */ UINT32.prototype.greaterThan = UINT32.prototype.gt = function(other) {
        if (this._high > other._high) return true;
        if (this._high < other._high) return false;
        return this._low > other._low;
    };
    /**
	 * Less than (strict)
	 * @method lt
	 * @param {Object} other UINT32
	 * @return {Boolean}
	 */ UINT32.prototype.lessThan = UINT32.prototype.lt = function(other) {
        if (this._high < other._high) return true;
        if (this._high > other._high) return false;
        return this._low < other._low;
    };
    /**
	 * Bitwise OR
	 * @method or
	 * @param {Object} other UINT32
	 * @return ThisExpression
	 */ UINT32.prototype.or = function(other) {
        this._low |= other._low;
        this._high |= other._high;
        return this;
    };
    /**
	 * Bitwise AND
	 * @method and
	 * @param {Object} other UINT32
	 * @return ThisExpression
	 */ UINT32.prototype.and = function(other) {
        this._low &= other._low;
        this._high &= other._high;
        return this;
    };
    /**
	 * Bitwise NOT
	 * @method not
	 * @return ThisExpression
	 */ UINT32.prototype.not = function() {
        this._low = ~this._low & 0xFFFF;
        this._high = ~this._high & 0xFFFF;
        return this;
    };
    /**
	 * Bitwise XOR
	 * @method xor
	 * @param {Object} other UINT32
	 * @return ThisExpression
	 */ UINT32.prototype.xor = function(other) {
        this._low ^= other._low;
        this._high ^= other._high;
        return this;
    };
    /**
	 * Bitwise shift right
	 * @method shiftRight
	 * @param {Number} number of bits to shift
	 * @return ThisExpression
	 */ UINT32.prototype.shiftRight = UINT32.prototype.shiftr = function(n) {
        if (n > 16) {
            this._low = this._high >> n - 16;
            this._high = 0;
        } else if (n == 16) {
            this._low = this._high;
            this._high = 0;
        } else {
            this._low = this._low >> n | this._high << 16 - n & 0xFFFF;
            this._high >>= n;
        }
        return this;
    };
    /**
	 * Bitwise shift left
	 * @method shiftLeft
	 * @param {Number} number of bits to shift
	 * @param {Boolean} allow overflow
	 * @return ThisExpression
	 */ UINT32.prototype.shiftLeft = UINT32.prototype.shiftl = function(n, allowOverflow) {
        if (n > 16) {
            this._high = this._low << n - 16;
            this._low = 0;
            if (!allowOverflow) {
                this._high &= 0xFFFF;
            }
        } else if (n == 16) {
            this._high = this._low;
            this._low = 0;
        } else {
            this._high = this._high << n | this._low >> 16 - n;
            this._low = this._low << n & 0xFFFF;
            if (!allowOverflow) {
                // Overflow only allowed on the high bits...
                this._high &= 0xFFFF;
            }
        }
        return this;
    };
    /**
	 * Bitwise rotate left
	 * @method rotl
	 * @param {Number} number of bits to rotate
	 * @return ThisExpression
	 */ UINT32.prototype.rotateLeft = UINT32.prototype.rotl = function(n) {
        var v = this._high << 16 | this._low;
        v = v << n | v >>> 32 - n;
        this._low = v & 0xFFFF;
        this._high = v >>> 16;
        return this;
    };
    /**
	 * Bitwise rotate right
	 * @method rotr
	 * @param {Number} number of bits to rotate
	 * @return ThisExpression
	 */ UINT32.prototype.rotateRight = UINT32.prototype.rotr = function(n) {
        var v = this._high << 16 | this._low;
        v = v >>> n | v << 32 - n;
        this._low = v & 0xFFFF;
        this._high = v >>> 16;
        return this;
    };
    /**
	 * Clone the current _UINT32_
	 * @method clone
	 * @return {Object} cloned UINT32
	 */ UINT32.prototype.clone = function() {
        return new UINT32(this._low, this._high);
    };
    if (typeof define != 'undefined' && define.amd) {
        // AMD / RequireJS
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return UINT32;
        }());
    } else if (("TURBOPACK compile-time value", "object") != 'undefined' && module.exports) {
        // Node.js
        module.exports = UINT32;
    } else {
        // Browser
        root['UINT32'] = UINT32;
    }
})(this);
}}),
"[project]/node_modules/cuint/lib/uint64.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
/**
	C-like unsigned 64 bits integers in Javascript
	Copyright (C) 2013, Pierre Curto
	MIT license
 */ ;
(function(root) {
    // Local cache for typical radices
    var radixPowerCache = {
        16: UINT64(Math.pow(16, 5)),
        10: UINT64(Math.pow(10, 5)),
        2: UINT64(Math.pow(2, 5))
    };
    var radixCache = {
        16: UINT64(16),
        10: UINT64(10),
        2: UINT64(2)
    };
    /**
	 *	Represents an unsigned 64 bits integer
	 * @constructor
	 * @param {Number} first low bits (8)
	 * @param {Number} second low bits (8)
	 * @param {Number} first high bits (8)
	 * @param {Number} second high bits (8)
	 * or
	 * @param {Number} low bits (32)
	 * @param {Number} high bits (32)
	 * or
	 * @param {String|Number} integer as a string 		 | integer as a number
	 * @param {Number|Undefined} radix (optional, default=10)
	 * @return 
	 */ function UINT64(a00, a16, a32, a48) {
        if (!(this instanceof UINT64)) return new UINT64(a00, a16, a32, a48);
        this.remainder = null;
        if (typeof a00 == 'string') return fromString.call(this, a00, a16);
        if (typeof a16 == 'undefined') return fromNumber.call(this, a00);
        fromBits.apply(this, arguments);
    }
    /**
	 * Set the current _UINT64_ object with its low and high bits
	 * @method fromBits
	 * @param {Number} first low bits (8)
	 * @param {Number} second low bits (8)
	 * @param {Number} first high bits (8)
	 * @param {Number} second high bits (8)
	 * or
	 * @param {Number} low bits (32)
	 * @param {Number} high bits (32)
	 * @return ThisExpression
	 */ function fromBits(a00, a16, a32, a48) {
        if (typeof a32 == 'undefined') {
            this._a00 = a00 & 0xFFFF;
            this._a16 = a00 >>> 16;
            this._a32 = a16 & 0xFFFF;
            this._a48 = a16 >>> 16;
            return this;
        }
        this._a00 = a00 | 0;
        this._a16 = a16 | 0;
        this._a32 = a32 | 0;
        this._a48 = a48 | 0;
        return this;
    }
    UINT64.prototype.fromBits = fromBits;
    /**
	 * Set the current _UINT64_ object from a number
	 * @method fromNumber
	 * @param {Number} number
	 * @return ThisExpression
	 */ function fromNumber(value) {
        this._a00 = value & 0xFFFF;
        this._a16 = value >>> 16;
        this._a32 = 0;
        this._a48 = 0;
        return this;
    }
    UINT64.prototype.fromNumber = fromNumber;
    /**
	 * Set the current _UINT64_ object from a string
	 * @method fromString
	 * @param {String} integer as a string
	 * @param {Number} radix (optional, default=10)
	 * @return ThisExpression
	 */ function fromString(s, radix) {
        radix = radix || 10;
        this._a00 = 0;
        this._a16 = 0;
        this._a32 = 0;
        this._a48 = 0;
        /*
			In Javascript, bitwise operators only operate on the first 32 bits 
			of a number, even though parseInt() encodes numbers with a 53 bits 
			mantissa.
			Therefore UINT64(<Number>) can only work on 32 bits.
			The radix maximum value is 36 (as per ECMA specs) (26 letters + 10 digits)
			maximum input value is m = 32bits as 1 = 2^32 - 1
			So the maximum substring length n is:
			36^(n+1) - 1 = 2^32 - 1
			36^(n+1) = 2^32
			(n+1)ln(36) = 32ln(2)
			n = 32ln(2)/ln(36) - 1
			n = 5.189644915687692
			n = 5
		 */ var radixUint = radixPowerCache[radix] || new UINT64(Math.pow(radix, 5));
        for(var i = 0, len = s.length; i < len; i += 5){
            var size = Math.min(5, len - i);
            var value = parseInt(s.slice(i, i + size), radix);
            this.multiply(size < 5 ? new UINT64(Math.pow(radix, size)) : radixUint).add(new UINT64(value));
        }
        return this;
    }
    UINT64.prototype.fromString = fromString;
    /**
	 * Convert this _UINT64_ to a number (last 32 bits are dropped)
	 * @method toNumber
	 * @return {Number} the converted UINT64
	 */ UINT64.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
    };
    /**
	 * Convert this _UINT64_ to a string
	 * @method toString
	 * @param {Number} radix (optional, default=10)
	 * @return {String} the converted UINT64
	 */ UINT64.prototype.toString = function(radix) {
        radix = radix || 10;
        var radixUint = radixCache[radix] || new UINT64(radix);
        if (!this.gt(radixUint)) return this.toNumber().toString(radix);
        var self = this.clone();
        var res = new Array(64);
        for(var i = 63; i >= 0; i--){
            self.div(radixUint);
            res[i] = self.remainder.toNumber().toString(radix);
            if (!self.gt(radixUint)) break;
        }
        res[i - 1] = self.toNumber().toString(radix);
        return res.join('');
    };
    /**
	 * Add two _UINT64_. The current _UINT64_ stores the result
	 * @method add
	 * @param {Object} other UINT64
	 * @return ThisExpression
	 */ UINT64.prototype.add = function(other) {
        var a00 = this._a00 + other._a00;
        var a16 = a00 >>> 16;
        a16 += this._a16 + other._a16;
        var a32 = a16 >>> 16;
        a32 += this._a32 + other._a32;
        var a48 = a32 >>> 16;
        a48 += this._a48 + other._a48;
        this._a00 = a00 & 0xFFFF;
        this._a16 = a16 & 0xFFFF;
        this._a32 = a32 & 0xFFFF;
        this._a48 = a48 & 0xFFFF;
        return this;
    };
    /**
	 * Subtract two _UINT64_. The current _UINT64_ stores the result
	 * @method subtract
	 * @param {Object} other UINT64
	 * @return ThisExpression
	 */ UINT64.prototype.subtract = function(other) {
        return this.add(other.clone().negate());
    };
    /**
	 * Multiply two _UINT64_. The current _UINT64_ stores the result
	 * @method multiply
	 * @param {Object} other UINT64
	 * @return ThisExpression
	 */ UINT64.prototype.multiply = function(other) {
        /*
			a = a00 + a16 + a32 + a48
			b = b00 + b16 + b32 + b48
			a*b = (a00 + a16 + a32 + a48)(b00 + b16 + b32 + b48)
				= a00b00 + a00b16 + a00b32 + a00b48
				+ a16b00 + a16b16 + a16b32 + a16b48
				+ a32b00 + a32b16 + a32b32 + a32b48
				+ a48b00 + a48b16 + a48b32 + a48b48

			a16b48, a32b32, a48b16, a48b32 and a48b48 overflow the 64 bits
			so it comes down to:
			a*b	= a00b00 + a00b16 + a00b32 + a00b48
				+ a16b00 + a16b16 + a16b32
				+ a32b00 + a32b16
				+ a48b00
				= a00b00
				+ a00b16 + a16b00
				+ a00b32 + a16b16 + a32b00
				+ a00b48 + a16b32 + a32b16 + a48b00
		 */ var a00 = this._a00;
        var a16 = this._a16;
        var a32 = this._a32;
        var a48 = this._a48;
        var b00 = other._a00;
        var b16 = other._a16;
        var b32 = other._a32;
        var b48 = other._a48;
        var c00 = a00 * b00;
        var c16 = c00 >>> 16;
        c16 += a00 * b16;
        var c32 = c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c32 += a00 * b32;
        var c48 = c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c48 += a00 * b48;
        c48 &= 0xFFFF;
        c48 += a16 * b32;
        c48 &= 0xFFFF;
        c48 += a32 * b16;
        c48 &= 0xFFFF;
        c48 += a48 * b00;
        this._a00 = c00 & 0xFFFF;
        this._a16 = c16 & 0xFFFF;
        this._a32 = c32 & 0xFFFF;
        this._a48 = c48 & 0xFFFF;
        return this;
    };
    /**
	 * Divide two _UINT64_. The current _UINT64_ stores the result.
	 * The remainder is made available as the _remainder_ property on
	 * the _UINT64_ object. It can be null, meaning there are no remainder.
	 * @method div
	 * @param {Object} other UINT64
	 * @return ThisExpression
	 */ UINT64.prototype.div = function(other) {
        if (other._a16 == 0 && other._a32 == 0 && other._a48 == 0) {
            if (other._a00 == 0) throw Error('division by zero');
            // other == 1: this
            if (other._a00 == 1) {
                this.remainder = new UINT64(0);
                return this;
            }
        }
        // other > this: 0
        if (other.gt(this)) {
            this.remainder = this.clone();
            this._a00 = 0;
            this._a16 = 0;
            this._a32 = 0;
            this._a48 = 0;
            return this;
        }
        // other == this: 1
        if (this.eq(other)) {
            this.remainder = new UINT64(0);
            this._a00 = 1;
            this._a16 = 0;
            this._a32 = 0;
            this._a48 = 0;
            return this;
        }
        // Shift the divisor left until it is higher than the dividend
        var _other = other.clone();
        var i = -1;
        while(!this.lt(_other)){
            // High bit can overflow the default 16bits
            // Its ok since we right shift after this loop
            // The overflown bit must be kept though
            _other.shiftLeft(1, true);
            i++;
        }
        // Set the remainder
        this.remainder = this.clone();
        // Initialize the current result to 0
        this._a00 = 0;
        this._a16 = 0;
        this._a32 = 0;
        this._a48 = 0;
        for(; i >= 0; i--){
            _other.shiftRight(1);
            // If shifted divisor is smaller than the dividend
            // then subtract it from the dividend
            if (!this.remainder.lt(_other)) {
                this.remainder.subtract(_other);
                // Update the current result
                if (i >= 48) {
                    this._a48 |= 1 << i - 48;
                } else if (i >= 32) {
                    this._a32 |= 1 << i - 32;
                } else if (i >= 16) {
                    this._a16 |= 1 << i - 16;
                } else {
                    this._a00 |= 1 << i;
                }
            }
        }
        return this;
    };
    /**
	 * Negate the current _UINT64_
	 * @method negate
	 * @return ThisExpression
	 */ UINT64.prototype.negate = function() {
        var v = (~this._a00 & 0xFFFF) + 1;
        this._a00 = v & 0xFFFF;
        v = (~this._a16 & 0xFFFF) + (v >>> 16);
        this._a16 = v & 0xFFFF;
        v = (~this._a32 & 0xFFFF) + (v >>> 16);
        this._a32 = v & 0xFFFF;
        this._a48 = ~this._a48 + (v >>> 16) & 0xFFFF;
        return this;
    };
    /**

	 * @method eq
	 * @param {Object} other UINT64
	 * @return {Boolean}
	 */ UINT64.prototype.equals = UINT64.prototype.eq = function(other) {
        return this._a48 == other._a48 && this._a00 == other._a00 && this._a32 == other._a32 && this._a16 == other._a16;
    };
    /**
	 * Greater than (strict)
	 * @method gt
	 * @param {Object} other UINT64
	 * @return {Boolean}
	 */ UINT64.prototype.greaterThan = UINT64.prototype.gt = function(other) {
        if (this._a48 > other._a48) return true;
        if (this._a48 < other._a48) return false;
        if (this._a32 > other._a32) return true;
        if (this._a32 < other._a32) return false;
        if (this._a16 > other._a16) return true;
        if (this._a16 < other._a16) return false;
        return this._a00 > other._a00;
    };
    /**
	 * Less than (strict)
	 * @method lt
	 * @param {Object} other UINT64
	 * @return {Boolean}
	 */ UINT64.prototype.lessThan = UINT64.prototype.lt = function(other) {
        if (this._a48 < other._a48) return true;
        if (this._a48 > other._a48) return false;
        if (this._a32 < other._a32) return true;
        if (this._a32 > other._a32) return false;
        if (this._a16 < other._a16) return true;
        if (this._a16 > other._a16) return false;
        return this._a00 < other._a00;
    };
    /**
	 * Bitwise OR
	 * @method or
	 * @param {Object} other UINT64
	 * @return ThisExpression
	 */ UINT64.prototype.or = function(other) {
        this._a00 |= other._a00;
        this._a16 |= other._a16;
        this._a32 |= other._a32;
        this._a48 |= other._a48;
        return this;
    };
    /**
	 * Bitwise AND
	 * @method and
	 * @param {Object} other UINT64
	 * @return ThisExpression
	 */ UINT64.prototype.and = function(other) {
        this._a00 &= other._a00;
        this._a16 &= other._a16;
        this._a32 &= other._a32;
        this._a48 &= other._a48;
        return this;
    };
    /**
	 * Bitwise XOR
	 * @method xor
	 * @param {Object} other UINT64
	 * @return ThisExpression
	 */ UINT64.prototype.xor = function(other) {
        this._a00 ^= other._a00;
        this._a16 ^= other._a16;
        this._a32 ^= other._a32;
        this._a48 ^= other._a48;
        return this;
    };
    /**
	 * Bitwise NOT
	 * @method not
	 * @return ThisExpression
	 */ UINT64.prototype.not = function() {
        this._a00 = ~this._a00 & 0xFFFF;
        this._a16 = ~this._a16 & 0xFFFF;
        this._a32 = ~this._a32 & 0xFFFF;
        this._a48 = ~this._a48 & 0xFFFF;
        return this;
    };
    /**
	 * Bitwise shift right
	 * @method shiftRight
	 * @param {Number} number of bits to shift
	 * @return ThisExpression
	 */ UINT64.prototype.shiftRight = UINT64.prototype.shiftr = function(n) {
        n %= 64;
        if (n >= 48) {
            this._a00 = this._a48 >> n - 48;
            this._a16 = 0;
            this._a32 = 0;
            this._a48 = 0;
        } else if (n >= 32) {
            n -= 32;
            this._a00 = (this._a32 >> n | this._a48 << 16 - n) & 0xFFFF;
            this._a16 = this._a48 >> n & 0xFFFF;
            this._a32 = 0;
            this._a48 = 0;
        } else if (n >= 16) {
            n -= 16;
            this._a00 = (this._a16 >> n | this._a32 << 16 - n) & 0xFFFF;
            this._a16 = (this._a32 >> n | this._a48 << 16 - n) & 0xFFFF;
            this._a32 = this._a48 >> n & 0xFFFF;
            this._a48 = 0;
        } else {
            this._a00 = (this._a00 >> n | this._a16 << 16 - n) & 0xFFFF;
            this._a16 = (this._a16 >> n | this._a32 << 16 - n) & 0xFFFF;
            this._a32 = (this._a32 >> n | this._a48 << 16 - n) & 0xFFFF;
            this._a48 = this._a48 >> n & 0xFFFF;
        }
        return this;
    };
    /**
	 * Bitwise shift left
	 * @method shiftLeft
	 * @param {Number} number of bits to shift
	 * @param {Boolean} allow overflow
	 * @return ThisExpression
	 */ UINT64.prototype.shiftLeft = UINT64.prototype.shiftl = function(n, allowOverflow) {
        n %= 64;
        if (n >= 48) {
            this._a48 = this._a00 << n - 48;
            this._a32 = 0;
            this._a16 = 0;
            this._a00 = 0;
        } else if (n >= 32) {
            n -= 32;
            this._a48 = this._a16 << n | this._a00 >> 16 - n;
            this._a32 = this._a00 << n & 0xFFFF;
            this._a16 = 0;
            this._a00 = 0;
        } else if (n >= 16) {
            n -= 16;
            this._a48 = this._a32 << n | this._a16 >> 16 - n;
            this._a32 = (this._a16 << n | this._a00 >> 16 - n) & 0xFFFF;
            this._a16 = this._a00 << n & 0xFFFF;
            this._a00 = 0;
        } else {
            this._a48 = this._a48 << n | this._a32 >> 16 - n;
            this._a32 = (this._a32 << n | this._a16 >> 16 - n) & 0xFFFF;
            this._a16 = (this._a16 << n | this._a00 >> 16 - n) & 0xFFFF;
            this._a00 = this._a00 << n & 0xFFFF;
        }
        if (!allowOverflow) {
            this._a48 &= 0xFFFF;
        }
        return this;
    };
    /**
	 * Bitwise rotate left
	 * @method rotl
	 * @param {Number} number of bits to rotate
	 * @return ThisExpression
	 */ UINT64.prototype.rotateLeft = UINT64.prototype.rotl = function(n) {
        n %= 64;
        if (n == 0) return this;
        if (n >= 32) {
            // A.B.C.D
            // B.C.D.A rotl(16)
            // C.D.A.B rotl(32)
            var v = this._a00;
            this._a00 = this._a32;
            this._a32 = v;
            v = this._a48;
            this._a48 = this._a16;
            this._a16 = v;
            if (n == 32) return this;
            n -= 32;
        }
        var high = this._a48 << 16 | this._a32;
        var low = this._a16 << 16 | this._a00;
        var _high = high << n | low >>> 32 - n;
        var _low = low << n | high >>> 32 - n;
        this._a00 = _low & 0xFFFF;
        this._a16 = _low >>> 16;
        this._a32 = _high & 0xFFFF;
        this._a48 = _high >>> 16;
        return this;
    };
    /**
	 * Bitwise rotate right
	 * @method rotr
	 * @param {Number} number of bits to rotate
	 * @return ThisExpression
	 */ UINT64.prototype.rotateRight = UINT64.prototype.rotr = function(n) {
        n %= 64;
        if (n == 0) return this;
        if (n >= 32) {
            // A.B.C.D
            // D.A.B.C rotr(16)
            // C.D.A.B rotr(32)
            var v = this._a00;
            this._a00 = this._a32;
            this._a32 = v;
            v = this._a48;
            this._a48 = this._a16;
            this._a16 = v;
            if (n == 32) return this;
            n -= 32;
        }
        var high = this._a48 << 16 | this._a32;
        var low = this._a16 << 16 | this._a00;
        var _high = high >>> n | low << 32 - n;
        var _low = low >>> n | high << 32 - n;
        this._a00 = _low & 0xFFFF;
        this._a16 = _low >>> 16;
        this._a32 = _high & 0xFFFF;
        this._a48 = _high >>> 16;
        return this;
    };
    /**
	 * Clone the current _UINT64_
	 * @method clone
	 * @return {Object} cloned UINT64
	 */ UINT64.prototype.clone = function() {
        return new UINT64(this._a00, this._a16, this._a32, this._a48);
    };
    if (typeof define != 'undefined' && define.amd) {
        // AMD / RequireJS
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return UINT64;
        }());
    } else if (("TURBOPACK compile-time value", "object") != 'undefined' && module.exports) {
        // Node.js
        module.exports = UINT64;
    } else {
        // Browser
        root['UINT64'] = UINT64;
    }
})(this);
}}),
"[project]/node_modules/cuint/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
exports.UINT32 = __turbopack_context__.r("[project]/node_modules/cuint/lib/uint32.js [app-rsc] (ecmascript)");
exports.UINT64 = __turbopack_context__.r("[project]/node_modules/cuint/lib/uint64.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/xxhashjs/lib/xxhash.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
/**
xxHash implementation in pure Javascript

Copyright (C) 2013, Pierre Curto
MIT license
*/ var UINT32 = __turbopack_context__.r("[project]/node_modules/cuint/index.js [app-rsc] (ecmascript)").UINT32;
/*
	Merged this sequence of method calls as it speeds up
	the calculations by a factor of 2
 */ // this.v1.add( other.multiply(PRIME32_2) ).rotl(13).multiply(PRIME32_1);
UINT32.prototype.xxh_update = function(low, high) {
    var b00 = PRIME32_2._low;
    var b16 = PRIME32_2._high;
    var c16, c00;
    c00 = low * b00;
    c16 = c00 >>> 16;
    c16 += high * b00;
    c16 &= 0xFFFF; // Not required but improves performance
    c16 += low * b16;
    var a00 = this._low + (c00 & 0xFFFF);
    var a16 = a00 >>> 16;
    a16 += this._high + (c16 & 0xFFFF);
    var v = a16 << 16 | a00 & 0xFFFF;
    v = v << 13 | v >>> 19;
    a00 = v & 0xFFFF;
    a16 = v >>> 16;
    b00 = PRIME32_1._low;
    b16 = PRIME32_1._high;
    c00 = a00 * b00;
    c16 = c00 >>> 16;
    c16 += a16 * b00;
    c16 &= 0xFFFF; // Not required but improves performance
    c16 += a00 * b16;
    this._low = c00 & 0xFFFF;
    this._high = c16 & 0xFFFF;
};
/*
 * Constants
 */ var PRIME32_1 = UINT32('2654435761');
var PRIME32_2 = UINT32('2246822519');
var PRIME32_3 = UINT32('3266489917');
var PRIME32_4 = UINT32('668265263');
var PRIME32_5 = UINT32('374761393');
/**
* Convert string to proper UTF-8 array
* @param str Input string
* @returns {Uint8Array} UTF8 array is returned as uint8 array
*/ function toUTF8Array(str) {
    var utf8 = [];
    for(var i = 0, n = str.length; i < n; i++){
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        } else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
            utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        }
    }
    return new Uint8Array(utf8);
}
/**
 * XXH object used as a constructor or a function
 * @constructor
 * or
 * @param {Object|String} input data
 * @param {Number|UINT32} seed
 * @return ThisExpression
 * or
 * @return {UINT32} xxHash
 */ function XXH() {
    if (arguments.length == 2) return new XXH(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof XXH)) return new XXH(arguments[0]);
    init.call(this, arguments[0]);
}
/**
 * Initialize the XXH instance with the given seed
 * @method init
 * @param {Number|Object} seed as a number or an unsigned 32 bits integer
 * @return ThisExpression
 */ function init(seed) {
    this.seed = seed instanceof UINT32 ? seed.clone() : UINT32(seed);
    this.v1 = this.seed.clone().add(PRIME32_1).add(PRIME32_2);
    this.v2 = this.seed.clone().add(PRIME32_2);
    this.v3 = this.seed.clone();
    this.v4 = this.seed.clone().subtract(PRIME32_1);
    this.total_len = 0;
    this.memsize = 0;
    this.memory = null;
    return this;
}
XXH.prototype.init = init;
/**
 * Add data to be computed for the XXH hash
 * @method update
 * @param {String|Buffer|ArrayBuffer} input as a string or nodejs Buffer or ArrayBuffer
 * @return ThisExpression
 */ XXH.prototype.update = function(input) {
    var isString = typeof input == 'string';
    var isArrayBuffer;
    // Convert all strings to utf-8 first (issue #5)
    if (isString) {
        input = toUTF8Array(input);
        isString = false;
        isArrayBuffer = true;
    }
    if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) {
        isArrayBuffer = true;
        input = new Uint8Array(input);
    }
    var p = 0;
    var len = input.length;
    var bEnd = p + len;
    if (len == 0) return this;
    this.total_len += len;
    if (this.memsize == 0) {
        if (isString) {
            this.memory = '';
        } else if (isArrayBuffer) {
            this.memory = new Uint8Array(16);
        } else {
            this.memory = new Buffer(16);
        }
    }
    if (this.memsize + len < 16) {
        // XXH_memcpy(this.memory + this.memsize, input, len)
        if (isString) {
            this.memory += input;
        } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, len), this.memsize);
        } else {
            input.copy(this.memory, this.memsize, 0, len);
        }
        this.memsize += len;
        return this;
    }
    if (this.memsize > 0) {
        // XXH_memcpy(this.memory + this.memsize, input, 16-this.memsize);
        if (isString) {
            this.memory += input.slice(0, 16 - this.memsize);
        } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, 16 - this.memsize), this.memsize);
        } else {
            input.copy(this.memory, this.memsize, 0, 16 - this.memsize);
        }
        var p32 = 0;
        if (isString) {
            this.v1.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
            p32 += 4;
            this.v2.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
            p32 += 4;
            this.v3.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
            p32 += 4;
            this.v4.xxh_update(this.memory.charCodeAt(p32 + 1) << 8 | this.memory.charCodeAt(p32), this.memory.charCodeAt(p32 + 3) << 8 | this.memory.charCodeAt(p32 + 2));
        } else {
            this.v1.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
            p32 += 4;
            this.v2.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
            p32 += 4;
            this.v3.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
            p32 += 4;
            this.v4.xxh_update(this.memory[p32 + 1] << 8 | this.memory[p32], this.memory[p32 + 3] << 8 | this.memory[p32 + 2]);
        }
        p += 16 - this.memsize;
        this.memsize = 0;
        if (isString) this.memory = '';
    }
    if (p <= bEnd - 16) {
        var limit = bEnd - 16;
        do {
            if (isString) {
                this.v1.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
                p += 4;
                this.v2.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
                p += 4;
                this.v3.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
                p += 4;
                this.v4.xxh_update(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
            } else {
                this.v1.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
                p += 4;
                this.v2.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
                p += 4;
                this.v3.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
                p += 4;
                this.v4.xxh_update(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
            }
            p += 4;
        }while (p <= limit)
    }
    if (p < bEnd) {
        // XXH_memcpy(this.memory, p, bEnd-p);
        if (isString) {
            this.memory += input.slice(p);
        } else if (isArrayBuffer) {
            this.memory.set(input.subarray(p, bEnd), this.memsize);
        } else {
            input.copy(this.memory, this.memsize, p, bEnd);
        }
        this.memsize = bEnd - p;
    }
    return this;
};
/**
 * Finalize the XXH computation. The XXH instance is ready for reuse for the given seed
 * @method digest
 * @return {UINT32} xxHash
 */ XXH.prototype.digest = function() {
    var input = this.memory;
    var isString = typeof input == 'string';
    var p = 0;
    var bEnd = this.memsize;
    var h32, h;
    var u = new UINT32;
    if (this.total_len >= 16) {
        h32 = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18))));
    } else {
        h32 = this.seed.clone().add(PRIME32_5);
    }
    h32.add(u.fromNumber(this.total_len));
    while(p <= bEnd - 4){
        if (isString) {
            u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2));
        } else {
            u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2]);
        }
        h32.add(u.multiply(PRIME32_3)).rotl(17).multiply(PRIME32_4);
        p += 4;
    }
    while(p < bEnd){
        u.fromBits(isString ? input.charCodeAt(p++) : input[p++], 0);
        h32.add(u.multiply(PRIME32_5)).rotl(11).multiply(PRIME32_1);
    }
    h = h32.clone().shiftRight(15);
    h32.xor(h).multiply(PRIME32_2);
    h = h32.clone().shiftRight(13);
    h32.xor(h).multiply(PRIME32_3);
    h = h32.clone().shiftRight(16);
    h32.xor(h);
    // Reset the state
    this.init(this.seed);
    return h32;
};
module.exports = XXH;
}}),
"[project]/node_modules/xxhashjs/lib/xxhash64.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
/**
xxHash64 implementation in pure Javascript

Copyright (C) 2016, Pierre Curto
MIT license
*/ var UINT64 = __turbopack_context__.r("[project]/node_modules/cuint/index.js [app-rsc] (ecmascript)").UINT64;
/*
 * Constants
 */ var PRIME64_1 = UINT64('11400714785074694791');
var PRIME64_2 = UINT64('14029467366897019727');
var PRIME64_3 = UINT64('1609587929392839161');
var PRIME64_4 = UINT64('9650029242287828579');
var PRIME64_5 = UINT64('2870177450012600261');
/**
* Convert string to proper UTF-8 array
* @param str Input string
* @returns {Uint8Array} UTF8 array is returned as uint8 array
*/ function toUTF8Array(str) {
    var utf8 = [];
    for(var i = 0, n = str.length; i < n; i++){
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        } else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
            utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
        }
    }
    return new Uint8Array(utf8);
}
/**
 * XXH64 object used as a constructor or a function
 * @constructor
 * or
 * @param {Object|String} input data
 * @param {Number|UINT64} seed
 * @return ThisExpression
 * or
 * @return {UINT64} xxHash
 */ function XXH64() {
    if (arguments.length == 2) return new XXH64(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof XXH64)) return new XXH64(arguments[0]);
    init.call(this, arguments[0]);
}
/**
 * Initialize the XXH64 instance with the given seed
 * @method init
 * @param {Number|Object} seed as a number or an unsigned 32 bits integer
 * @return ThisExpression
 */ function init(seed) {
    this.seed = seed instanceof UINT64 ? seed.clone() : UINT64(seed);
    this.v1 = this.seed.clone().add(PRIME64_1).add(PRIME64_2);
    this.v2 = this.seed.clone().add(PRIME64_2);
    this.v3 = this.seed.clone();
    this.v4 = this.seed.clone().subtract(PRIME64_1);
    this.total_len = 0;
    this.memsize = 0;
    this.memory = null;
    return this;
}
XXH64.prototype.init = init;
/**
 * Add data to be computed for the XXH64 hash
 * @method update
 * @param {String|Buffer|ArrayBuffer} input as a string or nodejs Buffer or ArrayBuffer
 * @return ThisExpression
 */ XXH64.prototype.update = function(input) {
    var isString = typeof input == 'string';
    var isArrayBuffer;
    // Convert all strings to utf-8 first (issue #5)
    if (isString) {
        input = toUTF8Array(input);
        isString = false;
        isArrayBuffer = true;
    }
    if (typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer) {
        isArrayBuffer = true;
        input = new Uint8Array(input);
    }
    var p = 0;
    var len = input.length;
    var bEnd = p + len;
    if (len == 0) return this;
    this.total_len += len;
    if (this.memsize == 0) {
        if (isString) {
            this.memory = '';
        } else if (isArrayBuffer) {
            this.memory = new Uint8Array(32);
        } else {
            this.memory = new Buffer(32);
        }
    }
    if (this.memsize + len < 32) {
        // XXH64_memcpy(this.memory + this.memsize, input, len)
        if (isString) {
            this.memory += input;
        } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, len), this.memsize);
        } else {
            input.copy(this.memory, this.memsize, 0, len);
        }
        this.memsize += len;
        return this;
    }
    if (this.memsize > 0) {
        // XXH64_memcpy(this.memory + this.memsize, input, 16-this.memsize);
        if (isString) {
            this.memory += input.slice(0, 32 - this.memsize);
        } else if (isArrayBuffer) {
            this.memory.set(input.subarray(0, 32 - this.memsize), this.memsize);
        } else {
            input.copy(this.memory, this.memsize, 0, 32 - this.memsize);
        }
        var p64 = 0;
        if (isString) {
            var other;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory.charCodeAt(p64 + 1) << 8 | this.memory.charCodeAt(p64), this.memory.charCodeAt(p64 + 3) << 8 | this.memory.charCodeAt(p64 + 2), this.memory.charCodeAt(p64 + 5) << 8 | this.memory.charCodeAt(p64 + 4), this.memory.charCodeAt(p64 + 7) << 8 | this.memory.charCodeAt(p64 + 6));
            this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
        } else {
            var other;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            p64 += 8;
            other = UINT64(this.memory[p64 + 1] << 8 | this.memory[p64], this.memory[p64 + 3] << 8 | this.memory[p64 + 2], this.memory[p64 + 5] << 8 | this.memory[p64 + 4], this.memory[p64 + 7] << 8 | this.memory[p64 + 6]);
            this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
        }
        p += 32 - this.memsize;
        this.memsize = 0;
        if (isString) this.memory = '';
    }
    if (p <= bEnd - 32) {
        var limit = bEnd - 32;
        do {
            if (isString) {
                var other;
                other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
                this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
                p += 8;
                other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
                this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
                p += 8;
                other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
                this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
                p += 8;
                other = UINT64(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
                this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            } else {
                var other;
                other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
                this.v1.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
                p += 8;
                other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
                this.v2.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
                p += 8;
                other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
                this.v3.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
                p += 8;
                other = UINT64(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
                this.v4.add(other.multiply(PRIME64_2)).rotl(31).multiply(PRIME64_1);
            }
            p += 8;
        }while (p <= limit)
    }
    if (p < bEnd) {
        // XXH64_memcpy(this.memory, p, bEnd-p);
        if (isString) {
            this.memory += input.slice(p);
        } else if (isArrayBuffer) {
            this.memory.set(input.subarray(p, bEnd), this.memsize);
        } else {
            input.copy(this.memory, this.memsize, p, bEnd);
        }
        this.memsize = bEnd - p;
    }
    return this;
};
/**
 * Finalize the XXH64 computation. The XXH64 instance is ready for reuse for the given seed
 * @method digest
 * @return {UINT64} xxHash
 */ XXH64.prototype.digest = function() {
    var input = this.memory;
    var isString = typeof input == 'string';
    var p = 0;
    var bEnd = this.memsize;
    var h64, h;
    var u = new UINT64;
    if (this.total_len >= 32) {
        h64 = this.v1.clone().rotl(1);
        h64.add(this.v2.clone().rotl(7));
        h64.add(this.v3.clone().rotl(12));
        h64.add(this.v4.clone().rotl(18));
        h64.xor(this.v1.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
        h64.multiply(PRIME64_1).add(PRIME64_4);
        h64.xor(this.v2.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
        h64.multiply(PRIME64_1).add(PRIME64_4);
        h64.xor(this.v3.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
        h64.multiply(PRIME64_1).add(PRIME64_4);
        h64.xor(this.v4.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1));
        h64.multiply(PRIME64_1).add(PRIME64_4);
    } else {
        h64 = this.seed.clone().add(PRIME64_5);
    }
    h64.add(u.fromNumber(this.total_len));
    while(p <= bEnd - 8){
        if (isString) {
            u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), input.charCodeAt(p + 5) << 8 | input.charCodeAt(p + 4), input.charCodeAt(p + 7) << 8 | input.charCodeAt(p + 6));
        } else {
            u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], input[p + 5] << 8 | input[p + 4], input[p + 7] << 8 | input[p + 6]);
        }
        u.multiply(PRIME64_2).rotl(31).multiply(PRIME64_1);
        h64.xor(u).rotl(27).multiply(PRIME64_1).add(PRIME64_4);
        p += 8;
    }
    if (p + 4 <= bEnd) {
        if (isString) {
            u.fromBits(input.charCodeAt(p + 1) << 8 | input.charCodeAt(p), input.charCodeAt(p + 3) << 8 | input.charCodeAt(p + 2), 0, 0);
        } else {
            u.fromBits(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], 0, 0);
        }
        h64.xor(u.multiply(PRIME64_1)).rotl(23).multiply(PRIME64_2).add(PRIME64_3);
        p += 4;
    }
    while(p < bEnd){
        u.fromBits(isString ? input.charCodeAt(p++) : input[p++], 0, 0, 0);
        h64.xor(u.multiply(PRIME64_5)).rotl(11).multiply(PRIME64_1);
    }
    h = h64.clone().shiftRight(33);
    h64.xor(h).multiply(PRIME64_2);
    h = h64.clone().shiftRight(29);
    h64.xor(h).multiply(PRIME64_3);
    h = h64.clone().shiftRight(32);
    h64.xor(h);
    // Reset the state
    this.init(this.seed);
    return h64;
};
module.exports = XXH64;
}}),
"[project]/node_modules/xxhashjs/lib/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = {
    h32: __turbopack_context__.r("[project]/node_modules/xxhashjs/lib/xxhash.js [app-rsc] (ecmascript)"),
    h64: __turbopack_context__.r("[project]/node_modules/xxhashjs/lib/xxhash64.js [app-rsc] (ecmascript)")
};
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/anthropic.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=anthropic.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/gemini.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GeminiAiAdapter = void 0;
var GeminiAiAdapter;
(function(GeminiAiAdapter) {
    let HarmCategory;
    (function(HarmCategory) {
        HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
        HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
        HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
        HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
        HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
        HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
    })(HarmCategory = GeminiAiAdapter.HarmCategory || (GeminiAiAdapter.HarmCategory = {}));
    let HarmBlockThreshold;
    (function(HarmBlockThreshold) {
        HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
        HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
        HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
        HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
        HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
        HarmBlockThreshold["OFF"] = "OFF";
    })(HarmBlockThreshold = GeminiAiAdapter.HarmBlockThreshold || (GeminiAiAdapter.HarmBlockThreshold = {}));
})(GeminiAiAdapter || (exports.GeminiAiAdapter = GeminiAiAdapter = {})); //# sourceMappingURL=gemini.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/openai.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=openai.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/grok.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=grok.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/anthropic.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/gemini.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/openai.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/grok.js [app-rsc] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/env.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.envKeys = exports.processEnv = exports.allProcessEnv = void 0;
/**
 * allProcessEnv returns the current process environment variables, or an empty
 * object if they cannot be read, making sure we support environments other than
 * Node such as Deno, too.
 *
 * Using this ensures we don't dangerously access `process.env` in environments
 * where it may not be defined, such as Deno or the browser.
 */ const allProcessEnv = ()=>{
    // Node, or Node-like environments
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            return process.env;
        }
    } catch (_err) {
    // noop
    }
    // Deno
    try {
        const env = Deno.env.toObject();
        if (env) {
            return env;
        }
    } catch (_err) {
    // noop
    }
    // Netlify
    try {
        const env = Netlify.env.toObject();
        if (env) {
            return env;
        }
    } catch (_err) {
    // noop
    }
    return {};
};
exports.allProcessEnv = allProcessEnv;
const processEnv = (key)=>{
    return (0, exports.allProcessEnv)()[key];
};
exports.processEnv = processEnv;
var envKeys;
(function(envKeys) {
    envKeys["OpenAiApiKey"] = "OPENAI_API_KEY";
    envKeys["GeminiApiKey"] = "GEMINI_API_KEY";
    envKeys["AnthropicApiKey"] = "ANTHROPIC_API_KEY";
    envKeys["DeepSeekApiKey"] = "DEEPSEEK_API_KEY";
    envKeys["GrokApiKey"] = "XAI_API_KEY";
})(envKeys || (exports.envKeys = envKeys = {})); //# sourceMappingURL=env.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/anthropic.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.anthropic = void 0;
const env_1 = __turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/env.js [app-rsc] (ecmascript)");
/**
 * Create an Anthropic model using the Anthropic chat format.
 *
 * By default it targets the `https://api.anthropic.com/v1/` base URL, with the
 * "2023-06-01" anthropic-version header.
 */ const anthropic = (options)=>{
    var _a, _b;
    const authKey = options.apiKey || (0, env_1.processEnv)(env_1.envKeys.AnthropicApiKey) || "";
    // Ensure we add a trailing slash to our base URL if it doesn't have one,
    // otherwise we'll replace the path instead of appending it.
    let baseUrl = options.baseUrl || "https://api.anthropic.com/v1/";
    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }
    const url = new URL("messages", baseUrl);
    const headers = {
        "anthropic-version": "2023-06-01"
    };
    if ((((_a = options.betaHeaders) === null || _a === void 0 ? void 0 : _a.length) || 0) > 0) {
        headers["anthropic-beta"] = ((_b = options.betaHeaders) === null || _b === void 0 ? void 0 : _b.join(",")) || "";
    }
    return {
        url: url.href,
        authKey,
        format: "anthropic",
        onCall (_, body) {
            Object.assign(body, options.defaultParameters);
            body.model || (body.model = options.model);
        },
        headers,
        options
    };
};
exports.anthropic = anthropic; //# sourceMappingURL=anthropic.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/gemini.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gemini = void 0;
const env_1 = __turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/env.js [app-rsc] (ecmascript)");
/**
 * Create a Gemini model using the OpenAI chat format.
 *
 * By default it targets the `https://generativelanguage.googleapis.com/v1beta/`
 * base URL.
 */ const gemini = (options)=>{
    const authKey = options.apiKey || (0, env_1.processEnv)(env_1.envKeys.GeminiApiKey) || "";
    // Ensure we add a trailing slash to our base URL if it doesn't have one,
    // otherwise we'll replace the path instead of appending it.
    let baseUrl = options.baseUrl || "https://generativelanguage.googleapis.com/v1beta/";
    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }
    const url = new URL(`models/${options.model}:generateContent?key=${authKey}`, baseUrl);
    const headers = {};
    return {
        url: url.href,
        authKey,
        format: "gemini",
        onCall (_, body) {
            Object.assign(body, options.defaultParameters);
        },
        headers,
        options
    };
};
exports.gemini = gemini; //# sourceMappingURL=gemini.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/openai.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.openai = void 0;
const env_1 = __turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/env.js [app-rsc] (ecmascript)");
/**
 * Create an OpenAI model using the OpenAI chat format.
 *
 * By default it targets the `https://api.openai.com/v1/` base URL.
 */ const openai = (options)=>{
    const authKey = options.apiKey || (0, env_1.processEnv)(env_1.envKeys.OpenAiApiKey) || "";
    // Ensure we add a trailing slash to our base URL if it doesn't have one,
    // otherwise we'll replace the path instead of appending it.
    let baseUrl = options.baseUrl || "https://api.openai.com/v1/";
    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }
    const url = new URL("chat/completions", baseUrl);
    return {
        url: url.href,
        authKey,
        format: "openai-chat",
        onCall (_, body) {
            Object.assign(body, options.defaultParameters);
            body.model || (body.model = options.model);
        },
        options
    };
};
exports.openai = openai; //# sourceMappingURL=openai.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/deepseek.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deepseek = void 0;
const env_1 = __turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/env.js [app-rsc] (ecmascript)");
/**
 * Create a DeepSeek model using the OpenAI-compatible chat format.
 *
 * By default it targets the `https://api.deepseek.com/v1/` base URL.
 */ const deepseek = (options)=>{
    const authKey = options.apiKey || (0, env_1.processEnv)(env_1.envKeys.DeepSeekApiKey) || "";
    // Ensure we add a trailing slash to our base URL if it doesn't have one,
    // otherwise we'll replace the path instead of appending it.
    let baseUrl = options.baseUrl || "https://api.deepseek.com/v1/";
    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }
    const url = new URL("chat/completions", baseUrl);
    return {
        url: url.href,
        authKey,
        format: "openai-chat",
        onCall (_, body) {
            Object.assign(body, options.defaultParameters);
            body.model || (body.model = options.model);
        },
        options
    };
};
exports.deepseek = deepseek; //# sourceMappingURL=deepseek.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/grok.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.grok = void 0;
const env_1 = __turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/env.js [app-rsc] (ecmascript)");
const openai_js_1 = __turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/openai.js [app-rsc] (ecmascript)");
/**
 * Create a Grok model using the OpenAI chat format.
 *
 * By default it targets the `https://api.x.ai/v1`
 * base URL.
 */ const grok = (options)=>{
    const apiKey = options.apiKey || (0, env_1.processEnv)(env_1.envKeys.GrokApiKey);
    const baseUrl = options.baseUrl || "https://api.x.ai/v1";
    const model = options.model;
    const adapter = (0, openai_js_1.openai)(Object.assign(Object.assign({}, options), {
        apiKey,
        baseUrl,
        model
    }));
    adapter.format = "grok";
    return adapter;
};
exports.grok = grok; //# sourceMappingURL=grok.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/anthropic.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/gemini.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/openai.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/deepseek.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/grok.js [app-rsc] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/adapters/index.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/models/index.js [app-rsc] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/ulidx/dist/node/index.cjs [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
'use strict';
var crypto = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
function assertError(err) {
    if (!isError(err)) {
        throw new Error("Parameter was not an error");
    }
}
function isError(err) {
    return !!err && typeof err === "object" && objectToString(err) === "[object Error]" || err instanceof Error;
}
function objectToString(obj) {
    return Object.prototype.toString.call(obj);
}
const NAME = "Layerr";
let __name = NAME;
function getGlobalName() {
    return __name;
}
function parseArguments(args) {
    let options, shortMessage = "";
    if (args.length === 0) {
        options = {};
    } else if (isError(args[0])) {
        options = {
            cause: args[0]
        };
        shortMessage = args.slice(1).join(" ") || "";
    } else if (args[0] && typeof args[0] === "object") {
        options = Object.assign({}, args[0]);
        shortMessage = args.slice(1).join(" ") || "";
    } else if (typeof args[0] === "string") {
        options = {};
        shortMessage = shortMessage = args.join(" ") || "";
    } else {
        throw new Error("Invalid arguments passed to Layerr");
    }
    return {
        options,
        shortMessage
    };
}
class Layerr extends Error {
    constructor(errorOptionsOrMessage, messageText){
        const args = [
            ...arguments
        ];
        const { options, shortMessage } = parseArguments(args);
        let message = shortMessage;
        if (options.cause) {
            message = `${message}: ${options.cause.message}`;
        }
        super(message);
        this.message = message;
        if (options.name && typeof options.name === "string") {
            this.name = options.name;
        } else {
            this.name = getGlobalName();
        }
        if (options.cause) {
            Object.defineProperty(this, "_cause", {
                value: options.cause
            });
        }
        Object.defineProperty(this, "_info", {
            value: {}
        });
        if (options.info && typeof options.info === "object") {
            Object.assign(this._info, options.info);
        }
        if (Error.captureStackTrace) {
            const ctor = options.constructorOpt || this.constructor;
            Error.captureStackTrace(this, ctor);
        }
    }
    static cause(err) {
        assertError(err);
        if (!err._cause) return null;
        return isError(err._cause) ? err._cause : null;
    }
    static fullStack(err) {
        assertError(err);
        const cause = Layerr.cause(err);
        if (cause) {
            return `${err.stack}\ncaused by: ${Layerr.fullStack(cause)}`;
        }
        return err.stack ?? "";
    }
    static info(err) {
        assertError(err);
        const output = {};
        const cause = Layerr.cause(err);
        if (cause) {
            Object.assign(output, Layerr.info(cause));
        }
        if (err._info) {
            Object.assign(output, err._info);
        }
        return output;
    }
    toString() {
        let output = this.name || this.constructor.name || this.constructor.prototype.name;
        if (this.message) {
            output = `${output}: ${this.message}`;
        }
        return output;
    }
}
const B32_CHARACTERS = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const MAX_ULID = "7ZZZZZZZZZZZZZZZZZZZZZZZZZ";
const MIN_ULID = "00000000000000000000000000";
const ULID_REGEX = /^[0-7][0-9a-hjkmnp-tv-zA-HJKMNP-TV-Z]{25}$/;
const UUID_REGEX = /^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/;
// Code from https://github.com/devbanana/crockford-base32/blob/develop/src/index.ts
function crockfordEncode(input) {
    const output = [];
    let bitsRead = 0;
    let buffer = 0;
    const reversedInput = new Uint8Array(input.slice().reverse());
    for (const byte of reversedInput){
        buffer |= byte << bitsRead;
        bitsRead += 8;
        while(bitsRead >= 5){
            output.unshift(buffer & 0x1f);
            buffer >>>= 5;
            bitsRead -= 5;
        }
    }
    if (bitsRead > 0) {
        output.unshift(buffer & 0x1f);
    }
    return output.map((byte)=>B32_CHARACTERS.charAt(byte)).join("");
}
function crockfordDecode(input) {
    const sanitizedInput = input.toUpperCase().split("").reverse().join("");
    const output = [];
    let bitsRead = 0;
    let buffer = 0;
    for (const character of sanitizedInput){
        const byte = B32_CHARACTERS.indexOf(character);
        if (byte === -1) {
            throw new Error(`Invalid base 32 character found in string: ${character}`);
        }
        buffer |= byte << bitsRead;
        bitsRead += 5;
        while(bitsRead >= 8){
            output.unshift(buffer & 0xff);
            buffer >>>= 8;
            bitsRead -= 8;
        }
    }
    if (bitsRead >= 5 || buffer > 0) {
        output.unshift(buffer & 0xff);
    }
    return new Uint8Array(output);
}
// These values should NEVER change. The values are precisely for
// generating ULIDs.
const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford's Base32
const ENCODING_LEN = 32; // from ENCODING.length;
const TIME_MAX = 281474976710655; // from Math.pow(2, 48) - 1;
const TIME_LEN = 10;
const RANDOM_LEN = 16;
const ERROR_INFO = Object.freeze({
    source: "ulid"
});
/**
 * Decode time from a ULID
 * @param id The ULID
 * @returns The decoded timestamp
 */ function decodeTime(id) {
    if (id.length !== TIME_LEN + RANDOM_LEN) {
        throw new Layerr({
            info: {
                code: "DEC_TIME_MALFORMED",
                ...ERROR_INFO
            }
        }, "Malformed ULID");
    }
    const time = id.substr(0, TIME_LEN).toUpperCase().split("").reverse().reduce((carry, char, index)=>{
        const encodingIndex = ENCODING.indexOf(char);
        if (encodingIndex === -1) {
            throw new Layerr({
                info: {
                    code: "DEC_TIME_CHAR",
                    ...ERROR_INFO
                }
            }, `Time decode error: Invalid character: ${char}`);
        }
        return carry += encodingIndex * Math.pow(ENCODING_LEN, index);
    }, 0);
    if (time > TIME_MAX) {
        throw new Layerr({
            info: {
                code: "DEC_TIME_CHAR",
                ...ERROR_INFO
            }
        }, `Malformed ULID: timestamp too large: ${time}`);
    }
    return time;
}
/**
 * Detect the best PRNG (pseudo-random number generator)
 * @param root The root to check from (global/window)
 * @returns The PRNG function
 */ function detectPRNG(root) {
    const rootLookup = root || detectRoot();
    const globalCrypto = rootLookup && (rootLookup.crypto || rootLookup.msCrypto) || (typeof crypto !== "undefined" ? crypto : null);
    if (typeof globalCrypto?.getRandomValues === "function") {
        return ()=>{
            const buffer = new Uint8Array(1);
            globalCrypto.getRandomValues(buffer);
            return buffer[0] / 0xff;
        };
    } else if (typeof globalCrypto?.randomBytes === "function") {
        return ()=>globalCrypto.randomBytes(1).readUInt8() / 0xff;
    } else if (crypto?.randomBytes) {
        return ()=>crypto.randomBytes(1).readUInt8() / 0xff;
    }
    throw new Layerr({
        info: {
            code: "PRNG_DETECT",
            ...ERROR_INFO
        }
    }, "Failed to find a reliable PRNG");
}
function detectRoot() {
    if (inWebWorker()) return self;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time truthy", 1) {
        return "TURBOPACK ident replacement", globalThis;
    }
    //TURBOPACK unreachable
    ;
}
function encodeRandom(len, prng) {
    let str = "";
    for(; len > 0; len--){
        str = randomChar(prng) + str;
    }
    return str;
}
/**
 * Encode the time portion of a ULID
 * @param now The current timestamp
 * @param len Length to generate
 * @returns The encoded time
 */ function encodeTime(now, len) {
    if (isNaN(now)) {
        throw new Layerr({
            info: {
                code: "ENC_TIME_NAN",
                ...ERROR_INFO
            }
        }, `Time must be a number: ${now}`);
    } else if (now > TIME_MAX) {
        throw new Layerr({
            info: {
                code: "ENC_TIME_SIZE_EXCEED",
                ...ERROR_INFO
            }
        }, `Cannot encode a time larger than ${TIME_MAX}: ${now}`);
    } else if (now < 0) {
        throw new Layerr({
            info: {
                code: "ENC_TIME_NEG",
                ...ERROR_INFO
            }
        }, `Time must be positive: ${now}`);
    } else if (Number.isInteger(now) === false) {
        throw new Layerr({
            info: {
                code: "ENC_TIME_TYPE",
                ...ERROR_INFO
            }
        }, `Time must be an integer: ${now}`);
    }
    let mod, str = "";
    for(let currentLen = len; currentLen > 0; currentLen--){
        mod = now % ENCODING_LEN;
        str = ENCODING.charAt(mod) + str;
        now = (now - mod) / ENCODING_LEN;
    }
    return str;
}
/**
 * Fix a ULID's Base32 encoding -
 * i and l (case-insensitive) will be treated as 1 and o (case-insensitive) will be treated as 0.
 * hyphens are ignored during decoding.
 * @param id The ULID
 * @returns The cleaned up ULID
 */ function fixULIDBase32(id) {
    return id.replace(/i/gi, "1").replace(/l/gi, "1").replace(/o/gi, "0").replace(/-/g, "");
}
function incrementBase32(str) {
    let done = undefined, index = str.length, char, charIndex, output = str;
    const maxCharIndex = ENCODING_LEN - 1;
    while(!done && index-- >= 0){
        char = output[index];
        charIndex = ENCODING.indexOf(char);
        if (charIndex === -1) {
            throw new Layerr({
                info: {
                    code: "B32_INC_ENC",
                    ...ERROR_INFO
                }
            }, "Incorrectly encoded string");
        }
        if (charIndex === maxCharIndex) {
            output = replaceCharAt(output, index, ENCODING[0]);
            continue;
        }
        done = replaceCharAt(output, index, ENCODING[charIndex + 1]);
    }
    if (typeof done === "string") {
        return done;
    }
    throw new Layerr({
        info: {
            code: "B32_INC_INVALID",
            ...ERROR_INFO
        }
    }, "Failed incrementing string");
}
function inWebWorker() {
    // @ts-ignore
    return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
}
/**
 * Check if a ULID is valid
 * @param id The ULID to test
 * @returns True if valid, false otherwise
 * @example
 *   isValid("01HNZX8JGFACFA36RBXDHEQN6E"); // true
 *   isValid(""); // false
 */ function isValid(id) {
    return typeof id === "string" && id.length === TIME_LEN + RANDOM_LEN && id.toUpperCase().split("").every((char)=>ENCODING.indexOf(char) !== -1);
}
/**
 * Create a ULID factory to generate monotonically-increasing
 *  ULIDs
 * @param prng The PRNG to use
 * @returns A ulid factory
 * @example
 *  const ulid = monotonicFactory();
 *  ulid(); // "01HNZXD07M5CEN5XA66EMZSRZW"
 */ function monotonicFactory(prng) {
    const currentPRNG = prng || detectPRNG();
    let lastTime = 0, lastRandom;
    return function _ulid(seedTime) {
        const seed = isNaN(seedTime) ? Date.now() : seedTime;
        if (seed <= lastTime) {
            const incrementedRandom = lastRandom = incrementBase32(lastRandom);
            return encodeTime(lastTime, TIME_LEN) + incrementedRandom;
        }
        lastTime = seed;
        const newRandom = lastRandom = encodeRandom(RANDOM_LEN, currentPRNG);
        return encodeTime(seed, TIME_LEN) + newRandom;
    };
}
function randomChar(prng) {
    let rand = Math.floor(prng() * ENCODING_LEN);
    if (rand === ENCODING_LEN) {
        rand = ENCODING_LEN - 1;
    }
    return ENCODING.charAt(rand);
}
function replaceCharAt(str, index, char) {
    if (index > str.length - 1) {
        return str;
    }
    return str.substr(0, index) + char + str.substr(index + 1);
}
/**
 * Generate a ULID
 * @param seedTime Optional time seed
 * @param prng Optional PRNG function
 * @returns A ULID string
 * @example
 *  ulid(); // "01HNZXD07M5CEN5XA66EMZSRZW"
 */ function ulid(seedTime, prng) {
    const currentPRNG = prng || detectPRNG();
    const seed = isNaN(seedTime) ? Date.now() : seedTime;
    return encodeTime(seed, TIME_LEN) + encodeRandom(RANDOM_LEN, currentPRNG);
}
/**
 * Convert a ULID to a UUID
 * @param ulid The ULID to convert
 * @returns A UUID string
 */ function ulidToUUID(ulid) {
    const isValid = ULID_REGEX.test(ulid);
    if (!isValid) {
        throw new Layerr({
            info: {
                code: "INVALID_ULID",
                ...ERROR_INFO
            }
        }, "Invalid ULID");
    }
    const uint8Array = crockfordDecode(ulid);
    let uuid = Array.from(uint8Array).map((byte)=>byte.toString(16).padStart(2, "0")).join("");
    uuid = uuid.substring(0, 8) + "-" + uuid.substring(8, 12) + "-" + uuid.substring(12, 16) + "-" + uuid.substring(16, 20) + "-" + uuid.substring(20);
    return uuid;
}
/**
 * Convert a UUID to a ULID
 * @param uuid The UUID to convert
 * @returns A ULID string
 */ function uuidToULID(uuid) {
    const isValid = UUID_REGEX.test(uuid);
    if (!isValid) {
        throw new Layerr({
            info: {
                code: "INVALID_UUID",
                ...ERROR_INFO
            }
        }, "Invalid UUID");
    }
    const uint8Array = new Uint8Array(uuid.replace(/-/g, "").match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)));
    return crockfordEncode(uint8Array);
}
exports.B32_CHARACTERS = B32_CHARACTERS;
exports.MAX_ULID = MAX_ULID;
exports.MIN_ULID = MIN_ULID;
exports.ULID_REGEX = ULID_REGEX;
exports.UUID_REGEX = UUID_REGEX;
exports.decodeTime = decodeTime;
exports.detectPRNG = detectPRNG;
exports.encodeTime = encodeTime;
exports.fixULIDBase32 = fixULIDBase32;
exports.isValid = isValid;
exports.monotonicFactory = monotonicFactory;
exports.ulid = ulid;
exports.ulidToUUID = ulidToUUID;
exports.uuidToULID = uuidToULID;
}}),
"[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/Type.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/JSONSchemaToZod.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JSONSchemaToZod": (()=>JSONSchemaToZod)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$Type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/Type.js [app-rsc] (ecmascript)");
;
;
class JSONSchemaToZod {
    /**
     * Converts a JSON schema to a Zod schema.
     *
     * @param {JSONSchema} schema - The JSON schema.
     * @returns {ZodSchema} - The Zod schema.
     */ static convert(schema) {
        return this.parseSchema(schema);
    }
    /**
     * Checks if data matches a condition schema.
     *
     * @param {JSONValue} data - The data to check.
     * @param {JSONSchema} condition - The condition schema.
     * @returns {boolean} - Whether the data matches the condition.
     */ static matchesCondition(data, condition) {
        // If no properties to check, condition is met
        if (!condition.properties) {
            return true;
        }
        // If data is not an object or is null, it can't match a schema with properties
        if (typeof data !== 'object' || data === null || Array.isArray(data)) {
            return false;
        }
        // Now we know data is a JSONObject
        const objectData = data;
        // Check all property conditions
        for (const [key, propCondition] of Object.entries(condition.properties)){
            // If property doesn't exist in data
            if (!(key in objectData)) {
                // If there's a const condition and property is missing, it doesn't match
                if ('const' in propCondition) {
                    return false;
                }
                continue;
            }
            const value = objectData[key];
            // Check for const condition
            if ('const' in propCondition && value !== propCondition['const']) {
                return false;
            }
            // Check for minimum condition
            if ('minimum' in propCondition && typeof value === 'number' && value < propCondition['minimum']) {
                return false;
            }
            // Check for maximum condition
            if ('maximum' in propCondition && typeof value === 'number' && value > propCondition['maximum']) {
                return false;
            }
        }
        return true;
    }
    /**
     * Validates data against a conditional schema and adds issues to context if validation fails.
     *
     * @param {JSONValue} data - The data to validate.
     * @param {JSONSchema} schema - The conditional schema.
     * @param {z.RefinementCtx} ctx - The Zod refinement context.
     */ static validateConditionalSchema(data, schema, ctx) {
        this.validateRequiredProperties(data, schema, ctx);
        this.validatePropertyPatterns(data, schema, ctx);
        this.validateNestedConditions(data, schema, ctx);
    }
    /**
     * Validates that all required properties are present in the data.
     *
     * @param {JSONValue} data - The data to validate.
     * @param {JSONSchema} schema - The schema containing required properties.
     * @param {z.RefinementCtx} ctx - The Zod refinement context.
     */ static validateRequiredProperties(data, schema, ctx) {
        if (!schema.required) {
            return;
        }
        // If data is not an object or is null, all required properties are missing
        if (typeof data !== 'object' || data === null) {
            for (const requiredProp of schema.required){
                ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                    message: `Required property '${requiredProp}' is missing`,
                    path: [
                        requiredProp
                    ]
                });
            }
            return;
        }
        // Now we know data is an object (either a plain object or an array)
        for (const requiredProp of schema.required){
            if (!(requiredProp in data)) {
                ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                    message: `Required property '${requiredProp}' is missing`,
                    path: [
                        requiredProp
                    ]
                });
            }
        }
    }
    /**
     * Validates property patterns for string properties.
     *
     * @param {JSONValue} data - The data to validate.
     * @param {JSONSchema} schema - The schema containing property patterns.
     * @param {z.RefinementCtx} ctx - The Zod refinement context.
     */ static validatePropertyPatterns(data, schema, ctx) {
        if (!schema.properties) {
            return;
        }
        // If data is not an object or is null, we can't validate property patterns
        if (typeof data !== 'object' || data === null) {
            return;
        }
        // If data is an array, we can't validate property patterns
        if (Array.isArray(data)) {
            return;
        }
        // Now we know data is a JSONObject
        const objectData = data;
        // Process each property in the schema
        for (const [key, propSchema] of Object.entries(schema.properties)){
            // Skip if property doesn't exist in data
            if (!(key in objectData)) {
                continue;
            }
            const value = objectData[key];
            // Check pattern validation for strings
            if (propSchema['pattern'] && typeof value === 'string') {
                const regex = new RegExp(propSchema['pattern']);
                if (!regex.test(value)) {
                    ctx.addIssue({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                        message: `String '${value}' does not match pattern '${propSchema['pattern']}'`,
                        path: [
                            key
                        ]
                    });
                }
            }
        }
    }
    /**
     * Validates nested if-then-else conditions.
     *
     * @param {JSONValue} data - The data to validate.
     * @param {JSONSchema} schema - The schema containing if-then-else conditions.
     * @param {z.RefinementCtx} ctx - The Zod refinement context.
     */ static validateNestedConditions(data, schema, ctx) {
        if (!schema['if'] || !schema['then']) {
            return;
        }
        const matchesIf = this.matchesCondition(data, schema['if']);
        if (matchesIf) {
            this.validateConditionalSchema(data, schema['then'], ctx);
        } else if (schema['else']) {
            this.validateConditionalSchema(data, schema['else'], ctx);
        }
    }
    /**
     * Parses a JSON schema and returns the corresponding Zod schema.
     * This is the main entry point for schema conversion.
     *
     * @param {JSONSchema} schema - The JSON schema.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseSchema(schema) {
        // Handle array of types (e.g., ['string', 'null'] for nullable types)
        if (Array.isArray(schema.type)) {
            return this.handleTypeArray(schema);
        }
        // Handle combinators (oneOf, anyOf, allOf)
        if (schema.oneOf || schema.anyOf || schema.allOf) {
            return this.parseCombinator(schema);
        }
        // Handle if-then-else conditional validation
        if (schema['if'] && schema['then']) {
            return this.parseObject(schema);
        }
        // Handle object schema without explicit type but with properties
        if (schema.properties && (!schema.type || schema.type === 'object')) {
            return this.parseObject(schema);
        }
        // Handle all other types
        return this.handleSingleType(schema);
    }
    /**
     * Handles schemas with an array of types.
     *
     * @param {JSONSchema} schema - The JSON schema with type array.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static handleTypeArray(schema) {
        if (!Array.isArray(schema.type)) {
            throw new Error('Expected schema.type to be an array');
        }
        // Check if the type array includes 'null' to create a nullable type
        if (schema.type.includes('null')) {
            return this.handleNullableType(schema);
        }
        // If no 'null' in the type array, handle as a union of types
        return this.createUnionFromTypes(schema.type, schema);
    }
    /**
     * Handles nullable types by creating a nullable schema.
     *
     * @param {JSONSchema} schema - The JSON schema with nullable type.
     * @returns {ZodTypeAny} - The nullable Zod schema.
     */ static handleNullableType(schema) {
        if (!Array.isArray(schema.type)) {
            throw new Error('Expected schema.type to be an array');
        }
        // Create a copy of the schema without the 'null' type
        const nonNullSchema = {
            ...schema
        };
        nonNullSchema.type = schema.type.filter((t)=>t !== 'null');
        // If there's only one type left, handle it as a single type and make it nullable
        if (nonNullSchema.type.length === 1) {
            const singleTypeSchema = this.handleSingleType({
                ...schema,
                type: nonNullSchema.type[0]
            });
            return singleTypeSchema.nullable();
        }
        // If multiple non-null types, create a union and make it nullable
        const unionSchema = this.parseSchema(nonNullSchema);
        return unionSchema.nullable();
    }
    /**
     * Creates a union type from an array of types.
     *
     * @param {string[]} types - Array of type strings.
     * @param {JSONSchema} baseSchema - The base schema to apply to each type.
     * @returns {ZodTypeAny} - The union Zod schema.
     */ static createUnionFromTypes(types, baseSchema) {
        const schemas = types.map((type)=>{
            const singleTypeSchema = {
                ...baseSchema,
                type
            };
            return this.parseSchema(singleTypeSchema);
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union(schemas);
    }
    /**
     * Handles schemas with a single type.
     *
     * @param {JSONSchema} schema - The JSON schema with single type.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static handleSingleType(schema) {
        // Handle schemas without a type property
        if (schema.type === undefined) {
            // Check for combinators first
            if (schema.oneOf || schema.anyOf || schema.allOf) {
                return this.parseCombinator(schema);
            }
            // Check for object properties
            if (schema.properties) {
                return this.parseObject(schema);
            }
            // Default to any() for schemas with no type and no other indicators
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any();
        }
        // Handle specific types
        switch(schema.type){
            case 'string':
                return this.parseString(schema);
            case 'number':
            case 'integer':
                return this.parseNumberSchema(schema);
            case 'boolean':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean();
            case 'array':
                return this.parseArray(schema);
            case 'object':
                return this.parseObject(schema);
            default:
                throw new Error('Unsupported schema type');
        }
    }
    /**
     * Parses a number schema.
     *
     * @param {JSONSchema} schema - The JSON schema for a number.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseNumberSchema(schema) {
        let numberSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number();
        // Apply all number validations
        let result = numberSchema;
        result = this.applyNumberBounds(numberSchema, schema);
        result = this.applyNumberMultipleOf(numberSchema, schema);
        result = this.applyNumberEnum(numberSchema, schema);
        result = this.applyIntegerConstraint(numberSchema, schema);
        return result;
    }
    /**
     * Applies bounds validation to a number schema.
     *
     * @param {z.ZodNumber} numberSchema - The base number schema.
     * @param {JSONSchema} schema - The JSON schema with bounds.
     * @returns {z.ZodNumber} - The updated schema with bounds validation.
     */ static applyNumberBounds(numberSchema, schema) {
        let result = numberSchema;
        if (schema['minimum'] !== undefined) {
            result = schema['exclusiveMinimum'] ? result.gt(schema['minimum']) : result.gte(schema['minimum']);
        }
        if (schema['maximum'] !== undefined) {
            result = schema['exclusiveMaximum'] ? result.lt(schema['maximum']) : result.lte(schema['maximum']);
        }
        return result;
    }
    /**
     * Applies multipleOf validation to a number schema.
     *
     * @param {z.ZodNumber} numberSchema - The base number schema.
     * @param {JSONSchema} schema - The JSON schema with multipleOf.
     * @returns {z.ZodNumber} - The updated schema with multipleOf validation.
     */ static applyNumberMultipleOf(numberSchema, schema) {
        if (schema['multipleOf'] === undefined) {
            return numberSchema;
        }
        return numberSchema.refine((val)=>val % schema['multipleOf'] === 0, {
            message: `Number must be a multiple of ${schema['multipleOf']}`
        });
    }
    /**
     * Applies enum validation to a number schema.
     *
     * @param {z.ZodNumber} numberSchema - The base number schema.
     * @param {JSONSchema} schema - The JSON schema with enum.
     * @returns {z.ZodNumber} - The updated schema with enum validation.
     */ static applyNumberEnum(numberSchema, schema) {
        if (!schema.enum) {
            return numberSchema;
        }
        // Filter out non-number values from enum
        const numberEnums = schema.enum.filter((val)=>typeof val === 'number');
        if (numberEnums.length === 0) {
            return numberSchema;
        }
        // Use refinement to validate against enum values
        return numberSchema.refine((val)=>numberEnums.includes(val), {
            message: `Number must be one of: ${numberEnums.join(', ')}`
        });
    }
    /**
     * Applies integer constraint to a number schema if needed.
     *
     * @param {z.ZodNumber} numberSchema - The base number schema.
     * @param {JSONSchema} schema - The JSON schema.
     * @returns {z.ZodNumber} - The updated schema with integer validation if needed.
     */ static applyIntegerConstraint(numberSchema, schema) {
        if (schema.type !== 'integer') {
            return numberSchema;
        }
        return numberSchema.refine((val)=>Number.isInteger(val), {
            message: 'Number must be an integer'
        });
    }
    /**
     * Parses a string schema.
     *
     * @param {JSONSchema} schema - The JSON schema for a string.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseString(schema) {
        let stringSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string();
        let result = stringSchema;
        // Apply all string validations
        if (schema.format) {
            // Handle format-specific string validation
            return this.applyStringFormat(stringSchema, schema);
        } else {
            // Only apply other validations if format is not specified
            // or apply them to the formatted string
            result = this.applyStringPattern(stringSchema, schema);
            result = this.applyStringLength(stringSchema, schema);
            result = this.applyStringEnum(stringSchema, schema);
        }
        return result;
    }
    /**
     * Applies format validation to a string schema.
     *
     * @param {z.ZodString} stringSchema - The base string schema.
     * @param {JSONSchema} schema - The JSON schema with format.
     * @returns {ZodTypeAny} - The updated schema with format validation.
     */ static applyStringFormat(stringSchema, schema) {
        if (!schema.format) {
            return stringSchema;
        }
        switch(schema.format){
            case 'email':
                return stringSchema.email();
            case 'date-time':
                return stringSchema.datetime();
            case 'uri':
                return stringSchema.url();
            case 'uuid':
                return stringSchema.uuid();
            case 'date':
                return stringSchema.date();
            default:
                return stringSchema;
        }
    }
    /**
     * Applies pattern validation to a string schema.
     *
     * @param {z.ZodString} stringSchema - The base string schema.
     * @param {JSONSchema} schema - The JSON schema with pattern.
     * @returns {z.ZodString} - The updated schema with pattern validation.
     */ static applyStringPattern(stringSchema, schema) {
        if (!schema['pattern']) {
            return stringSchema;
        }
        const regex = new RegExp(schema['pattern']);
        return stringSchema.regex(regex, {
            message: `String must match pattern: ${schema['pattern']}`
        });
    }
    /**
     * Applies length constraints to a string schema.
     *
     * @param {z.ZodString} stringSchema - The base string schema.
     * @param {JSONSchema} schema - The JSON schema with length constraints.
     * @returns {z.ZodString} - The updated schema with length validation.
     */ static applyStringLength(stringSchema, schema) {
        let result = stringSchema;
        if (schema['minLength'] !== undefined) {
            stringSchema = stringSchema.min(schema['minLength']);
        }
        if (schema['maxLength'] !== undefined) {
            stringSchema = stringSchema.max(schema['maxLength']);
        }
        return result;
    }
    /**
     * Applies enum validation to a string schema.
     *
     * @param {z.ZodString} stringSchema - The base string schema.
     * @param {JSONSchema} schema - The JSON schema with enum.
     * @returns {ZodTypeAny} - The updated schema with enum validation.
     */ static applyStringEnum(stringSchema, schema) {
        if (!schema.enum) {
            return stringSchema;
        }
        // Use refinement to validate against enum values
        return stringSchema.refine((val)=>schema.enum?.includes(val), {
            message: `Value must be one of: ${schema.enum?.join(', ')}`
        });
    }
    /**
     * Parses a JSON schema of type array and returns the corresponding Zod schema.
     *
     * @param {JSONSchema} schema - The JSON schema.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseArray(schema) {
        // Handle tuple validation (items is an array)
        if (Array.isArray(schema.items)) {
            const tupleSchemas = schema.items.map((item)=>this.parseSchema(item));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union(tupleSchemas);
        }
        // Create regular array schema
        const itemSchema = schema.items ? this.parseSchema(schema.items) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any();
        let arraySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(itemSchema);
        // Apply array constraints
        let result = arraySchema;
        result = this.applyArrayConstraints(arraySchema, schema);
        return result;
    }
    /**
     * Applies constraints to an array schema.
     *
     * @param {z.ZodArray<any>} arraySchema - The base array schema.
     * @param {JSONSchema} schema - The JSON schema with array constraints.
     * @returns {z.ZodTypeAny} - The updated array schema with constraints.
     */ static applyArrayConstraints(arraySchema, schema) {
        // Handle minItems
        if (schema['minItems'] !== undefined) {
            arraySchema = arraySchema.min(schema['minItems']);
        }
        // Handle maxItems
        if (schema['maxItems'] !== undefined) {
            arraySchema = arraySchema.max(schema['maxItems']);
        }
        // Handle uniqueItems
        if (schema['uniqueItems']) {
            return arraySchema.refine((items)=>new Set(items).size === items.length, {
                message: 'Array items must be unique'
            });
        }
        return arraySchema;
    }
    /**
     * Parses an object schema.
     *
     * @param {JSONSchema} schema - The JSON schema for an object.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseObject(schema) {
        // Handle conditional validation (if-then-else) first
        if (schema['if'] && schema['then']) {
            return this.parseConditional(schema);
        }
        // Create shape object for Zod
        const shape = {};
        // Process properties
        this.processObjectProperties(schema, shape);
        // Create the object schema and handle additionalProperties
        return this.processAdditionalProperties(schema, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(shape));
    }
    /**
     * Processes object properties and builds the shape object.
     *
     * @param {JSONSchema} schema - The JSON schema for an object.
     * @param {Record<string, ZodTypeAny>} shape - The shape object to populate.
     */ static processObjectProperties(schema, shape) {
        const required = new Set(schema.required || []);
        if (!schema.properties) {
            return;
        }
        for (const [key, propSchema] of Object.entries(schema.properties)){
            const zodSchema = this.parseSchema(propSchema);
            shape[key] = required.has(key) ? zodSchema : zodSchema.optional();
        }
    }
    /**
     * Processes additionalProperties configuration.
     *
     * @param {JSONSchema} schema - The JSON schema for an object.
     * @param {z.ZodObject<any, any>} objectSchema - The Zod object schema.
     * @returns {z.ZodObject<any, any>} - The updated Zod object schema.
     */ static processAdditionalProperties(schema, objectSchema) {
        if (schema.additionalProperties === true) {
            return objectSchema.passthrough();
        } else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
            // Handle schema for additional properties
            const additionalPropSchema = this.parseSchema(schema.additionalProperties);
            return objectSchema.catchall(additionalPropSchema);
        } else {
            return objectSchema.strict();
        }
    }
    /**
     * Parses a conditional schema with if-then-else.
     *
     * @param {JSONSchema} schema - The JSON schema with conditional validation.
     * @returns {ZodTypeAny} - The conditional Zod schema.
     */ static parseConditional(schema) {
        // Create base object schema
        const zodObject = this.createBaseObjectSchema(schema);
        // Extract conditional parts
        const ifCondition = schema['if'];
        const thenSchema = schema['then'];
        const elseSchema = schema['else'];
        // Apply conditional validation using superRefine
        return zodObject.superRefine((data, ctx)=>{
            // Apply default values to data for condition checking
            const dataWithDefaults = this.applyDefaultValues(data, schema);
            // Apply appropriate validation based on condition
            if (this.matchesCondition(dataWithDefaults, ifCondition)) {
                this.validateConditionalSchema(dataWithDefaults, thenSchema, ctx);
            } else if (elseSchema) {
                this.validateConditionalSchema(dataWithDefaults, elseSchema, ctx);
            }
        });
    }
    /**
     * Creates a base object schema from the given JSON schema.
     *
     * @param {JSONSchema} schema - The JSON schema.
     * @returns {z.ZodObject<any, any>} - The base Zod object schema.
     */ static createBaseObjectSchema(schema) {
        const shape = {};
        const required = new Set(schema.required || []);
        for (const [key, value] of Object.entries(schema.properties || {})){
            const zodSchema = this.parseSchema(value);
            shape[key] = required.has(key) ? zodSchema : zodSchema.optional();
        }
        const zodObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(shape);
        return this.processAdditionalProperties(schema, zodObject);
    }
    /**
     * Applies default values from schema properties to data object.
     *
     * @param {JSONValue} data - The original data object.
     * @param {JSONSchema} schema - The schema with default values.
     * @returns {JSONValue} - The data object with defaults applied.
     */ static applyDefaultValues(data, schema) {
        // If data is not an object or is null, we can't apply defaults
        if (typeof data !== 'object' || data === null) {
            return data;
        }
        // If data is an array, we can't apply defaults from schema properties
        if (Array.isArray(data)) {
            return data;
        }
        // Now we know data is a JSONObject
        const objectData = data;
        const dataWithDefaults = {
            ...objectData
        };
        if (!schema.properties) {
            return dataWithDefaults;
        }
        for (const [key, propSchema] of Object.entries(schema.properties)){
            if (!(key in dataWithDefaults) && 'default' in propSchema) {
                dataWithDefaults[key] = propSchema['default'];
            }
        }
        return dataWithDefaults;
    }
    /**
     * Parses a schema with combinators (oneOf, anyOf, allOf).
     * Delegates to the appropriate combinator parser based on which combinator is present.
     *
     * @param {JSONSchema} schema - The JSON schema with combinators.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseCombinator(schema) {
        if (schema.oneOf) {
            return this.parseOneOf(schema.oneOf);
        }
        if (schema.anyOf) {
            return this.parseAnyOf(schema.anyOf);
        }
        if (schema.allOf) {
            return this.parseAllOf(schema.allOf);
        }
        // Should not reach here if schema has combinators
        throw new Error('Unsupported schema type');
    }
    /**
     * Parses a oneOf combinator schema.
     *
     * @param {JSONSchema[]} schemas - Array of JSON schemas in the oneOf.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseOneOf(schemas) {
        return this.createUnionFromSchemas(schemas);
    }
    /**
     * Parses an anyOf combinator schema.
     *
     * @param {JSONSchema[]} schemas - Array of JSON schemas in the anyOf.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseAnyOf(schemas) {
        return this.createUnionFromSchemas(schemas);
    }
    /**
     * Creates a union from an array of schemas, handling special cases.
     *
     * @param {JSONSchema[]} schemas - Array of JSON schemas to create a union from.
     * @returns {ZodTypeAny} - The union Zod schema.
     */ static createUnionFromSchemas(schemas) {
        // Handle empty array case
        if (schemas.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any();
        }
        // Handle single schema case
        if (schemas.length === 1) {
            return this.parseSchema(schemas[0]);
        }
        // Process each subschema individually
        const zodSchemas = [];
        for (const subSchema of schemas){
            // Handle null type specially
            if (subSchema.type === 'null') {
                zodSchemas.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].null());
            } else {
                zodSchemas.push(this.parseSchema(subSchema));
            }
        }
        // Return appropriate schema based on number of valid schemas
        if (zodSchemas.length >= 2) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union(zodSchemas);
        } else if (zodSchemas.length === 1) {
            return zodSchemas[0];
        }
        // Fallback if no valid schemas were created
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any();
    }
    /**
     * Parses an allOf combinator schema by merging all schemas.
     *
     * @param {JSONSchema[]} schemas - Array of JSON schemas in the allOf.
     * @returns {ZodTypeAny} - The ZodTypeAny schema.
     */ static parseAllOf(schemas) {
        // Handle empty array case
        if (schemas.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any();
        }
        // Handle single schema case
        if (schemas.length === 1) {
            return this.parseSchema(schemas[0]);
        }
        // Merge all schemas together
        const mergedSchema = schemas.reduce((acc, currentSchema)=>this.mergeSchemas(acc, currentSchema));
        return this.parseSchema(mergedSchema);
    }
    /**
     * Merges two JSON schemas together.
     *
     * @param {JSONSchema} baseSchema - The base JSON schema.
     * @param {JSONSchema} addSchema - The JSON schema to add.
     * @returns {JSONSchema} - The merged JSON schema
     */ static mergeSchemas(baseSchema, addSchema) {
        const merged = {
            ...baseSchema,
            ...addSchema
        };
        if (baseSchema.properties && addSchema.properties) {
            const mergedProperties = {
                ...baseSchema.properties,
                ...addSchema.properties
            };
            merged.properties = mergedProperties;
        }
        if (baseSchema.required && addSchema.required) {
            const mergedRequired = [
                ...new Set([
                    ...baseSchema.required,
                    ...addSchema.required
                ])
            ];
            merged.required = mergedRequired;
        }
        return merged;
    }
}
}),
"[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$JSONSchemaToZod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/JSONSchemaToZod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$Type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/Type.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$JSONSchemaToZod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/JSONSchemaToZod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$Type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/Type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/index.js [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/uri-js/dist/es5/uri.all.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */ (function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? factory(exports) : "TURBOPACK unreachable";
})(this, function(exports1) {
    'use strict';
    function merge() {
        for(var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++){
            sets[_key] = arguments[_key];
        }
        if (sets.length > 1) {
            sets[0] = sets[0].slice(0, -1);
            var xl = sets.length - 1;
            for(var x = 1; x < xl; ++x){
                sets[x] = sets[x].slice(1, -1);
            }
            sets[xl] = sets[xl].slice(1);
            return sets.join('');
        } else {
            return sets[0];
        }
    }
    function subexp(str) {
        return "(?:" + str + ")";
    }
    function typeOf(o) {
        return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
    }
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    function toArray(obj) {
        return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [
            obj
        ] : Array.prototype.slice.call(obj) : [];
    }
    function assign(target, source) {
        var obj = target;
        if (source) {
            for(var key in source){
                obj[key] = source[key];
            }
        }
        return obj;
    }
    function buildExps(isIRI) {
        var ALPHA$$ = "[A-Za-z]", CR$ = "[\\x0D]", DIGIT$$ = "[0-9]", DQUOTE$$ = "[\\x22]", HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"), //case-insensitive
        LF$$ = "[\\x0A]", SP$$ = "[\\x20]", PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)), //expanded
        GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", //subset, excludes bidi control characters
        IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]", //subset
        UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$), SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"), USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"), DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$), DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), //relaxed parsing rules
        IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$ + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), //                           6( h16 ":" ) ls32
        IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), //                      "::" 5( h16 ":" ) ls32
        IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), //[               h16 ] "::" 4( h16 ":" ) ls32
        IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
        IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
        IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
        IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), //[ *4( h16 ":" ) h16 ] "::"              ls32
        IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), //[ *5( h16 ":" ) h16 ] "::"              h16
        IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), //[ *6( h16 ":" ) h16 ] "::"
        IPV6ADDRESS$ = subexp([
            IPV6ADDRESS1$,
            IPV6ADDRESS2$,
            IPV6ADDRESS3$,
            IPV6ADDRESS4$,
            IPV6ADDRESS5$,
            IPV6ADDRESS6$,
            IPV6ADDRESS7$,
            IPV6ADDRESS8$,
            IPV6ADDRESS9$
        ].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"), //RFC 6874
        IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$), //RFC 6874
        IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + ZONEID$), //RFC 6874, with relaxed parsing rules
        IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"), IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"), //RFC 6874
        REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"), HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")" + "|" + REG_NAME$), PORT$ = subexp(DIGIT$$ + "*"), AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"), PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")), SEGMENT$ = subexp(PCHAR$ + "*"), SEGMENT_NZ$ = subexp(PCHAR$ + "+"), SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"), PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"), PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"), //simplified
        PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$), //simplified
        PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$), //simplified
        PATH_EMPTY$ = "(?!" + PCHAR$ + ")", PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"), FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"), HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$), RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$), ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"), GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$", SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
        return {
            NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
            NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
            NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
            ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            UNRESERVED: new RegExp(UNRESERVED$$, "g"),
            OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
            PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
            IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
            IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
        };
    }
    var URI_PROTOCOL = buildExps(false);
    var IRI_PROTOCOL = buildExps(true);
    var slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
    var toConsumableArray = function(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
            return arr2;
        } else {
            return Array.from(arr);
        }
    };
    /** Highest positive signed 32-bit float value */ var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
    /** Bootstring parameters */ var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128; // 0x80
    var delimiter = '-'; // '\x2D'
    /** Regular expressions */ var regexPunycode = /^xn--/;
    var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
    /** Error messages */ var errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    };
    /** Convenience shortcuts */ var baseMinusTMin = base - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;
    /*--------------------------------------------------------------------------*/ /**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */ function error$1(type) {
        throw new RangeError(errors[type]);
    }
    /**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */ function map(array, fn) {
        var result = [];
        var length = array.length;
        while(length--){
            result[length] = fn(array[length]);
        }
        return result;
    }
    /**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */ function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + '@';
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
    }
    /**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */ function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while(counter < length){
            var value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // It's a high surrogate, and there is a next character.
                var extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                    // Low surrogate.
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                    // It's an unmatched surrogate; only append this code unit, in case the
                    // next code unit is the high surrogate of a surrogate pair.
                    output.push(value);
                    counter--;
                }
            } else {
                output.push(value);
            }
        }
        return output;
    }
    /**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */ var ucs2encode = function ucs2encode(array) {
        return String.fromCodePoint.apply(String, toConsumableArray(array));
    };
    /**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */ var basicToDigit = function basicToDigit(codePoint) {
        if (codePoint - 0x30 < 0x0A) {
            return codePoint - 0x16;
        }
        if (codePoint - 0x41 < 0x1A) {
            return codePoint - 0x41;
        }
        if (codePoint - 0x61 < 0x1A) {
            return codePoint - 0x61;
        }
        return base;
    };
    /**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */ var digitToBasic = function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    /**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */ var adapt = function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for(; delta > baseMinusTMin * tMax >> 1; k += base){
            delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    /**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */ var decode = function decode(input) {
        // Don't use UCS-2.
        var output = [];
        var inputLength = input.length;
        var i = 0;
        var n = initialN;
        var bias = initialBias;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        var basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
            basic = 0;
        }
        for(var j = 0; j < basic; ++j){
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 0x80) {
                error$1('not-basic');
            }
            output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for(var index = basic > 0 ? basic + 1 : 0; index < inputLength;)/* no final expression */ {
            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            var oldi = i;
            for(var w = 1, k = base;; k += base){
                if (index >= inputLength) {
                    error$1('invalid-input');
                }
                var digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base || digit > floor((maxInt - i) / w)) {
                    error$1('overflow');
                }
                i += digit * w;
                var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) {
                    break;
                }
                var baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) {
                    error$1('overflow');
                }
                w *= baseMinusT;
            }
            var out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) {
                error$1('overflow');
            }
            n += floor(i / out);
            i %= out;
            // Insert `n` at position `i` of the output.
            output.splice(i++, 0, n);
        }
        return String.fromCodePoint.apply(String, output);
    };
    /**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */ var encode = function encode(input) {
        var output = [];
        // Convert the input in UCS-2 to an array of Unicode code points.
        input = ucs2decode(input);
        // Cache the length.
        var inputLength = input.length;
        // Initialize the state.
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        // Handle the basic code points.
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for(var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _currentValue2 = _step.value;
                if (_currentValue2 < 0x80) {
                    output.push(stringFromCharCode(_currentValue2));
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string with a delimiter unless it's empty.
        if (basicLength) {
            output.push(delimiter);
        }
        // Main encoding loop:
        while(handledCPCount < inputLength){
            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            var m = maxInt;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;
            try {
                for(var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var currentValue = _step2.value;
                    if (currentValue >= n && currentValue < m) {
                        m = currentValue;
                    }
                }
            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow.
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            var handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error$1('overflow');
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;
            try {
                for(var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                    var _currentValue = _step3.value;
                    if (_currentValue < n && ++delta > maxInt) {
                        error$1('overflow');
                    }
                    if (_currentValue == n) {
                        // Represent delta as a generalized variable-length integer.
                        var q = delta;
                        for(var k = base;; k += base){
                            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                            if (q < t) {
                                break;
                            }
                            var qMinusT = q - t;
                            var baseMinusT = base - t;
                            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                            q = floor(qMinusT / baseMinusT);
                        }
                        output.push(stringFromCharCode(digitToBasic(q, 0)));
                        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                        delta = 0;
                        ++handledCPCount;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
            ++delta;
            ++n;
        }
        return output.join('');
    };
    /**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */ var toUnicode = function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
    };
    /**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */ var toASCII = function toASCII(input) {
        return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
    };
    /*--------------------------------------------------------------------------*/ /** Define the public API */ var punycode = {
        /**
  * A string representing the current Punycode.js version number.
  * @memberOf punycode
  * @type String
  */ 'version': '2.1.0',
        /**
  * An object of methods to convert from JavaScript's internal character
  * representation (UCS-2) to Unicode code points, and back.
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode
  * @type Object
  */ 'ucs2': {
            'decode': ucs2decode,
            'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
    };
    /**
 * URI.js
 *
 * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/uri-js
 */ /**
 * Copyright 2011 Gary Court. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 *
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the
 * authors and should not be interpreted as representing official policies, either expressed
 * or implied, of Gary Court.
 */ var SCHEMES = {};
    function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16) e = "%0" + c.toString(16).toUpperCase();
        else if (c < 128) e = "%" + c.toString(16).toUpperCase();
        else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
    }
    function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while(i < il){
            var c = parseInt(str.substr(i + 1, 2), 16);
            if (c < 128) {
                newStr += String.fromCharCode(c);
                i += 3;
            } else if (c >= 194 && c < 224) {
                if (il - i >= 6) {
                    var c2 = parseInt(str.substr(i + 4, 2), 16);
                    newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
                } else {
                    newStr += str.substr(i, 6);
                }
                i += 6;
            } else if (c >= 224) {
                if (il - i >= 9) {
                    var _c = parseInt(str.substr(i + 4, 2), 16);
                    var c3 = parseInt(str.substr(i + 7, 2), 16);
                    newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
                } else {
                    newStr += str.substr(i, 9);
                }
                i += 9;
            } else {
                newStr += str.substr(i, 3);
                i += 3;
            }
        }
        return newStr;
    }
    function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved(str) {
            var decStr = pctDecChars(str);
            return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
    }
    function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
    }
    function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2), address = _matches[1];
        if (address) {
            return address.split(".").map(_stripLeadingZeros).join(".");
        } else {
            return host;
        }
    }
    function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];
        var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
        if (address) {
            var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
            var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
            var lastFields = last.split(":").map(_stripLeadingZeros);
            var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
            var fieldCount = isLastFieldIPv4Address ? 7 : 8;
            var lastFieldsStart = lastFields.length - fieldCount;
            var fields = Array(fieldCount);
            for(var x = 0; x < fieldCount; ++x){
                fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
            }
            if (isLastFieldIPv4Address) {
                fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
            }
            var allZeroFields = fields.reduce(function(acc, field, index) {
                if (!field || field === "0") {
                    var lastLongest = acc[acc.length - 1];
                    if (lastLongest && lastLongest.index + lastLongest.length === index) {
                        lastLongest.length++;
                    } else {
                        acc.push({
                            index: index,
                            length: 1
                        });
                    }
                }
                return acc;
            }, []);
            var longestZeroFields = allZeroFields.sort(function(a, b) {
                return b.length - a.length;
            })[0];
            var newHost = void 0;
            if (longestZeroFields && longestZeroFields.length > 1) {
                var newFirst = fields.slice(0, longestZeroFields.index);
                var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
                newHost = newFirst.join(":") + "::" + newLast.join(":");
            } else {
                newHost = fields.join(":");
            }
            if (zone) {
                newHost += "%" + zone;
            }
            return newHost;
        } else {
            return host;
        }
    }
    var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
    var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
    function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
            if (NO_MATCH_IS_UNDEFINED) {
                //store each component
                components.scheme = matches[1];
                components.userinfo = matches[3];
                components.host = matches[4];
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = matches[7];
                components.fragment = matches[8];
                //fix port number
                if (isNaN(components.port)) {
                    components.port = matches[5];
                }
            } else {
                //IE FIX for improper RegExp matching
                //store each component
                components.scheme = matches[1] || undefined;
                components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
                components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
                components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
                //fix port number
                if (isNaN(components.port)) {
                    components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
                }
            }
            if (components.host) {
                //normalize IP hosts
                components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
            }
            //determine reference type
            if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
                components.reference = "same-document";
            } else if (components.scheme === undefined) {
                components.reference = "relative";
            } else if (components.fragment === undefined) {
                components.reference = "absolute";
            } else {
                components.reference = "uri";
            }
            //check for reference errors
            if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
                components.error = components.error || "URI is not a " + options.reference + " reference.";
            }
            //find scheme handler
            var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
            //check if scheme can't handle IRIs
            if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
                //if host component is a domain name
                if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                    //convert Unicode IDN -> ASCII IDN
                    try {
                        components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                    } catch (e) {
                        components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                    }
                }
                //convert IRI -> URI
                _normalizeComponentEncoding(components, URI_PROTOCOL);
            } else {
                //normalize encodings
                _normalizeComponentEncoding(components, protocol);
            }
            //perform scheme specific parsing
            if (schemeHandler && schemeHandler.parse) {
                schemeHandler.parse(components, options);
            }
        } else {
            components.error = components.error || "URI can not be parsed.";
        }
        return components;
    }
    function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== undefined) {
            uriTokens.push(components.userinfo);
            uriTokens.push("@");
        }
        if (components.host !== undefined) {
            //normalize IP hosts, add brackets and escape zone separator for IPv6
            uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_, $1, $2) {
                return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
            }));
        }
        if (typeof components.port === "number" || typeof components.port === "string") {
            uriTokens.push(":");
            uriTokens.push(String(components.port));
        }
        return uriTokens.length ? uriTokens.join("") : undefined;
    }
    var RDS1 = /^\.\.?\//;
    var RDS2 = /^\/\.(\/|$)/;
    var RDS3 = /^\/\.\.(\/|$)/;
    var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
    function removeDotSegments(input) {
        var output = [];
        while(input.length){
            if (input.match(RDS1)) {
                input = input.replace(RDS1, "");
            } else if (input.match(RDS2)) {
                input = input.replace(RDS2, "/");
            } else if (input.match(RDS3)) {
                input = input.replace(RDS3, "/");
                output.pop();
            } else if (input === "." || input === "..") {
                input = "";
            } else {
                var im = input.match(RDS5);
                if (im) {
                    var s = im[0];
                    input = input.slice(s.length);
                    output.push(s);
                } else {
                    throw new Error("Unexpected dot segment condition");
                }
            }
        }
        return output.join("");
    }
    function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        //find scheme handler
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        //perform scheme specific serialization
        if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
        if (components.host) {
            //if host component is an IPv6 address
            if (protocol.IPV6ADDRESS.test(components.host)) {} else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
                //convert IDN via punycode
                try {
                    components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
                } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                }
            }
        }
        //normalize encoding
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
            uriTokens.push(components.scheme);
            uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== undefined) {
            if (options.reference !== "suffix") {
                uriTokens.push("//");
            }
            uriTokens.push(authority);
            if (components.path && components.path.charAt(0) !== "/") {
                uriTokens.push("/");
            }
        }
        if (components.path !== undefined) {
            var s = components.path;
            if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
                s = removeDotSegments(s);
            }
            if (authority === undefined) {
                s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
            }
            uriTokens.push(s);
        }
        if (components.query !== undefined) {
            uriTokens.push("?");
            uriTokens.push(components.query);
        }
        if (components.fragment !== undefined) {
            uriTokens.push("#");
            uriTokens.push(components.fragment);
        }
        return uriTokens.join(""); //merge tokens into a string
    }
    function resolveComponents(base, relative) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var skipNormalization = arguments[3];
        var target = {};
        if (!skipNormalization) {
            base = parse(serialize(base, options), options); //normalize base components
            relative = parse(serialize(relative, options), options); //normalize relative components
        }
        options = options || {};
        if (!options.tolerant && relative.scheme) {
            target.scheme = relative.scheme;
            //target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
        } else {
            if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
                //target.authority = relative.authority;
                target.userinfo = relative.userinfo;
                target.host = relative.host;
                target.port = relative.port;
                target.path = removeDotSegments(relative.path || "");
                target.query = relative.query;
            } else {
                if (!relative.path) {
                    target.path = base.path;
                    if (relative.query !== undefined) {
                        target.query = relative.query;
                    } else {
                        target.query = base.query;
                    }
                } else {
                    if (relative.path.charAt(0) === "/") {
                        target.path = removeDotSegments(relative.path);
                    } else {
                        if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                            target.path = "/" + relative.path;
                        } else if (!base.path) {
                            target.path = relative.path;
                        } else {
                            target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                        }
                        target.path = removeDotSegments(target.path);
                    }
                    target.query = relative.query;
                }
                //target.authority = base.authority;
                target.userinfo = base.userinfo;
                target.host = base.host;
                target.port = base.port;
            }
            target.scheme = base.scheme;
        }
        target.fragment = relative.fragment;
        return target;
    }
    function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({
            scheme: 'null'
        }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
    }
    function normalize(uri, options) {
        if (typeof uri === "string") {
            uri = serialize(parse(uri, options), options);
        } else if (typeOf(uri) === "object") {
            uri = parse(serialize(uri, options), options);
        }
        return uri;
    }
    function equal(uriA, uriB, options) {
        if (typeof uriA === "string") {
            uriA = serialize(parse(uriA, options), options);
        } else if (typeOf(uriA) === "object") {
            uriA = serialize(uriA, options);
        }
        if (typeof uriB === "string") {
            uriB = serialize(parse(uriB, options), options);
        } else if (typeOf(uriB) === "object") {
            uriB = serialize(uriB, options);
        }
        return uriA === uriB;
    }
    function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
    }
    function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
    }
    var handler = {
        scheme: "http",
        domainHost: true,
        parse: function parse(components, options) {
            //report missing host
            if (!components.host) {
                components.error = components.error || "HTTP URIs must have a host.";
            }
            return components;
        },
        serialize: function serialize(components, options) {
            var secure = String(components.scheme).toLowerCase() === "https";
            //normalize the default port
            if (components.port === (secure ? 443 : 80) || components.port === "") {
                components.port = undefined;
            }
            //normalize the empty path
            if (!components.path) {
                components.path = "/";
            }
            //NOTE: We do not parse query strings for HTTP URIs
            //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
            //and not the HTTP spec.
            return components;
        }
    };
    var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
    };
    function isSecure(wsComponents) {
        return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
    }
    //RFC 6455
    var handler$2 = {
        scheme: "ws",
        domainHost: true,
        parse: function parse(components, options) {
            var wsComponents = components;
            //indicate if the secure flag is set
            wsComponents.secure = isSecure(wsComponents);
            //construct resouce name
            wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
            wsComponents.path = undefined;
            wsComponents.query = undefined;
            return wsComponents;
        },
        serialize: function serialize(wsComponents, options) {
            //normalize the default port
            if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
                wsComponents.port = undefined;
            }
            //ensure scheme matches secure flag
            if (typeof wsComponents.secure === 'boolean') {
                wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
                wsComponents.secure = undefined;
            }
            //reconstruct path from resource name
            if (wsComponents.resourceName) {
                var _wsComponents$resourc = wsComponents.resourceName.split('?'), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
                wsComponents.path = path && path !== '/' ? path : undefined;
                wsComponents.query = query;
                wsComponents.resourceName = undefined;
            }
            //forbid fragment component
            wsComponents.fragment = undefined;
            return wsComponents;
        }
    };
    var handler$3 = {
        scheme: "wss",
        domainHost: handler$2.domainHost,
        parse: handler$2.parse,
        serialize: handler$2.serialize
    };
    var O = {};
    var isIRI = true;
    //RFC 3986
    var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (("TURBOPACK compile-time truthy", 1) ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "TURBOPACK unreachable") + "]";
    var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
    var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
    //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
    //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
    //const WSP$$ = "[\\x20\\x09]";
    //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
    //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
    //const VCHAR$$ = "[\\x21-\\x7E]";
    //const WSP$$ = "[\\x20\\x09]";
    //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
    //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
    //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
    //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
    var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
    var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
    var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
    var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
    var UNRESERVED = new RegExp(UNRESERVED$$, "g");
    var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
    var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
    var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
    var NOT_HFVALUE = NOT_HFNAME;
    function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
    }
    var handler$4 = {
        scheme: "mailto",
        parse: function parse$$1(components, options) {
            var mailtoComponents = components;
            var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
            mailtoComponents.path = undefined;
            if (mailtoComponents.query) {
                var unknownHeaders = false;
                var headers = {};
                var hfields = mailtoComponents.query.split("&");
                for(var x = 0, xl = hfields.length; x < xl; ++x){
                    var hfield = hfields[x].split("=");
                    switch(hfield[0]){
                        case "to":
                            var toAddrs = hfield[1].split(",");
                            for(var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x){
                                to.push(toAddrs[_x]);
                            }
                            break;
                        case "subject":
                            mailtoComponents.subject = unescapeComponent(hfield[1], options);
                            break;
                        case "body":
                            mailtoComponents.body = unescapeComponent(hfield[1], options);
                            break;
                        default:
                            unknownHeaders = true;
                            headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                            break;
                    }
                }
                if (unknownHeaders) mailtoComponents.headers = headers;
            }
            mailtoComponents.query = undefined;
            for(var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2){
                var addr = to[_x2].split("@");
                addr[0] = unescapeComponent(addr[0]);
                if (!options.unicodeSupport) {
                    //convert Unicode IDN -> ASCII IDN
                    try {
                        addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                    } catch (e) {
                        mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                    }
                } else {
                    addr[1] = unescapeComponent(addr[1], options).toLowerCase();
                }
                to[_x2] = addr.join("@");
            }
            return mailtoComponents;
        },
        serialize: function serialize$$1(mailtoComponents, options) {
            var components = mailtoComponents;
            var to = toArray(mailtoComponents.to);
            if (to) {
                for(var x = 0, xl = to.length; x < xl; ++x){
                    var toAddr = String(to[x]);
                    var atIdx = toAddr.lastIndexOf("@");
                    var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                    var domain = toAddr.slice(atIdx + 1);
                    //convert IDN via punycode
                    try {
                        domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                    } catch (e) {
                        components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                    }
                    to[x] = localPart + "@" + domain;
                }
                components.path = to.join(",");
            }
            var headers = mailtoComponents.headers = mailtoComponents.headers || {};
            if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
            if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
            var fields = [];
            for(var name in headers){
                if (headers[name] !== O[name]) {
                    fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
                }
            }
            if (fields.length) {
                components.query = fields.join("&");
            }
            return components;
        }
    };
    var URN_PARSE = /^([^\:]+)\:(.*)/;
    //RFC 2141
    var handler$5 = {
        scheme: "urn",
        parse: function parse$$1(components, options) {
            var matches = components.path && components.path.match(URN_PARSE);
            var urnComponents = components;
            if (matches) {
                var scheme = options.scheme || urnComponents.scheme || "urn";
                var nid = matches[1].toLowerCase();
                var nss = matches[2];
                var urnScheme = scheme + ":" + (options.nid || nid);
                var schemeHandler = SCHEMES[urnScheme];
                urnComponents.nid = nid;
                urnComponents.nss = nss;
                urnComponents.path = undefined;
                if (schemeHandler) {
                    urnComponents = schemeHandler.parse(urnComponents, options);
                }
            } else {
                urnComponents.error = urnComponents.error || "URN can not be parsed.";
            }
            return urnComponents;
        },
        serialize: function serialize$$1(urnComponents, options) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = urnComponents.nid;
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            if (schemeHandler) {
                urnComponents = schemeHandler.serialize(urnComponents, options);
            }
            var uriComponents = urnComponents;
            var nss = urnComponents.nss;
            uriComponents.path = (nid || options.nid) + ":" + nss;
            return uriComponents;
        }
    };
    var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
    //RFC 4122
    var handler$6 = {
        scheme: "urn:uuid",
        parse: function parse(urnComponents, options) {
            var uuidComponents = urnComponents;
            uuidComponents.uuid = uuidComponents.nss;
            uuidComponents.nss = undefined;
            if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
                uuidComponents.error = uuidComponents.error || "UUID is not valid.";
            }
            return uuidComponents;
        },
        serialize: function serialize(uuidComponents, options) {
            var urnComponents = uuidComponents;
            //normalize UUID
            urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
            return urnComponents;
        }
    };
    SCHEMES[handler.scheme] = handler;
    SCHEMES[handler$1.scheme] = handler$1;
    SCHEMES[handler$2.scheme] = handler$2;
    SCHEMES[handler$3.scheme] = handler$3;
    SCHEMES[handler$4.scheme] = handler$4;
    SCHEMES[handler$5.scheme] = handler$5;
    SCHEMES[handler$6.scheme] = handler$6;
    exports1.SCHEMES = SCHEMES;
    exports1.pctEncChar = pctEncChar;
    exports1.pctDecChars = pctDecChars;
    exports1.parse = parse;
    exports1.removeDotSegments = removeDotSegments;
    exports1.serialize = serialize;
    exports1.resolveComponents = resolveComponents;
    exports1.resolve = resolve;
    exports1.normalize = normalize;
    exports1.equal = equal;
    exports1.escapeComponent = escapeComponent;
    exports1.unescapeComponent = unescapeComponent;
    Object.defineProperty(exports1, '__esModule', {
        value: true
    });
}); //# sourceMappingURL=uri.all.js.map
}}),
"[project]/node_modules/fast-deep-equal/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
'use strict';
// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
}}),
"[project]/node_modules/json-schema-traverse/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
'use strict';
var traverse = module.exports = function(schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == 'function') {
        cb = opts;
        opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == 'function' ? cb : cb.pre || function() {};
    var post = cb.post || function() {};
    _traverse(opts, pre, post, schema, '', schema);
};
traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true
};
traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
};
traverse.propsKeywords = {
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
};
traverse.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
};
function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for(var key in schema){
            var sch = schema[key];
            if (Array.isArray(sch)) {
                if (key in traverse.arrayKeywords) {
                    for(var i = 0; i < sch.length; i++)_traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
                }
            } else if (key in traverse.propsKeywords) {
                if (sch && typeof sch == 'object') {
                    for(var prop in sch)_traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
                }
            } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
                _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
            }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
}
function escapeJsonPtr(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
}
}}),
"[project]/node_modules/fast-json-stable-stringify/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
'use strict';
module.exports = function(data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = {
        cmp: opts
    };
    var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;
    var cmp = opts.cmp && function(f) {
        return function(node) {
            return function(a, b) {
                var aobj = {
                    key: a,
                    value: node[a]
                };
                var bobj = {
                    key: b,
                    value: node[b]
                };
                return f(aobj, bobj);
            };
        };
    }(opts.cmp);
    var seen = [];
    return function stringify(node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }
        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);
        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for(i = 0; i < node.length; i++){
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }
        if (node === null) return 'null';
        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }
        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for(i = 0; i < keys.length; i++){
            var key = keys[i];
            var value = stringify(node[key]);
            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    }(data);
};
}}),
"[project]/node_modules/pkce-challenge/dist/index.node.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": (()=>pkceChallenge),
    "generateChallenge": (()=>generateChallenge),
    "verifyChallenge": (()=>verifyChallenge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/track-dynamic-import.js [app-rsc] (ecmascript)");
;
let crypto;
crypto = globalThis.crypto?.webcrypto ?? // Node.js [18-16] REPL
globalThis.crypto ?? // Node.js >18
/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trackDynamicImport"])(__turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs, async loader)")(__turbopack_context__.i)).then((m)=>m.webcrypto); // Node.js <18 Non-REPL
/**
 * Creates an array of length `size` of random bytes
 * @param size
 * @returns Array of random ints (0 to 255)
 */ async function getRandomValues(size) {
    return (await crypto).getRandomValues(new Uint8Array(size));
}
/** Generate cryptographically strong random string
 * @param size The desired length of the string
 * @returns The random string
 */ async function random(size) {
    const mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
    let result = "";
    const randomUints = await getRandomValues(size);
    for(let i = 0; i < size; i++){
        // cap the value of the randomIndex to mask.length - 1
        const randomIndex = randomUints[i] % mask.length;
        result += mask[randomIndex];
    }
    return result;
}
/** Generate a PKCE challenge verifier
 * @param length Length of the verifier
 * @returns A random verifier `length` characters long
 */ async function generateVerifier(length) {
    return await random(length);
}
async function generateChallenge(code_verifier) {
    const buffer = await (await crypto).subtle.digest("SHA-256", new TextEncoder().encode(code_verifier));
    // Generate base64url string
    // btoa is deprecated in Node.js but is used here for web browser compatibility
    // (which has no good replacement yet, see also https://github.com/whatwg/html/issues/6811)
    return btoa(String.fromCharCode(...new Uint8Array(buffer))).replace(/\//g, '_').replace(/\+/g, '-').replace(/=/g, '');
}
async function pkceChallenge(length) {
    if (!length) length = 43;
    if (length < 43 || length > 128) {
        throw `Expected a length between 43 and 128. Received ${length}.`;
    }
    const verifier = await generateVerifier(length);
    const challenge = await generateChallenge(verifier);
    return {
        code_verifier: verifier,
        code_challenge: challenge
    };
}
async function verifyChallenge(code_verifier, expectedChallenge) {
    const actualChallenge = await generateChallenge(code_verifier);
    return actualChallenge === expectedChallenge;
}
}),
"[project]/node_modules/eventsource-parser/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ParseError": (()=>ParseError),
    "createParser": (()=>createParser)
});
class ParseError extends Error {
    constructor(message, options){
        super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
    }
}
function noop(_arg) {}
function createParser(callbacks) {
    if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
    let incompleteLine = "", isFirstChunk = !0, id, data = "", eventType = "";
    function feed(newChunk) {
        const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
        for (const line of complete)parseLine(line);
        incompleteLine = incomplete, isFirstChunk = !1;
    }
    function parseLine(line) {
        if (line === "") {
            dispatchEvent();
            return;
        }
        if (line.startsWith(":")) {
            onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
            return;
        }
        const fieldSeparatorIndex = line.indexOf(":");
        if (fieldSeparatorIndex !== -1) {
            const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
            processField(field, value, line);
            return;
        }
        processField(line, "", line);
    }
    function processField(field, value, line) {
        switch(field){
            case "event":
                eventType = value;
                break;
            case "data":
                data = `${data}${value}
`;
                break;
            case "id":
                id = value.includes("\0") ? void 0 : value;
                break;
            case "retry":
                /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
                    type: "invalid-retry",
                    value,
                    line
                }));
                break;
            default:
                onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
                    type: "unknown-field",
                    field,
                    value,
                    line
                }));
                break;
        }
    }
    function dispatchEvent() {
        data.length > 0 && onEvent({
            id,
            event: eventType || void 0,
            // If the data buffer's last character is a U+000A LINE FEED (LF) character,
            // then remove the last character from the data buffer.
            data: data.endsWith(`
`) ? data.slice(0, -1) : data
        }), id = void 0, data = "", eventType = "";
    }
    function reset(options = {}) {
        incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = !0, id = void 0, data = "", eventType = "", incompleteLine = "";
    }
    return {
        feed,
        reset
    };
}
function splitLines(chunk) {
    const lines = [];
    let incompleteLine = "", searchIndex = 0;
    for(; searchIndex < chunk.length;){
        const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
        let lineEnd = -1;
        if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
            incompleteLine = chunk.slice(searchIndex);
            break;
        } else {
            const line = chunk.slice(searchIndex, lineEnd);
            lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
        }
    }
    return [
        lines,
        incompleteLine
    ];
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/eventsource-parser/dist/stream.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EventSourceParserStream": (()=>EventSourceParserStream)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/index.js [app-rsc] (ecmascript)");
;
;
class EventSourceParserStream extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createParser"])({
                    onEvent: (event)=>{
                        controller.enqueue(event);
                    },
                    onError (error) {
                        onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
                    },
                    onRetry,
                    onComment
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
}
;
 //# sourceMappingURL=stream.js.map
}),
"[project]/node_modules/eventsource/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ErrorEvent": (()=>ErrorEvent),
    "EventSource": (()=>EventSource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/index.js [app-rsc] (ecmascript)");
;
class ErrorEvent extends Event {
    /**
   * Constructs a new `ErrorEvent` instance. This is typically not called directly,
   * but rather emitted by the `EventSource` object when an error occurs.
   *
   * @param type - The type of the event (should be "error")
   * @param errorEventInitDict - Optional properties to include in the error event
   */ constructor(type, errorEventInitDict){
        var _a, _b;
        super(type), this.code = (_a = errorEventInitDict == null ? void 0 : errorEventInitDict.code) != null ? _a : void 0, this.message = (_b = errorEventInitDict == null ? void 0 : errorEventInitDict.message) != null ? _b : void 0;
    }
    /**
   * Node.js "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Node.js when you `console.log` an instance of this class.
   *
   * @param _depth - The current depth
   * @param options - The options passed to `util.inspect`
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @returns A string representation of the error
   */ [Symbol.for("nodejs.util.inspect.custom")](_depth, options, inspect) {
        return inspect(inspectableError(this), options);
    }
    /**
   * Deno "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Deno when you `console.log` an instance of this class.
   *
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @param options - The options passed to `Deno.inspect`
   * @returns A string representation of the error
   */ [Symbol.for("Deno.customInspect")](inspect, options) {
        return inspect(inspectableError(this), options);
    }
}
function syntaxError(message) {
    const DomException = globalThis.DOMException;
    return typeof DomException == "function" ? new DomException(message, "SyntaxError") : new SyntaxError(message);
}
function flattenError(err) {
    return err instanceof Error ? "errors" in err && Array.isArray(err.errors) ? err.errors.map(flattenError).join(", ") : "cause" in err && err.cause instanceof Error ? `${err}: ${flattenError(err.cause)}` : err.message : `${err}`;
}
function inspectableError(err) {
    return {
        type: err.type,
        message: err.message,
        code: err.code,
        defaultPrevented: err.defaultPrevented,
        cancelable: err.cancelable,
        timeStamp: err.timeStamp
    };
}
var __typeError = (msg)=>{
    throw TypeError(msg);
}, __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg), __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value), __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), member.set(obj, value), value), __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method), _readyState, _url, _redirectUrl, _withCredentials, _fetch, _reconnectInterval, _reconnectTimer, _lastEventId, _controller, _parser, _onError, _onMessage, _onOpen, _EventSource_instances, connect_fn, _onFetchResponse, _onFetchError, getRequestOptions_fn, _onEvent, _onRetryChange, failConnection_fn, scheduleReconnect_fn, _reconnect;
class EventSource extends EventTarget {
    constructor(url, eventSourceInitDict){
        var _a, _b;
        super(), __privateAdd(this, _EventSource_instances), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, __privateAdd(this, _readyState), __privateAdd(this, _url), __privateAdd(this, _redirectUrl), __privateAdd(this, _withCredentials), __privateAdd(this, _fetch), __privateAdd(this, _reconnectInterval), __privateAdd(this, _reconnectTimer), __privateAdd(this, _lastEventId, null), __privateAdd(this, _controller), __privateAdd(this, _parser), __privateAdd(this, _onError, null), __privateAdd(this, _onMessage, null), __privateAdd(this, _onOpen, null), __privateAdd(this, _onFetchResponse, async (response)=>{
            var _a2;
            __privateGet(this, _parser).reset();
            const { body, redirected, status, headers } = response;
            if (status === 204) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
                return;
            }
            if (redirected ? __privateSet(this, _redirectUrl, new URL(response.url)) : __privateSet(this, _redirectUrl, void 0), status !== 200) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, `Non-200 status code (${status})`, status);
                return;
            }
            if (!(headers.get("content-type") || "").startsWith("text/event-stream")) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, 'Invalid content type, expected "text/event-stream"', status);
                return;
            }
            if (__privateGet(this, _readyState) === this.CLOSED) return;
            __privateSet(this, _readyState, this.OPEN);
            const openEvent = new Event("open");
            if ((_a2 = __privateGet(this, _onOpen)) == null || _a2.call(this, openEvent), this.dispatchEvent(openEvent), typeof body != "object" || !body || !("getReader" in body)) {
                __privateMethod(this, _EventSource_instances, failConnection_fn).call(this, "Invalid response body, expected a web ReadableStream", status), this.close();
                return;
            }
            const decoder = new TextDecoder(), reader = body.getReader();
            let open = !0;
            do {
                const { done, value } = await reader.read();
                value && __privateGet(this, _parser).feed(decoder.decode(value, {
                    stream: !done
                })), done && (open = !1, __privateGet(this, _parser).reset(), __privateMethod(this, _EventSource_instances, scheduleReconnect_fn).call(this));
            }while (open)
        }), __privateAdd(this, _onFetchError, (err)=>{
            __privateSet(this, _controller, void 0), !(err.name === "AbortError" || err.type === "aborted") && __privateMethod(this, _EventSource_instances, scheduleReconnect_fn).call(this, flattenError(err));
        }), __privateAdd(this, _onEvent, (event)=>{
            typeof event.id == "string" && __privateSet(this, _lastEventId, event.id);
            const messageEvent = new MessageEvent(event.event || "message", {
                data: event.data,
                origin: __privateGet(this, _redirectUrl) ? __privateGet(this, _redirectUrl).origin : __privateGet(this, _url).origin,
                lastEventId: event.id || ""
            });
            __privateGet(this, _onMessage) && (!event.event || event.event === "message") && __privateGet(this, _onMessage).call(this, messageEvent), this.dispatchEvent(messageEvent);
        }), __privateAdd(this, _onRetryChange, (value)=>{
            __privateSet(this, _reconnectInterval, value);
        }), __privateAdd(this, _reconnect, ()=>{
            __privateSet(this, _reconnectTimer, void 0), __privateGet(this, _readyState) === this.CONNECTING && __privateMethod(this, _EventSource_instances, connect_fn).call(this);
        });
        try {
            if (url instanceof URL) __privateSet(this, _url, url);
            else if (typeof url == "string") __privateSet(this, _url, new URL(url, getBaseURL()));
            else throw new Error("Invalid URL");
        } catch  {
            throw syntaxError("An invalid or illegal string was specified");
        }
        __privateSet(this, _parser, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createParser"])({
            onEvent: __privateGet(this, _onEvent),
            onRetry: __privateGet(this, _onRetryChange)
        })), __privateSet(this, _readyState, this.CONNECTING), __privateSet(this, _reconnectInterval, 3e3), __privateSet(this, _fetch, (_a = eventSourceInitDict == null ? void 0 : eventSourceInitDict.fetch) != null ? _a : globalThis.fetch), __privateSet(this, _withCredentials, (_b = eventSourceInitDict == null ? void 0 : eventSourceInitDict.withCredentials) != null ? _b : !1), __privateMethod(this, _EventSource_instances, connect_fn).call(this);
    }
    /**
   * Returns the state of this EventSource object's connection. It can have the values described below.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
   *
   * Note: typed as `number` instead of `0 | 1 | 2` for compatibility with the `EventSource` interface,
   * defined in the TypeScript `dom` library.
   *
   * @public
   */ get readyState() {
        return __privateGet(this, _readyState);
    }
    /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */ get url() {
        return __privateGet(this, _url).href;
    }
    /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */ get withCredentials() {
        return __privateGet(this, _withCredentials);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */ get onerror() {
        return __privateGet(this, _onError);
    }
    set onerror(value) {
        __privateSet(this, _onError, value);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */ get onmessage() {
        return __privateGet(this, _onMessage);
    }
    set onmessage(value) {
        __privateSet(this, _onMessage, value);
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */ get onopen() {
        return __privateGet(this, _onOpen);
    }
    set onopen(value) {
        __privateSet(this, _onOpen, value);
    }
    addEventListener(type, listener, options) {
        const listen = listener;
        super.addEventListener(type, listen, options);
    }
    removeEventListener(type, listener, options) {
        const listen = listener;
        super.removeEventListener(type, listen, options);
    }
    /**
   * Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
   *
   * @public
   */ close() {
        __privateGet(this, _reconnectTimer) && clearTimeout(__privateGet(this, _reconnectTimer)), __privateGet(this, _readyState) !== this.CLOSED && (__privateGet(this, _controller) && __privateGet(this, _controller).abort(), __privateSet(this, _readyState, this.CLOSED), __privateSet(this, _controller, void 0));
    }
}
_readyState = /* @__PURE__ */ new WeakMap(), _url = /* @__PURE__ */ new WeakMap(), _redirectUrl = /* @__PURE__ */ new WeakMap(), _withCredentials = /* @__PURE__ */ new WeakMap(), _fetch = /* @__PURE__ */ new WeakMap(), _reconnectInterval = /* @__PURE__ */ new WeakMap(), _reconnectTimer = /* @__PURE__ */ new WeakMap(), _lastEventId = /* @__PURE__ */ new WeakMap(), _controller = /* @__PURE__ */ new WeakMap(), _parser = /* @__PURE__ */ new WeakMap(), _onError = /* @__PURE__ */ new WeakMap(), _onMessage = /* @__PURE__ */ new WeakMap(), _onOpen = /* @__PURE__ */ new WeakMap(), _EventSource_instances = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/ connect_fn = function() {
    __privateSet(this, _readyState, this.CONNECTING), __privateSet(this, _controller, new AbortController()), __privateGet(this, _fetch)(__privateGet(this, _url), __privateMethod(this, _EventSource_instances, getRequestOptions_fn).call(this)).then(__privateGet(this, _onFetchResponse)).catch(__privateGet(this, _onFetchError));
}, _onFetchResponse = /* @__PURE__ */ new WeakMap(), _onFetchError = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/ getRequestOptions_fn = function() {
    var _a;
    const init = {
        // [spec] Let `corsAttributeState` be `Anonymous`…
        // [spec] …will have their mode set to "cors"…
        mode: "cors",
        redirect: "follow",
        headers: {
            Accept: "text/event-stream",
            ...__privateGet(this, _lastEventId) ? {
                "Last-Event-ID": __privateGet(this, _lastEventId)
            } : void 0
        },
        cache: "no-store",
        signal: (_a = __privateGet(this, _controller)) == null ? void 0 : _a.signal
    };
    return "window" in globalThis && (init.credentials = this.withCredentials ? "include" : "same-origin"), init;
}, _onEvent = /* @__PURE__ */ new WeakMap(), _onRetryChange = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/ failConnection_fn = function(message, code) {
    var _a;
    __privateGet(this, _readyState) !== this.CLOSED && __privateSet(this, _readyState, this.CLOSED);
    const errorEvent = new ErrorEvent("error", {
        code,
        message
    });
    (_a = __privateGet(this, _onError)) == null || _a.call(this, errorEvent), this.dispatchEvent(errorEvent);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/ scheduleReconnect_fn = function(message, code) {
    var _a;
    if (__privateGet(this, _readyState) === this.CLOSED) return;
    __privateSet(this, _readyState, this.CONNECTING);
    const errorEvent = new ErrorEvent("error", {
        code,
        message
    });
    (_a = __privateGet(this, _onError)) == null || _a.call(this, errorEvent), this.dispatchEvent(errorEvent), __privateSet(this, _reconnectTimer, setTimeout(__privateGet(this, _reconnect), __privateGet(this, _reconnectInterval)));
}, _reconnect = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/ EventSource.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/ EventSource.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/ EventSource.CLOSED = 2;
function getBaseURL() {
    const doc = "document" in globalThis ? globalThis.document : void 0;
    return doc && typeof doc == "object" && "baseURI" in doc && typeof doc.baseURI == "string" ? doc.baseURI : void 0;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "defaultOptions": (()=>defaultOptions),
    "getDefaultOptions": (()=>getDefaultOptions),
    "ignoreOverride": (()=>ignoreOverride),
    "jsonDescription": (()=>jsonDescription)
});
const ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
const jsonDescription = (jsonSchema, def)=>{
    if (def.description) {
        try {
            return {
                ...jsonSchema,
                ...JSON.parse(def.description)
            };
        } catch  {}
    }
    return jsonSchema;
};
const defaultOptions = {
    name: undefined,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
};
const getDefaultOptions = (options)=>typeof options === "string" ? {
        ...defaultOptions,
        name: options
    } : {
        ...defaultOptions,
        ...options
    };
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getRefs": (()=>getRefs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)");
;
const getRefs = (options)=>{
    const _options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])(options);
    const currentPath = _options.name !== undefined ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        currentPath: currentPath,
        propertyPath: undefined,
        seen: new Map(Object.entries(_options.definitions).map(([name, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name
                    ],
                    // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
                    jsonSchema: undefined
                }
            ]))
    };
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "addErrorMessage": (()=>addErrorMessage),
    "setResponseValueAndErrors": (()=>setResponseValueAndErrors)
});
function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages) return;
    if (errorMessage) {
        res.errorMessage = {
            ...res.errorMessage,
            [key]: errorMessage
        };
    }
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseAnyDef": (()=>parseAnyDef)
});
function parseAnyDef() {
    return {};
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseArrayDef": (()=>parseArrayDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
;
;
function parseArrayDef(def, refs) {
    const res = {
        type: "array"
    };
    if (def.type?._def && def.type?._def?.typeName !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny) {
        res.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "items"
            ]
        });
    }
    if (def.minLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.minLength.value, def.minLength.message, refs);
    }
    if (def.maxLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    }
    if (def.exactLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseBigintDef": (()=>parseBigintDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
;
function parseBigintDef(def, refs) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                }
                break;
            case "multipleOf":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
                break;
        }
    }
    return res;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseBooleanDef": (()=>parseBooleanDef)
});
function parseBooleanDef() {
    return {
        type: "boolean"
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseBrandedDef": (()=>parseBrandedDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
function parseBrandedDef(_def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(_def.type._def, refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseCatchDef": (()=>parseCatchDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
const parseCatchDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseDateDef": (()=>parseDateDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
;
function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i)=>parseDateDef(def, refs, item))
        };
    }
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def, refs);
    }
}
const integerDateParser = (def, refs)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    if (refs.target === "openApi3") {
        return res;
    }
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                break;
            case "max":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                break;
        }
    }
    return res;
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseDefaultDef": (()=>parseDefaultDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
function parseDefaultDef(_def, refs) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseEffectsDef": (()=>parseEffectsDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(_def.schema._def, refs) : {};
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseEnumDef": (()=>parseEnumDef)
});
function parseEnumDef(def) {
    return {
        type: "string",
        enum: Array.from(def.values)
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseIntersectionDef": (()=>parseIntersectionDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
const isJsonSchema7AllOfType = (type)=>{
    if ("type" in type && type.type === "string") return false;
    return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
    const allOf = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? {
        unevaluatedProperties: false
    } : undefined;
    const mergedAllOf = [];
    // If either of the schemas is an allOf, merge them into a single allOf
    allOf.forEach((schema)=>{
        if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
            if (schema.unevaluatedProperties === undefined) {
                // If one of the schemas has no unevaluatedProperties set,
                // the merged schema should also have no unevaluatedProperties set
                unevaluatedProperties = undefined;
            }
        } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema;
                nestedSchema = rest;
            } else {
                // As soon as one of the schemas has additionalProperties set not to false, we allow unevaluatedProperties
                unevaluatedProperties = undefined;
            }
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf,
        ...unevaluatedProperties
    } : undefined;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseLiteralDef": (()=>parseLiteralDef)
});
function parseLiteralDef(def, refs) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object"
        };
    }
    if (refs.target === "openApi3") {
        return {
            type: parsedType === "bigint" ? "integer" : parsedType,
            enum: [
                def.value
            ]
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseStringDef": (()=>parseStringDef),
    "zodPatterns": (()=>zodPatterns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
;
let emojiRegex = undefined;
const zodPatterns = {
    /**
     * `c` was changed to `[cC]` to replicate /i flag
     */ cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
     * `a-z` was added to replicate /i flag
     */ email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
     * Constructed a valid Unicode RegExp
     *
     * Lazily instantiate since this type of regex isn't supported
     * in all envs (e.g. React Native).
     *
     * See:
     * https://github.com/colinhacks/zod/issues/2433
     * Fix in Zod:
     * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
     */ emoji: ()=>{
        if (emojiRegex === undefined) {
            emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
        }
        return emojiRegex;
    },
    /**
     * Unused
     */ uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
     * Unused
     */ ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    /**
     * Unused
     */ ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    if (def.checks) {
        for (const check of def.checks){
            switch(check.kind){
                case "min":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                    break;
                case "max":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                    break;
                case "email":
                    switch(refs.emailStrategy){
                        case "format:email":
                            addFormat(res, "email", check.message, refs);
                            break;
                        case "format:idn-email":
                            addFormat(res, "idn-email", check.message, refs);
                            break;
                        case "pattern:zod":
                            addPattern(res, zodPatterns.email, check.message, refs);
                            break;
                    }
                    break;
                case "url":
                    addFormat(res, "uri", check.message, refs);
                    break;
                case "uuid":
                    addFormat(res, "uuid", check.message, refs);
                    break;
                case "regex":
                    addPattern(res, check.regex, check.message, refs);
                    break;
                case "cuid":
                    addPattern(res, zodPatterns.cuid, check.message, refs);
                    break;
                case "cuid2":
                    addPattern(res, zodPatterns.cuid2, check.message, refs);
                    break;
                case "startsWith":
                    addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
                    break;
                case "endsWith":
                    addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
                    break;
                case "datetime":
                    addFormat(res, "date-time", check.message, refs);
                    break;
                case "date":
                    addFormat(res, "date", check.message, refs);
                    break;
                case "time":
                    addFormat(res, "time", check.message, refs);
                    break;
                case "duration":
                    addFormat(res, "duration", check.message, refs);
                    break;
                case "length":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                    break;
                case "includes":
                    {
                        addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
                        break;
                    }
                case "ip":
                    {
                        if (check.version !== "v6") {
                            addFormat(res, "ipv4", check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addFormat(res, "ipv6", check.message, refs);
                        }
                        break;
                    }
                case "base64url":
                    addPattern(res, zodPatterns.base64url, check.message, refs);
                    break;
                case "jwt":
                    addPattern(res, zodPatterns.jwt, check.message, refs);
                    break;
                case "cidr":
                    {
                        if (check.version !== "v6") {
                            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
                        }
                        break;
                    }
                case "emoji":
                    addPattern(res, zodPatterns.emoji(), check.message, refs);
                    break;
                case "ulid":
                    {
                        addPattern(res, zodPatterns.ulid, check.message, refs);
                        break;
                    }
                case "base64":
                    {
                        switch(refs.base64Strategy){
                            case "format:binary":
                                {
                                    addFormat(res, "binary", check.message, refs);
                                    break;
                                }
                            case "contentEncoding:base64":
                                {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "contentEncoding", "base64", check.message, refs);
                                    break;
                                }
                            case "pattern:zod":
                                {
                                    addPattern(res, zodPatterns.base64, check.message, refs);
                                    break;
                                }
                        }
                        break;
                    }
                case "nanoid":
                    {
                        addPattern(res, zodPatterns.nanoid, check.message, refs);
                    }
                case "toLowerCase":
                case "toUpperCase":
                case "trim":
                    break;
                default:
                    /* c8 ignore next */ ((_)=>{})(check);
            }
        }
    }
    return res;
}
function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
const ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
    let result = "";
    for(let i = 0; i < source.length; i++){
        if (!ALPHA_NUMERIC.has(source[i])) {
            result += "\\";
        }
        result += source[i];
    }
    return result;
}
// Adds a "format" keyword to the schema. If a format exists, both formats will be joined in an allOf-node, along with subsequent ones.
function addFormat(schema, value, message, refs) {
    if (schema.format || schema.anyOf?.some((x)=>x.format)) {
        if (!schema.anyOf) {
            schema.anyOf = [];
        }
        if (schema.format) {
            schema.anyOf.push({
                format: schema.format,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        format: schema.errorMessage.format
                    }
                }
            });
            delete schema.format;
            if (schema.errorMessage) {
                delete schema.errorMessage.format;
                if (Object.keys(schema.errorMessage).length === 0) {
                    delete schema.errorMessage;
                }
            }
        }
        schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "format", value, message, refs);
    }
}
// Adds a "pattern" keyword to the schema. If a pattern exists, both patterns will be joined in an allOf-node, along with subsequent ones.
function addPattern(schema, regex, message, refs) {
    if (schema.pattern || schema.allOf?.some((x)=>x.pattern)) {
        if (!schema.allOf) {
            schema.allOf = [];
        }
        if (schema.pattern) {
            schema.allOf.push({
                pattern: schema.pattern,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        pattern: schema.errorMessage.pattern
                    }
                }
            });
            delete schema.pattern;
            if (schema.errorMessage) {
                delete schema.errorMessage.pattern;
                if (Object.keys(schema.errorMessage).length === 0) {
                    delete schema.errorMessage;
                }
            }
        }
        schema.allOf.push({
            pattern: stringifyRegExpWithFlags(regex, refs),
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
    }
}
// Mutate z.string.regex() in a best attempt to accommodate for regex flags when applyRegexFlags is true
function stringifyRegExpWithFlags(regex, refs) {
    if (!refs.applyRegexFlags || !regex.flags) {
        return regex.source;
    }
    // Currently handled flags
    const flags = {
        i: regex.flags.includes("i"),
        m: regex.flags.includes("m"),
        s: regex.flags.includes("s")
    };
    // The general principle here is to step through each character, one at a time, applying mutations as flags require. We keep track when the current character is escaped, and when it's inside a group /like [this]/ or (also) a range like /[a-z]/. The following is fairly brittle imperative code; edit at your peril!
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for(let i = 0; i < source.length; i++){
        if (isEscaped) {
            pattern += source[i];
            isEscaped = false;
            continue;
        }
        if (flags.i) {
            if (inCharGroup) {
                if (source[i].match(/[a-z]/)) {
                    if (inCharRange) {
                        pattern += source[i];
                        pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
                        inCharRange = false;
                    } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
                        pattern += source[i];
                        inCharRange = true;
                    } else {
                        pattern += `${source[i]}${source[i].toUpperCase()}`;
                    }
                    continue;
                }
            } else if (source[i].match(/[a-z]/)) {
                pattern += `[${source[i]}${source[i].toUpperCase()}]`;
                continue;
            }
        }
        if (flags.m) {
            if (source[i] === "^") {
                pattern += `(^|(?<=[\r\n]))`;
                continue;
            } else if (source[i] === "$") {
                pattern += `($|(?=[\r\n]))`;
                continue;
            }
        }
        if (flags.s && source[i] === ".") {
            pattern += inCharGroup ? `${source[i]}\r\n` : `[${source[i]}\r\n]`;
            continue;
        }
        pattern += source[i];
        if (source[i] === "\\") {
            isEscaped = true;
        } else if (inCharGroup && source[i] === "]") {
            inCharGroup = false;
        } else if (!inCharGroup && source[i] === "[") {
            inCharGroup = true;
        }
    }
    try {
        new RegExp(pattern);
    } catch  {
        console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
        return regex.source;
    }
    return pattern;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseRecordDef": (()=>parseRecordDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)");
;
;
;
;
function parseRecordDef(def, refs) {
    if (refs.target === "openAi") {
        console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    }
    if (refs.target === "openApi3" && def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            type: "object",
            required: def.keyType._def.values,
            properties: def.keyType._def.values.reduce((acc, key)=>({
                    ...acc,
                    [key]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
                        ...refs,
                        currentPath: [
                            ...refs.currentPath,
                            "properties",
                            key
                        ]
                    }) ?? {}
                }), {}),
            additionalProperties: refs.rejectedAdditionalProperties
        };
    }
    const schema = {
        type: "object",
        additionalProperties: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        }) ?? refs.allowedAdditionalProperties
    };
    if (refs.target === "openApi3") {
        return schema;
    }
    if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && def.keyType._def.checks?.length) {
        const { type, ...keyType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringDef"])(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    } else if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded && def.keyType._def.type._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && def.keyType._def.type._def.checks?.length) {
        const { type, ...keyType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBrandedDef"])(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    }
    return schema;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseMapDef": (()=>parseMapDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)");
;
;
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
    }
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || {};
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || {};
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseNativeEnumDef": (()=>parseNativeEnumDef)
});
function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseNeverDef": (()=>parseNeverDef)
});
function parseNeverDef() {
    return {
        not: {}
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseNullDef": (()=>parseNullDef)
});
function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
        enum: [
            "null"
        ],
        nullable: true
    } : {
        type: "null"
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseUnionDef": (()=>parseUnionDef),
    "primitiveMappings": (()=>primitiveMappings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
const primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
function parseUnionDef(def, refs) {
    if (refs.target === "openApi3") return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    // This blocks tries to look ahead a bit to produce nicer looking schemas with type array instead of anyOf.
    if (options.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        // all types in union are primitive and lack checks, so might as well squash into {type: [...]}
        const types = options.reduce((types, x)=>{
            const type = primitiveMappings[x._def.typeName]; //Can be safely casted due to row 43
            return type && !types.includes(type) ? [
                ...types,
                type
            ] : types;
        }, []);
        return {
            type: types.length > 1 ? types : types[0]
        };
    } else if (options.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        // all options literals
        const types = options.reduce((acc, x)=>{
            const type = typeof x._def.value;
            switch(type){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            // all the literals are primitive, as far as null can be considered primitive
            const uniqueTypes = types.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options.every((x)=>x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options.reduce((acc, x)=>[
                    ...acc,
                    ...x._def.values.filter((x)=>!acc.includes(x))
                ], [])
        };
    }
    return asAnyOf(def, refs);
}
const asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : undefined;
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseNullableDef": (()=>parseNullableDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)");
;
;
function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        if (refs.target === "openApi3") {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
                nullable: true
            };
        }
        return {
            type: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
                "null"
            ]
        };
    }
    if (refs.target === "openApi3") {
        const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath
            ]
        });
        if (base && "$ref" in base) return {
            allOf: [
                base
            ],
            nullable: true
        };
        return base && {
            ...base,
            nullable: true
        };
    }
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseNumberDef": (()=>parseNumberDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
;
function parseNumberDef(def, refs) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "int":
                res.type = "integer";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addErrorMessage"])(res, "type", check.message, refs);
                break;
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                }
                break;
            case "multipleOf":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
                break;
        }
    }
    return res;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseObjectDef": (()=>parseObjectDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
;
function parseObjectDef(def, refs) {
    const forceOptionalIntoNullable = refs.target === "openAi";
    const result = {
        type: "object",
        properties: {}
    };
    const required = [];
    const shape = def.shape();
    for(const propName in shape){
        let propDef = shape[propName];
        if (propDef === undefined || propDef._def === undefined) {
            continue;
        }
        let propOptional = safeIsOptional(propDef);
        if (propOptional && forceOptionalIntoNullable) {
            if (propDef instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodOptional"]) {
                propDef = propDef._def.innerType;
            }
            if (!propDef.isNullable()) {
                propDef = propDef.nullable();
            }
            propOptional = false;
        }
        const parsedDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(propDef._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                propName
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                propName
            ]
        });
        if (parsedDef === undefined) {
            continue;
        }
        result.properties[propName] = parsedDef;
        if (!propOptional) {
            required.push(propName);
        }
    }
    if (required.length) {
        result.required = required;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== undefined) {
        result.additionalProperties = additionalProperties;
    }
    return result;
}
function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        });
    }
    switch(def.unknownKeys){
        case "passthrough":
            return refs.allowedAdditionalProperties;
        case "strict":
            return refs.rejectedAdditionalProperties;
        case "strip":
            return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
}
function safeIsOptional(schema) {
    try {
        return schema.isOptional();
    } catch  {
        return true;
    }
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseOptionalDef": (()=>parseOptionalDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
const parseOptionalDef = (def, refs)=>{
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
    }
    const innerSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: {}
            },
            innerSchema
        ]
    } : {};
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parsePipelineDef": (()=>parsePipelineDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
const parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, refs);
    }
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b
        ].filter((x)=>x !== undefined)
    };
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parsePromiseDef": (()=>parsePromiseDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
function parsePromiseDef(def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseSetDef": (()=>parseSetDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
;
function parseSetDef(def, refs) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "minItems", def.minSize.value, def.minSize.message, refs);
    }
    if (def.maxSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    }
    return schema;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseTupleDef": (()=>parseTupleDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
function parseTupleDef(def, refs) {
    if (def.rest) {
        return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === undefined ? acc : [
                    ...acc,
                    x
                ], []),
            additionalItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.rest._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "additionalItems"
                ]
            })
        };
    } else {
        return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === undefined ? acc : [
                    ...acc,
                    x
                ], [])
        };
    }
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseUndefinedDef": (()=>parseUndefinedDef)
});
function parseUndefinedDef() {
    return {
        not: {}
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseUnknownDef": (()=>parseUnknownDef)
});
function parseUnknownDef() {
    return {};
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseReadonlyDef": (()=>parseReadonlyDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
;
const parseReadonlyDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/selectParser.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "selectParser": (()=>selectParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-rsc] (ecmascript)");
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
;
const selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNumber:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNumberDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodObject:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseObjectDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBigInt:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBigintDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBoolean:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBooleanDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDate:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDateDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUndefined:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUndefinedDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNull:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNullDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodArray:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseArrayDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnion:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDiscriminatedUnion:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUnionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodIntersection:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseIntersectionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodTuple:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseTupleDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodRecord:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLiteral:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLiteralDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNativeEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNativeEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNullable:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNullableDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodOptional:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseOptionalDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodMap:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMapDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSet:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseSetDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLazy:
            return ()=>def.getter()._def;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPromise:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePromiseDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNaN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNever:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNeverDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEffects:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseEffectsDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAnyDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnknown:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUnknownDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDefault:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDefaultDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBrandedDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodReadonly:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseReadonlyDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodCatch:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCatchDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPipeline:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePipelineDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodFunction:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodVoid:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSymbol:
            return undefined;
        default:
            /* c8 ignore next */ return ((_)=>undefined)(typeName);
    }
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseDef": (()=>parseDef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$selectParser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/selectParser.js [app-rsc] (ecmascript)");
;
;
function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
        if (overrideResult !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ignoreOverride"]) {
            return overrideResult;
        }
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== undefined) {
            return seenSchema;
        }
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: undefined
    };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$selectParser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["selectParser"])(def, def.typeName, refs);
    // If the return was a function, then the inner definition needs to be extracted before a call to parseDef (recursive)
    const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema) {
        addMeta(def, refs, jsonSchema);
    }
    if (refs.postProcess) {
        const postProcessResult = refs.postProcess(jsonSchema, def, refs);
        newItem.jsonSchema = jsonSchema;
        return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema;
    return jsonSchema;
}
const get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: getRelativePath(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            {
                if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                    console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                    return {};
                }
                return refs.$refStrategy === "seen" ? {} : undefined;
            }
    }
};
const getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++){
        if (pathA[i] !== pathB[i]) break;
    }
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
const addMeta = (def, refs, jsonSchema)=>{
    if (def.description) {
        jsonSchema.description = def.description;
        if (refs.markdownDescription) {
            jsonSchema.markdownDescription = def.description;
        }
    }
    return jsonSchema;
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parseTypes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
;
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "zodToJsonSchema": (()=>zodToJsonSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-rsc] (ecmascript)");
;
;
const zodToJsonSchema = (schema, options)=>{
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRefs"])(options);
    const definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name, schema])=>({
            ...acc,
            [name]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(schema._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name
                ]
            }, true) ?? {}
        }), {}) : undefined;
    const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? undefined : options?.name;
    const main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(schema._def, name === undefined ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name
        ]
    }, false) ?? {};
    const title = typeof options === "object" && options.name !== undefined && options.nameStrategy === "title" ? options.name : undefined;
    if (title !== undefined) {
        main.title = title;
    }
    const combined = name === undefined ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name]: main
        }
    };
    if (refs.target === "jsonSchema7") {
        combined.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
        combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
        console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
    }
    return combined;
};
;
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseTypes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$selectParser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/selectParser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zodToJsonSchema"];
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseTypes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$selectParser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/selectParser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/@inngest/agent-kit/dist/chunk-S7IH62QX.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Agent": (()=>Agent),
    "AgentResult": (()=>AgentResult),
    "AgenticModel": (()=>AgenticModel),
    "Network": (()=>Network),
    "NetworkRun": (()=>NetworkRun),
    "RoutingAgent": (()=>RoutingAgent),
    "State": (()=>State),
    "__spreadProps": (()=>__spreadProps),
    "__spreadValues": (()=>__spreadValues),
    "createAgent": (()=>createAgent),
    "createAgenticModelFromAiAdapter": (()=>createAgenticModelFromAiAdapter),
    "createNetwork": (()=>createNetwork),
    "createRoutingAgent": (()=>createRoutingAgent),
    "createState": (()=>createState),
    "createTool": (()=>createTool),
    "getDefaultRoutingAgent": (()=>getDefaultRoutingAgent),
    "getInngestFnInput": (()=>getInngestFnInput),
    "getStepTools": (()=>getStepTools),
    "isInngestFn": (()=>isInngestFn),
    "stringifyError": (()=>stringifyError)
});
// src/types.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xxhashjs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xxhashjs/lib/index.js [app-rsc] (ecmascript)");
// src/util.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/inngest/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$components$2f$InngestFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/inngest/components/InngestFunction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$experimental$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/inngest/experimental.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/types.js [app-rsc] (ecmascript)");
// src/network.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f40$inngest$2f$ai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-rsc] (ecmascript) <export * as z>");
// src/agent.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$JSONSchemaToZod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dmitryrechkin/json-schema-to-zod/dist/JSONSchemaToZod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@modelcontextprotocol/sdk/dist/esm/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$streamableHttp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$sse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@modelcontextprotocol/sdk/dist/esm/client/sse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$websocket$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@modelcontextprotocol/sdk/dist/esm/client/websocket.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$shared$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@modelcontextprotocol/sdk/dist/esm/shared/transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@modelcontextprotocol/sdk/dist/esm/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/eventsource/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$helpers$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/inngest/helpers/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/inngest/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-rsc] (ecmascript)");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
;
var _checksum;
var AgentResult = class {
    constructor(agentName, output, toolCalls, createdAt, prompt, history, raw){
        this.agentName = agentName;
        this.output = output;
        this.toolCalls = toolCalls;
        this.createdAt = createdAt;
        this.prompt = prompt;
        this.history = history;
        this.raw = raw;
        // checksum memoizes a checksum so that it doe snot have to be calculated many times.
        __privateAdd(this, _checksum);
    }
    /**
   * export returns all fields necessary to store the AgentResult for future use.
   */ export() {
        return {
            agentName: this.agentName,
            output: this.output,
            toolCalls: this.toolCalls,
            createdAt: this.createdAt,
            checksum: this.checksum
        };
    }
    /**
   * checksum is a unique ID for this result.
   *
   * It is generated by taking a checksum of the message output and the created at date.
   * This allows you to dedupe items when saving conversation history.
   */ get checksum() {
        if (__privateGet(this, _checksum) === void 0) {
            const input = JSON.stringify(this.output.concat(this.toolCalls)) + this.createdAt.toString();
            __privateSet(this, _checksum, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xxhashjs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].h64(input, 0).toString());
        }
        return __privateGet(this, _checksum);
    }
};
_checksum = new WeakMap();
// src/state.ts
var createState = (initialState, opts)=>{
    return new State(__spreadProps(__spreadValues({}, opts), {
        data: initialState
    }));
};
var __kv;
var _State = class _State {
    constructor({ data, messages } = {}){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        __privateAdd(this, __kv);
        this._results = [];
        this._messages = messages || [];
        this._data = data ? __spreadValues({}, data) : {};
        this.data = new Proxy(this._data, {
            set: (target, prop, value)=>{
                if (typeof prop === "string" && prop in target) {
                    Reflect.set(target, prop, value);
                    return true;
                }
                return Reflect.set(target, prop, value);
            }
        });
        __privateSet(this, __kv, new Map(Object.entries(this._data)));
        this.kv = {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            set: (key, value)=>{
                __privateGet(this, __kv).set(key, value);
            },
            get: (key)=>{
                return __privateGet(this, __kv).get(key);
            },
            delete: (key)=>{
                return __privateGet(this, __kv).delete(key);
            },
            has: (key)=>{
                return __privateGet(this, __kv).has(key);
            },
            all: ()=>{
                return Object.fromEntries(__privateGet(this, __kv));
            }
        };
    }
    /**
   * Results returns a new array containing all past inference results in the
   * network. This array is safe to modify.
   */ get results() {
        return this._results.slice();
    }
    /**
   * formatHistory returns the memory used for agentic calls based off of prior
   * agentic calls.
   *
   * This is used to format the current State as a conversation log when
   * calling an individual agent.
   *
   */ formatHistory(formatter) {
        if (!formatter) {
            formatter = defaultResultFormatter;
        }
        return this._messages.concat(this._results.map((result)=>formatter(result)).flat());
    }
    /**
   * appendResult appends a given result to the current state.  This
   * is called by the network after each iteration.
   */ appendResult(call) {
        this._results.push(call);
    }
    /**
   * clone allows you to safely clone the state.
   */ clone() {
        const state = new _State(this.data);
        state._results = this._results.slice();
        state._messages = this._messages.slice();
        return state;
    }
};
__kv = new WeakMap();
var State = _State;
var defaultResultFormatter = (r)=>{
    return [].concat(r.output).concat(r.toolCalls);
};
;
;
;
;
var stringifyError = (e)=>{
    if (e instanceof Error) {
        return e.message;
    }
    return String(e);
};
var getStepTools = async ()=>{
    const asyncCtx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$experimental$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAsyncCtx"])();
    return asyncCtx == null ? void 0 : asyncCtx.ctx.step;
};
var isInngestFn = (fn)=>{
    if (fn instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$components$2f$InngestFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InngestFunction"]) {
        return true;
    }
    if (typeof fn === "object" && fn !== null && "createExecution" in fn && typeof fn.createExecution === "function") {
        return true;
    }
    return false;
};
var getInngestFnInput = (fn)=>{
    var _a, _b, _c;
    const runtimeSchemas = (_a = fn["client"]["schemas"]) == null ? void 0 : _a["runtimeSchemas"];
    if (!runtimeSchemas) {
        return;
    }
    const schemasToAttempt = new Set((_c = (_b = fn["opts"].triggers) == null ? void 0 : _b.reduce((acc, trigger)=>{
        if (trigger.event) {
            return [
                ...acc,
                trigger.event
            ];
        }
        return acc;
    }, [])) != null ? _c : []);
    if (!schemasToAttempt.size) {
        return;
    }
    let schema;
    for (const eventSchema of schemasToAttempt){
        const runtimeSchema = runtimeSchemas[eventSchema];
        if (typeof runtimeSchema === "object" && runtimeSchema !== null && "data" in runtimeSchema && helpers.isZodObject(runtimeSchema.data)) {
            if (schema) {
                schema = schema.or(runtimeSchema.data);
            } else {
                schema = runtimeSchema.data;
            }
            continue;
        }
    }
    return schema;
};
var helpers = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isZodObject: (value)=>{
        return value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodType"] && value._def.typeName === "ZodObject";
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isObject: (value)=>{
        return typeof value === "object" && value !== null && !Array.isArray(value);
    }
};
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
;
;
;
;
;
;
;
function createTool({ name, description, parameters, handler }) {
    return {
        name,
        description,
        parameters,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler
    };
}
// src/adapters/anthropic.ts
var requestParser = (model, messages, tools, tool_choice = "auto")=>{
    const systemMessage = messages.find((m)=>m.role === "system" && m.type === "text");
    const system = typeof (systemMessage == null ? void 0 : systemMessage.content) === "string" ? systemMessage.content : "";
    const anthropicMessages = messages.filter((m)=>m.role !== "system").reduce((acc, m)=>{
        switch(m.type){
            case "text":
                return [
                    ...acc,
                    {
                        role: m.role,
                        content: Array.isArray(m.content) ? m.content.map((text)=>({
                                type: "text",
                                text
                            })) : m.content
                    }
                ];
            case "tool_call":
                return [
                    ...acc,
                    {
                        role: m.role,
                        content: m.tools.map((tool)=>({
                                type: "tool_use",
                                id: tool.id,
                                input: tool.input,
                                name: tool.name
                            }))
                    }
                ];
            case "tool_result":
                return [
                    ...acc,
                    {
                        role: "user",
                        content: [
                            {
                                type: "tool_result",
                                tool_use_id: m.tool.id,
                                content: typeof m.content === "string" ? m.content : JSON.stringify(m.content)
                            }
                        ]
                    }
                ];
        }
    }, []);
    const lastMessage = anthropicMessages[anthropicMessages.length - 1];
    if ((lastMessage == null ? void 0 : lastMessage.role) === "assistant") {
        lastMessage.role = "user";
    }
    const request = {
        system,
        model: model.options.model,
        max_tokens: model.options.defaultParameters.max_tokens,
        messages: anthropicMessages
    };
    if (tools == null ? void 0 : tools.length) {
        request.tools = tools.map((t)=>{
            return {
                name: t.name,
                description: t.description,
                input_schema: t.parameters ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zodToJsonSchema"])(t.parameters) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zodToJsonSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}))
            };
        });
        request.tool_choice = toolChoice(tool_choice);
    }
    return request;
};
var responseParser = (input)=>{
    var _a, _b;
    if (input.type === "error") {
        throw new Error(((_a = input.error) == null ? void 0 : _a.message) || `Anthropic request failed: ${JSON.stringify(input.error)}`);
    }
    return ((_b = input == null ? void 0 : input.content) != null ? _b : []).reduce((acc, item)=>{
        if (!item.type) {
            return acc;
        }
        switch(item.type){
            case "text":
                return [
                    ...acc,
                    {
                        type: "text",
                        role: input.role,
                        content: item.text,
                        // XXX: Better stop reason parsing
                        stop_reason: "stop"
                    }
                ];
            case "tool_use":
                {
                    let args;
                    try {
                        args = typeof item.input === "string" ? JSON.parse(item.input) : item.input;
                    } catch (e) {
                        args = item.input;
                    }
                    return [
                        ...acc,
                        {
                            type: "tool_call",
                            role: input.role,
                            stop_reason: "tool",
                            tools: [
                                {
                                    type: "tool",
                                    id: item.id,
                                    name: item.name,
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                    input: args
                                }
                            ]
                        }
                    ];
                }
        }
    }, []);
};
var toolChoice = (choice)=>{
    switch(choice){
        case "auto":
            return {
                type: "auto"
            };
        case "any":
            return {
                type: "any"
            };
        default:
            if (typeof choice === "string") {
                return {
                    type: "tool",
                    name: choice
                };
            }
    }
};
;
;
var requestParser2 = (model, messages, tools, tool_choice = "auto")=>{
    var _a, _b;
    const request = {
        messages: messages.map((m)=>{
            var _a2;
            switch(m.type){
                case "text":
                    return {
                        role: m.role,
                        content: m.content
                    };
                case "tool_call":
                    return {
                        role: "assistant",
                        content: null,
                        tool_calls: m.tools ? (_a2 = m.tools) == null ? void 0 : _a2.map((tool)=>({
                                id: tool.id,
                                type: "function",
                                function: {
                                    name: tool.name,
                                    arguments: JSON.stringify(tool.input)
                                }
                            })) : void 0
                    };
                case "tool_result":
                    return {
                        role: "tool",
                        tool_call_id: m.tool.id,
                        content: typeof m.content === "string" ? m.content : JSON.stringify(m.content)
                    };
            }
        })
    };
    if (tools == null ? void 0 : tools.length) {
        request.tool_choice = toolChoice2(tool_choice);
        if (!((_a = model.options.model) == null ? void 0 : _a.includes("o3")) && !((_b = model.options.model) == null ? void 0 : _b.includes("o1"))) {
            request.parallel_tool_calls = false;
        }
        request.tools = tools.map((t)=>{
            return {
                type: "function",
                function: {
                    name: t.name,
                    description: t.description,
                    parameters: t.parameters && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zodToJsonSchema"])(t.parameters, {
                        target: "openAi"
                    }),
                    strict: typeof t.strict !== "undefined" ? t.strict : Boolean(t.parameters)
                }
            };
        });
    }
    return request;
};
var responseParser2 = (input)=>{
    var _a;
    if (input.error) {
        throw new Error(input.error.message || `OpenAI request failed: ${JSON.stringify(input.error)}`);
    }
    return ((_a = input == null ? void 0 : input.choices) != null ? _a : []).reduce((acc, choice)=>{
        var _a2, _b;
        const { message, finish_reason } = choice;
        if (!message) {
            return acc;
        }
        const base = {
            role: choice.message.role,
            stop_reason: openAiStopReasonToStateStopReason[finish_reason != null ? finish_reason : ""] || "stop"
        };
        if (message.content && message.content.trim() !== "") {
            return [
                ...acc,
                __spreadProps(__spreadValues({}, base), {
                    type: "text",
                    content: message.content
                })
            ];
        }
        if (((_b = (_a2 = message.tool_calls) == null ? void 0 : _a2.length) != null ? _b : 0) > 0) {
            return [
                ...acc,
                __spreadProps(__spreadValues({}, base), {
                    type: "tool_call",
                    tools: message.tool_calls.map((tool)=>{
                        return {
                            type: "tool",
                            id: tool.id,
                            name: tool.function.name,
                            function: tool.function.name,
                            input: safeParseOpenAIJson(tool.function.arguments || "{}")
                        };
                    })
                })
            ];
        }
        return acc;
    }, []);
};
var safeParseOpenAIJson = (str)=>{
    const trimmed = str.replace(/^["']|["']$/g, "");
    try {
        return JSON.parse(trimmed);
    } catch (e) {
        try {
            const withQuotes = trimmed.replace(/`([\s\S]*?)`/g, (_, content)=>JSON.stringify(content));
            return JSON.parse(withQuotes);
        } catch (e2) {
            throw new Error(`Failed to parse JSON with backticks: ${stringifyError(e2)}`);
        }
    }
};
var openAiStopReasonToStateStopReason = {
    tool_calls: "tool",
    stop: "stop",
    length: "stop",
    content_filter: "stop",
    function_call: "tool"
};
var toolChoice2 = (choice)=>{
    switch(choice){
        case "auto":
            return "auto";
        case "any":
            return "required";
        default:
            return {
                type: "function",
                function: {
                    name: choice
                }
            };
    }
};
;
;
;
var requestParser3 = (_model2, messages, tools, tool_choice = "auto")=>{
    const contents = messages.map((m)=>messageToContent(m));
    const functionDeclarations = tools.map((t)=>({
            name: t.name,
            description: t.description,
            parameters: t.parameters ? geminiZodToJsonSchema(t.parameters) : // eslint-disable-next-line @typescript-eslint/no-explicit-any
            geminiZodToJsonSchema(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}))
        }));
    return __spreadValues({
        contents
    }, tools.length > 0 ? {
        tools: [
            {
                functionDeclarations
            }
        ],
        tool_config: toolChoice3(tool_choice)
    } : {});
};
var messageContentToString = (content)=>{
    if (typeof content === "string") {
        return content;
    }
    return content.map((c)=>c.text).join("");
};
var responseParser3 = (input)=>{
    var _a, _b;
    if (input.error) {
        throw new Error(((_a = input.error) == null ? void 0 : _a.message) || `Gemini request failed: ${JSON.stringify(input.error)}`);
    }
    const messages = [];
    for (const candidate of (_b = input.candidates) != null ? _b : []){
        for (const content of candidate.content.parts){
            if (candidate.content.role === "user" && "text" in content) {
                messages.push({
                    role: "user",
                    type: "text",
                    content: content.text
                });
            } else if (candidate.content.role === "model" && "text" in content) {
                messages.push({
                    role: "assistant",
                    type: "text",
                    content: content.text
                });
            } else if (candidate.content.role === "model" && "functionCall" in content) {
                messages.push({
                    role: "assistant",
                    type: "tool_call",
                    stop_reason: "tool",
                    tools: [
                        {
                            name: content.functionCall.name,
                            input: content.functionCall.args,
                            type: "tool",
                            id: content.functionCall.name
                        }
                    ]
                });
            } else if (candidate.content.role === "user" && "functionResponse" in content) {
                messages.push({
                    role: "tool_result",
                    type: "tool_result",
                    stop_reason: "tool",
                    tool: {
                        name: content.functionResponse.name,
                        input: content.functionResponse.response,
                        type: "tool",
                        id: content.functionResponse.name
                    },
                    content: JSON.stringify(content.functionResponse.response)
                });
            } else {
                throw new Error("Unknown content type");
            }
        }
    }
    return messages;
};
var messageToContent = (m)=>{
    switch(m.role){
        case "system":
            return {
                role: "user",
                parts: [
                    {
                        text: messageContentToString(m.content)
                    }
                ]
            };
        case "user":
            switch(m.type){
                case "tool_call":
                    if (m.tools.length === 0) {
                        throw new Error("Tool call message must have at least one tool");
                    }
                    return {
                        role: "model",
                        parts: [
                            {
                                functionCall: {
                                    name: m.tools[0].name,
                                    args: m.tools[0].input
                                }
                            }
                        ]
                    };
                case "text":
                default:
                    return {
                        role: "user",
                        parts: [
                            {
                                text: messageContentToString(m.content)
                            }
                        ]
                    };
            }
        case "assistant":
            switch(m.type){
                case "tool_call":
                    if (m.tools.length === 0) {
                        throw new Error("Tool call message must have at least one tool");
                    }
                    return {
                        role: "model",
                        parts: [
                            {
                                functionCall: {
                                    name: m.tools[0].name,
                                    args: m.tools[0].input
                                }
                            }
                        ]
                    };
                case "text":
                default:
                    return {
                        role: "model",
                        parts: [
                            {
                                text: messageContentToString(m.content)
                            }
                        ]
                    };
            }
        case "tool_result":
            return {
                role: "user",
                parts: [
                    {
                        functionResponse: {
                            name: m.tool.name,
                            response: {
                                name: m.tool.name,
                                content: typeof m.content === "string" ? m.content : JSON.stringify(m.content)
                            }
                        }
                    }
                ]
            };
        default:
            throw new Error(`Unknown message role: ${m.role}`);
    }
};
var toolChoice3 = (choice)=>{
    switch(choice){
        case "auto":
            return {
                functionCallingConfig: {
                    mode: "AUTO"
                }
            };
        case "any":
            return {
                functionCallingConfig: {
                    mode: "ANY"
                }
            };
        default:
            if (typeof choice === "string") {
                return {
                    functionCallingConfig: {
                        mode: "ANY",
                        allowedFunctionNames: [
                            choice
                        ]
                    }
                };
            }
    }
};
var geminiZodToJsonSchema = (zod)=>{
    const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zodToJsonSchema"])(zod, {
        target: "openApi3"
    });
    delete schema["additionalProperties"];
    return schema;
};
// src/adapters/grok.ts
var requestParser4 = (model, messages, tools, tool_choice = "auto")=>{
    const request = requestParser2(model, messages, tools, tool_choice);
    request.tools = (request.tools || []).map((tool)=>__spreadProps(__spreadValues({}, tool), {
            function: __spreadProps(__spreadValues({}, tool.function), {
                strict: false
            })
        }));
    return request;
};
var responseParser4 = responseParser2;
// src/adapters/index.ts
var adapters = {
    "openai-chat": {
        request: requestParser2,
        response: responseParser2
    },
    anthropic: {
        request: requestParser,
        response: responseParser
    },
    gemini: {
        request: requestParser3,
        response: responseParser3
    },
    grok: {
        request: requestParser4,
        response: responseParser4
    }
};
// src/model.ts
var createAgenticModelFromAiAdapter = (adapter)=>{
    const opts = adapters[adapter.format];
    return new AgenticModel({
        model: adapter,
        requestParser: opts.request,
        responseParser: opts.response
    });
};
var _model;
var AgenticModel = class {
    constructor({ model, requestParser: requestParser5, responseParser: responseParser5 }){
        __privateAdd(this, _model);
        __privateSet(this, _model, model);
        this.requestParser = requestParser5;
        this.responseParser = responseParser5;
    }
    async infer(stepID, input, tools, tool_choice) {
        var _a, _b;
        const body = this.requestParser(__privateGet(this, _model), input, tools, tool_choice);
        let result;
        const step = await getStepTools();
        if (step) {
            result = await step.ai.infer(stepID, {
                model: __privateGet(this, _model),
                body
            });
        } else {
            const modelCopy = __spreadValues({}, __privateGet(this, _model));
            (_b = (_a = __privateGet(this, _model)).onCall) == null ? void 0 : _b.call(_a, modelCopy, body);
            const url = new URL(modelCopy.url || "");
            const headers = {
                "Content-Type": "application/json"
            };
            const formatHandlers = {
                "openai-chat": ()=>{
                    headers["Authorization"] = `Bearer ${modelCopy.authKey}`;
                },
                anthropic: ()=>{
                    headers["x-api-key"] = modelCopy.authKey;
                    headers["anthropic-version"] = "2023-06-01";
                },
                gemini: ()=>{},
                grok: ()=>{}
            };
            formatHandlers[modelCopy.format]();
            result = await (await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            })).json();
        }
        return {
            output: this.responseParser(result),
            raw: result
        };
    }
};
_model = new WeakMap();
// src/agent.ts
var createAgent = (opts)=>new Agent(opts);
var createRoutingAgent = (opts)=>new RoutingAgent(opts);
var Agent = class _Agent {
    constructor(opts){
        this.name = opts.name;
        this.description = opts.description || "";
        this.system = opts.system;
        this.assistant = opts.assistant || "";
        this.tools = /* @__PURE__ */ new Map();
        this.tool_choice = opts.tool_choice;
        this.lifecycles = opts.lifecycle;
        this.model = opts.model;
        this.setTools(opts.tools);
        this.mcpServers = opts.mcpServers;
        this._mcpClients = [];
    }
    setTools(tools) {
        for (const tool of tools || []){
            if (isInngestFn(tool)) {
                this.tools.set(tool["absoluteId"], {
                    name: tool["absoluteId"],
                    description: tool.description,
                    // TODO Should we error here if we can't find an input schema?
                    parameters: getInngestFnInput(tool),
                    handler: async (input, opts)=>{
                        const step = await getStepTools();
                        if (!step) {
                            throw new Error("Inngest tool called outside of Inngest context");
                        }
                        const stepId = `${opts.agent.name}/tools/${tool["absoluteId"]}`;
                        return step.invoke(stepId, {
                            function: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["referenceFunction"])({
                                appId: tool["client"]["id"],
                                functionId: tool.id()
                            }),
                            data: input
                        });
                    }
                });
            } else {
                this.tools.set(tool.name, tool);
            }
        }
    }
    withModel(model) {
        return new _Agent({
            name: this.name,
            description: this.description,
            system: this.system,
            assistant: this.assistant,
            tools: Array.from(this.tools.values()),
            lifecycle: this.lifecycles,
            model
        });
    }
    /**
   * Run runs an agent with the given user input, treated as a user message.  If
   * the input is an empty string, only the system prompt will execute.
   */ async run(input, { model, network, state, maxIter = 0 } = {}) {
        var _a, _b;
        await this.initMCP();
        const rawModel = model || this.model || (network == null ? void 0 : network.defaultModel);
        if (!rawModel) {
            throw new Error("No model provided to agent");
        }
        const p = createAgenticModelFromAiAdapter(rawModel);
        const s = state || (network == null ? void 0 : network.state) || new State();
        const run = new NetworkRun(network || createNetwork({
            name: "default",
            agents: []
        }), s);
        let history = s ? s.formatHistory() : [];
        let prompt = await this.agentPrompt(input, run);
        let result = new AgentResult(this.name, [], [], /* @__PURE__ */ new Date(), prompt, history, "");
        let hasMoreActions = true;
        let iter = 0;
        do {
            if ((_a = this.lifecycles) == null ? void 0 : _a.onStart) {
                const modified = await this.lifecycles.onStart({
                    agent: this,
                    network: run,
                    input,
                    prompt,
                    history
                });
                if (modified.stop) {
                    return result;
                }
                prompt = modified.prompt;
                history = modified.history;
            }
            const inference = await this.performInference(p, prompt, history, run);
            hasMoreActions = Boolean(this.tools.size > 0 && inference.output.length && inference.output[inference.output.length - 1].stop_reason !== "stop");
            result = inference;
            history = [
                ...inference.output
            ];
            iter++;
        }while (hasMoreActions && iter < maxIter)
        if ((_b = this.lifecycles) == null ? void 0 : _b.onFinish) {
            result = await this.lifecycles.onFinish({
                agent: this,
                network: run,
                result
            });
        }
        return result;
    }
    async performInference(p, prompt, history, network) {
        var _a;
        const { output, raw } = await p.infer(this.name, prompt.concat(history), Array.from(this.tools.values()), this.tool_choice || "auto");
        let result = new AgentResult(this.name, output, [], /* @__PURE__ */ new Date(), prompt, history, typeof raw === "string" ? raw : JSON.stringify(raw));
        if ((_a = this.lifecycles) == null ? void 0 : _a.onResponse) {
            result = await this.lifecycles.onResponse({
                agent: this,
                network,
                result
            });
        }
        const toolCallOutput = await this.invokeTools(result.output, network);
        if (toolCallOutput.length > 0) {
            result.toolCalls = result.toolCalls.concat(toolCallOutput);
        }
        return result;
    }
    /**
   * invokeTools takes output messages from an inference call then invokes any tools
   * in the message responses.
   */ async invokeTools(msgs, network) {
        const output = [];
        for (const msg of msgs){
            if (msg.type !== "tool_call") {
                continue;
            }
            if (!Array.isArray(msg.tools)) {
                continue;
            }
            for (const tool of msg.tools){
                const found = this.tools.get(tool.name);
                if (!found) {
                    throw new Error(`Inference requested a non-existent tool: ${tool.name}`);
                }
                const result = await Promise.resolve(found.handler(tool.input, {
                    agent: this,
                    network,
                    step: await getStepTools()
                })).then((r)=>{
                    return {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        data: typeof r === "undefined" ? `${tool.name} successfully executed` : r
                    };
                }).catch((err)=>{
                    return {
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f$inngest$2f$helpers$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeError"])(err)
                    };
                });
                output.push({
                    role: "tool_result",
                    type: "tool_result",
                    tool: {
                        type: "tool",
                        id: tool.id,
                        name: tool.name,
                        input: tool.input.arguments
                    },
                    content: result,
                    stop_reason: "tool"
                });
            }
        }
        return output;
    }
    async agentPrompt(input, network) {
        const messages = [
            {
                type: "text",
                role: "system",
                content: typeof this.system === "string" ? this.system : await this.system({
                    network
                })
            }
        ];
        if (input.length > 0) {
            messages.push({
                type: "text",
                role: "user",
                content: input
            });
        }
        if (this.assistant.length > 0) {
            messages.push({
                type: "text",
                role: "assistant",
                content: this.assistant
            });
        }
        return messages;
    }
    // initMCP fetches all tools from the agent's MCP servers, adding them to the tool list.
    // This is all that's necessary in order to enable MCP tool use within agents
    async initMCP() {
        if (!this.mcpServers || this._mcpClients.length >= this.mcpServers.length) {
            return;
        }
        const promises = [];
        for (const server of this.mcpServers){
            promises.push(this.listMCPTools(server));
        }
        await Promise.all(promises);
    }
    /**
   * listMCPTools lists all available tools for a given MCP server
   */ async listMCPTools(server) {
        const client = await this.mcpClient(server);
        this._mcpClients.push(client);
        try {
            const results = await client.request({
                method: "tools/list"
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListToolsResultSchema"]);
            results.tools.forEach((t)=>{
                const name = `${server.name}-${t.name}`;
                let zschema;
                try {
                    zschema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dmitryrechkin$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$JSONSchemaToZod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JSONSchemaToZod"].convert(t.inputSchema);
                } catch (e) {
                    zschema = void 0;
                }
                this.tools.set(name, {
                    name,
                    description: t.description,
                    parameters: zschema,
                    mcp: {
                        server,
                        tool: t
                    },
                    handler: async (input)=>{
                        var _a;
                        const fn = ()=>client.callTool({
                                name: t.name,
                                arguments: input
                            });
                        const step = await getStepTools();
                        const result = await ((_a = step == null ? void 0 : step.run(name, fn)) != null ? _a : fn());
                        return result.content;
                    }
                });
            });
        } catch (e) {
            console.warn("error listing mcp tools", e);
        }
    }
    /**
   * mcpClient creates a new MCP client for the given server.
   */ async mcpClient(server) {
        const transport = (()=>{
            switch(server.transport.type){
                case "streamable-http":
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$streamableHttp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StreamableHTTPClientTransport"](new URL(server.transport.url), {
                        requestInit: server.transport.requestInit,
                        authProvider: server.transport.authProvider,
                        reconnectionOptions: server.transport.reconnectionOptions,
                        sessionId: server.transport.sessionId
                    });
                case "sse":
                    if (("TURBOPACK ident replacement", globalThis).EventSource === void 0) {
                        ("TURBOPACK ident replacement", globalThis).EventSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EventSource"];
                    }
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$sse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SSEClientTransport"](new URL(server.transport.url), {
                        eventSourceInit: server.transport.eventSourceInit,
                        requestInit: server.transport.requestInit
                    });
                case "ws":
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$websocket$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WebSocketClientTransport"](new URL(server.transport.url));
            }
        })();
        const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$modelcontextprotocol$2f$sdk$2f$dist$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Client"]({
            name: this.name,
            // XXX: This version should change.
            version: "1.0.0"
        }, {
            capabilities: {}
        });
        try {
            await client.connect(transport);
        } catch (e) {
            console.warn("mcp server disconnected", server, e);
        }
        return client;
    }
};
var RoutingAgent = class _RoutingAgent extends Agent {
    constructor(opts){
        super(opts);
        this.type = "routing";
        this.lifecycles = opts.lifecycle;
    }
    withModel(model) {
        return new _RoutingAgent({
            name: this.name,
            description: this.description,
            system: this.system,
            assistant: this.assistant,
            tools: Array.from(this.tools.values()),
            lifecycle: this.lifecycles,
            model
        });
    }
};
// src/network.ts
var createNetwork = (opts)=>new Network(opts);
var Network = class {
    constructor({ name, description, agents, defaultModel, maxIter, defaultState, router, defaultRouter }){
        this._counter = 0;
        this.name = name;
        this.description = description;
        this.agents = /* @__PURE__ */ new Map();
        this._agents = /* @__PURE__ */ new Map();
        this.defaultModel = defaultModel;
        this.router = defaultRouter != null ? defaultRouter : router;
        this.maxIter = maxIter || 0;
        this._stack = [];
        if (defaultState) {
            this.state = defaultState;
        } else {
            this.state = createState();
        }
        for (const agent of agents){
            this.agents.set(agent.name, agent);
            this._agents.set(agent.name, agent);
        }
    }
    async availableAgents(networkRun = new NetworkRun(this, new State())) {
        var _a;
        const available = [];
        const all = Array.from(this.agents.values());
        for (const a of all){
            const enabled = (_a = a == null ? void 0 : a.lifecycles) == null ? void 0 : _a.enabled;
            if (!enabled || await enabled({
                agent: a,
                network: networkRun
            })) {
                available.push(a);
            }
        }
        return available;
    }
    /**
   * addAgent adds a new agent to the network.
   */ addAgent(agent) {
        this.agents.set(agent.name, agent);
    }
    /**
   * run handles a given request using the network of agents.  It is not
   * concurrency-safe; you can only call run on a network once, as networks are
   * stateful.
   *
   */ run(...[input, overrides]) {
        var _a;
        let state;
        if (overrides == null ? void 0 : overrides.state) {
            if (overrides.state instanceof State) {
                state = overrides.state;
            } else {
                state = new State(overrides.state);
            }
        } else {
            state = ((_a = this.state) == null ? void 0 : _a.clone()) || new State();
        }
        return new NetworkRun(this, state)["execute"](input, overrides);
    }
};
var defaultRoutingAgent;
var getDefaultRoutingAgent = ()=>{
    defaultRoutingAgent != null ? defaultRoutingAgent : defaultRoutingAgent = createRoutingAgent({
        name: "Default routing agent",
        description: "Selects which agents to work on based off of the current prompt and input.",
        lifecycle: {
            onRoute: ({ result })=>{
                const tool = result.toolCalls[0];
                if (!tool) {
                    return;
                }
                if (typeof tool.content === "object" && tool.content !== null && "data" in tool.content && typeof tool.content.data === "string") {
                    return [
                        tool.content.data
                    ];
                }
                return;
            }
        },
        tools: [
            // This tool does nothing but ensure that the model responds with the
            // agent name as valid JSON.
            createTool({
                name: "select_agent",
                description: "select an agent to handle the input, based off of the current conversation",
                parameters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The name of the agent that should handle the request")
                }).strict(),
                handler: ({ name }, { network })=>{
                    if (typeof name !== "string") {
                        throw new Error("The routing agent requested an invalid agent");
                    }
                    const agent = network.agents.get(name);
                    if (agent === void 0) {
                        throw new Error(`The routing agent requested an agent that doesn't exist: ${name}`);
                    }
                    return agent.name;
                }
            })
        ],
        tool_choice: "select_agent",
        system: async ({ network })=>{
            if (!network) {
                throw new Error("The routing agent can only be used within a network of agents");
            }
            const agents = await (network == null ? void 0 : network.availableAgents());
            return `You are the orchestrator between a group of agents.  Each agent is suited for a set of specific tasks, and has a name, instructions, and a set of tools.

The following agents are available:
<agents>
  ${agents.map((a)=>{
                return `
    <agent>
      <name>${a.name}</name>
      <description>${a.description}</description>
      <tools>${JSON.stringify(Array.from(a.tools.values()))}</tools>
    </agent>`;
            }).join("\n")}
</agents>

Follow the set of instructions:

<instructions>
  Think about the current history and status.  Determine which agent to use to handle the user's request, based off of the current agents and their tools.

  Your aim is to thoroughly complete the request, thinking step by step, choosing the right agent based off of the context.
</instructions>
    `;
        }
    });
    return defaultRoutingAgent;
};
var NetworkRun = class extends Network {
    constructor(network, state){
        super({
            name: network.name,
            description: network.description,
            agents: Array.from(network.agents.values()),
            defaultModel: network.defaultModel,
            defaultState: network.state,
            router: network.router,
            maxIter: network.maxIter
        });
        this.state = state;
    }
    run() {
        throw new Error("NetworkRun does not support run");
    }
    async availableAgents() {
        return super.availableAgents(this);
    }
    /**
   * Schedule is used to push an agent's run function onto the stack.
   */ schedule(agentName) {
        this["_stack"].push(agentName);
    }
    async execute(...[input, overrides]) {
        const available = await this.availableAgents();
        if (available.length === 0) {
            throw new Error("no agents enabled in network");
        }
        const next = await this.getNextAgents(input, (overrides == null ? void 0 : overrides.router) || (overrides == null ? void 0 : overrides.defaultRouter) || this.router);
        if (!(next == null ? void 0 : next.length)) {
            return this;
        }
        for (const agent of next){
            this.schedule(agent.name);
        }
        while(this._stack.length > 0 && (this.maxIter === 0 || this._counter < this.maxIter)){
            const agentName = this._stack.shift();
            const agent = agentName && this._agents.get(agentName);
            if (!agent) {
                return this;
            }
            const call = await agent.run(input, {
                network: this,
                maxIter: 0
            });
            this._counter += 1;
            this.state.appendResult(call);
            const next2 = await this.getNextAgents(input, (overrides == null ? void 0 : overrides.router) || (overrides == null ? void 0 : overrides.defaultRouter) || this.router);
            for (const a of next2 || []){
                this.schedule(a.name);
            }
        }
        return this;
    }
    async getNextAgents(input, router) {
        if (!router && !this.defaultModel) {
            throw new Error("No router or model defined in network.  You must pass a router or a default model to use the built-in agentic router.");
        }
        if (!router) {
            router = getDefaultRoutingAgent();
        }
        if (router instanceof RoutingAgent) {
            return await this.getNextAgentsViaRoutingAgent(router, input);
        }
        const stack = this._stack.map((name)=>{
            const agent2 = this._agents.get(name);
            if (!agent2) {
                throw new Error(`unknown agent in the network stack: ${name}`);
            }
            return agent2;
        });
        const agent = await router({
            input,
            network: this,
            stack,
            lastResult: this.state.results.pop(),
            callCount: this._counter
        });
        if (!agent) {
            return;
        }
        if (agent instanceof RoutingAgent) {
            return await this.getNextAgentsViaRoutingAgent(agent, input);
        }
        for (const a of Array.isArray(agent) ? agent : [
            agent
        ]){
            if (!this._agents.has(a.name)) {
                this._agents.set(a.name, a);
            }
        }
        return Array.isArray(agent) ? agent : [
            agent
        ];
    }
    async getNextAgentsViaRoutingAgent(routingAgent, input) {
        const result = await routingAgent.run(input, {
            network: this,
            model: routingAgent.model || this.defaultModel
        });
        const agentNames = routingAgent.lifecycles.onRoute({
            result,
            agent: routingAgent,
            network: this
        });
        return (agentNames || []).map((name)=>this.agents.get(name)).filter(Boolean);
    }
};
;
 //# sourceMappingURL=chunk-S7IH62QX.js.map
}),
"[project]/node_modules/@inngest/agent-kit/dist/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$dist$2f$chunk$2d$S7IH62QX$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/dist/chunk-S7IH62QX.js [app-rsc] (ecmascript)");
// src/models.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f40$inngest$2f$ai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/index.js [app-rsc] (ecmascript)");
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/@inngest/agent-kit/dist/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$dist$2f$chunk$2d$S7IH62QX$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/dist/chunk-S7IH62QX.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$node_modules$2f40$inngest$2f$ai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/node_modules/@inngest/ai/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inngest$2f$agent$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@inngest/agent-kit/dist/index.js [app-rsc] (ecmascript) <locals>");
}),

};

//# sourceMappingURL=_f9cf82d0._.js.map