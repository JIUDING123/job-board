module.exports = {

"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/services/uploadthing/components/UploadThing.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "UploadDropzone": (()=>UploadDropzone)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@uploadthing/react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const UploadDropzoneComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateUploadDropzone"])();
function UploadDropzone({ className, onClientUploadComplete, onUploadError, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadDropzoneComponent, {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-dashed border-2 border-muted rounded-lg flex items-center justify-center", className),
        onClientUploadComplete: (res)=>{
            res.forEach(({ serverData })=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(serverData.message);
            });
            onClientUploadComplete?.(res);
        },
        onUploadError: (error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message);
            onUploadError?.(error);
        }
    }, void 0, false, {
        fileName: "[project]/src/services/uploadthing/components/UploadThing.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(job-seeker)/user-settings/resume/_DropzoneClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DropzoneClient": (()=>DropzoneClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$uploadthing$2f$components$2f$UploadThing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/uploadthing/components/UploadThing.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function DropzoneClient() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$uploadthing$2f$components$2f$UploadThing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadDropzone"], {
        endpoint: "resumeUploader",
        onClientUploadComplete: ()=>router.refresh()
    }, void 0, false, {
        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/_DropzoneClient.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/env/server.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "env": (()=>env)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
    server: {
        DB_PASSWORD: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        DB_USER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        DB_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        DB_PORT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        DB_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        CLERK_SECRET_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        CLERK_WEBHOOK_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        ANTHROPIC_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        GEMINI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        RESEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        SERVER_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        HTTP_PROXY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        HTTPS_PROXY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    },
    createFinalSchema: (env)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(env).transform((val)=>{
            const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, ...rest } = val;
            return {
                ...rest,
                DATABASE_URL: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
            };
        });
    },
    emptyStringAsUndefined: true,
    experimental__runtimeEnv: process.env
});
// Configure global proxy settings if available
if (typeof process !== 'undefined' && process.env.HTTPS_PROXY) {
    console.log(`Setting global proxy: ${process.env.HTTPS_PROXY}`);
    // These environment variables are automatically picked up by Node.js fetch
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Only use in development!
}
}),
"[externals]/pg [external] (pg, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createdAt": (()=>createdAt),
    "id": (()=>id),
    "updatedAt": (()=>updatedAt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-ssr] (ecmascript)");
;
const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuid"])().primaryKey().defaultRandom();
const createdAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timestamp"])({
    withTimezone: true
}).notNull().defaultNow();
const updatedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timestamp"])({
    withTimezone: true
}).notNull().defaultNow().$onUpdate(()=>new Date());
}),
"[project]/src/drizzle/schema/userResume.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "UserResumeTable": (()=>UserResumeTable),
    "userResumeRelations": (()=>userResumeRelations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-ssr] (ecmascript)");
;
;
;
;
const UserResumeTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgTable"])("user_resumes", {
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().primaryKey().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id),
    resumeFileUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull(),
    resumeFileKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull(),
    aiSummary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createdAt"],
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatedAt"]
});
const userResumeRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relations"])(UserResumeTable, ({ one })=>({
        user: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"], {
            fields: [
                UserResumeTable.userId
            ],
            references: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id
            ]
        })
    }));
}),
"[project]/src/drizzle/schema/userNotificationSettings.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "UserNotificationSettingsTable": (()=>UserNotificationSettingsTable),
    "userNotificationSettingsRelations": (()=>userNotificationSettingsRelations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-ssr] (ecmascript)");
;
;
;
;
const UserNotificationSettingsTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgTable"])("user_notification_settings", {
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().primaryKey().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id),
    newJobEmailNotifications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])().notNull().default(false),
    aiPrompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createdAt"],
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatedAt"]
});
const userNotificationSettingsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relations"])(UserNotificationSettingsTable, ({ one })=>({
        user: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"], {
            fields: [
                UserNotificationSettingsTable.userId
            ],
            references: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id
            ]
        })
    }));
}),
"[project]/src/drizzle/schema/jobListingApplication.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JobListingApplicationTable": (()=>JobListingApplicationTable),
    "applicationStageEnum": (()=>applicationStageEnum),
    "applicationStages": (()=>applicationStages),
    "jobListingApplicationRelations": (()=>jobListingApplicationRelations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/primary-keys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-ssr] (ecmascript)");
;
;
;
;
;
const applicationStages = [
    "denied",
    "applied",
    "interested",
    "interviewed",
    "hired"
];
const applicationStageEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgEnum"])("job_listing_applications_stage", applicationStages);
const JobListingApplicationTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgTable"])("job_listing_applications", {
    jobListingId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuid"])().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingTable"].id, {
        onDelete: "cascade"
    }).notNull(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id, {
        onDelete: "cascade"
    }).notNull(),
    coverLetter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"])(),
    rating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integer"])(),
    stage: applicationStageEnum().notNull().default("applied"),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createdAt"],
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatedAt"]
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                table.jobListingId,
                table.userId
            ]
        })
    ]);
const jobListingApplicationRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relations"])(JobListingApplicationTable, ({ one })=>({
        jobListing: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingTable"], {
            fields: [
                JobListingApplicationTable.jobListingId
            ],
            references: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingTable"].id
            ]
        }),
        user: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"], {
            fields: [
                JobListingApplicationTable.userId
            ],
            references: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id
            ]
        })
    }));
}),
"[project]/src/drizzle/schema/jobListing.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JobListingTable": (()=>JobListingTable),
    "experienceLevelEnum": (()=>experienceLevelEnum),
    "experienceLevels": (()=>experienceLevels),
    "jobListingReferences": (()=>jobListingReferences),
    "jobListingStatusEnum": (()=>jobListingStatusEnum),
    "jobListingStatuses": (()=>jobListingStatuses),
    "jobListingTypeEnum": (()=>jobListingTypeEnum),
    "jobListingTypes": (()=>jobListingTypes),
    "locationRequirementEnum": (()=>locationRequirementEnum),
    "locationRequirements": (()=>locationRequirements),
    "wageIntervalEnum": (()=>wageIntervalEnum),
    "wageIntervals": (()=>wageIntervals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/enum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/indexes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organization.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListingApplication.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const wageIntervals = [
    "hourly",
    "yearly"
];
const wageIntervalEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgEnum"])("job_listings_wage_interval", wageIntervals);
const locationRequirements = [
    "in-office",
    "hybrid",
    "remote"
];
const locationRequirementEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgEnum"])("job_listings_location_requirement", locationRequirements);
const experienceLevels = [
    "junior",
    "mid-level",
    "senior"
];
const experienceLevelEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgEnum"])("job_listings_experience_level", experienceLevels);
const jobListingStatuses = [
    "draft",
    "published",
    "delisted"
];
const jobListingStatusEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgEnum"])("job_listings_status", jobListingStatuses);
const jobListingTypes = [
    "internship",
    "part-time",
    "full-time"
];
const jobListingTypeEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgEnum"])("job_listings_type", jobListingTypes);
const JobListingTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgTable"])("job_listings", {
    id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["id"],
    organizationId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"].id, {
        onDelete: "cascade"
    }).notNull(),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"])().notNull(),
    wage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integer"])(),
    wageInterval: wageIntervalEnum(),
    stateAbbreviation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])(),
    city: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])(),
    isFeatured: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])().notNull().default(false),
    locationRequirement: locationRequirementEnum().notNull(),
    experienceLevel: experienceLevelEnum().notNull(),
    status: jobListingStatusEnum().notNull().default("draft"),
    type: jobListingTypeEnum().notNull(),
    postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timestamp"])({
        withTimezone: true
    }),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createdAt"],
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatedAt"]
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["index"])().on(table.stateAbbreviation)
    ]);
const jobListingReferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relations"])(JobListingTable, ({ one, many })=>({
        organization: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"], {
            fields: [
                JobListingTable.organizationId
            ],
            references: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"].id
            ]
        }),
        applications: many(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingApplicationTable"])
    }));
}),
"[project]/src/drizzle/schema/organization.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "OrganizationTable": (()=>OrganizationTable),
    "organizationRelations": (()=>organizationRelations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organizationUserSettings.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const OrganizationTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgTable"])("organizations", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createdAt"],
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatedAt"]
});
const organizationRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relations"])(OrganizationTable, ({ many })=>({
        jobListings: many(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingTable"]),
        organizationUserSettings: many(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationUserSettingsTable"])
    }));
}),
"[project]/src/drizzle/schema/organizationUserSettings.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "OrganizationUserSettingsTable": (()=>OrganizationUserSettingsTable),
    "organizationUserSettingsRelations": (()=>organizationUserSettingsRelations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/primary-keys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organization.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-ssr] (ecmascript)");
;
;
;
;
;
const OrganizationUserSettingsTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgTable"])("organization_user_settings", {
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id),
    organizationId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"].id),
    newApplicationEmailNotifications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"])().notNull().default(false),
    minimumRating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integer"])(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createdAt"],
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatedAt"]
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                table.userId,
                table.organizationId
            ]
        })
    ]);
const organizationUserSettingsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relations"])(OrganizationUserSettingsTable, ({ one })=>({
        user: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"], {
            fields: [
                OrganizationUserSettingsTable.userId
            ],
            references: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id
            ]
        }),
        organization: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"], {
            fields: [
                OrganizationUserSettingsTable.userId
            ],
            references: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"].id
            ]
        })
    }));
}),
"[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "UserTable": (()=>UserTable),
    "userRelations": (()=>userRelations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schemaHelpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userResume.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userNotificationSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userNotificationSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organizationUserSettings.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const UserTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pgTable"])("users", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varchar"])().notNull().unique(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createdAt"],
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schemaHelpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatedAt"]
});
const userRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relations"])(UserTable, ({ one, many })=>({
        notificationSettings: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userNotificationSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserNotificationSettingsTable"]),
        resume: one(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserResumeTable"]),
        organizationUserSettings: many(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationUserSettingsTable"])
    }));
}),
"[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organization.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userResume.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userNotificationSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userNotificationSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListingApplication.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organizationUserSettings.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organization.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userResume.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userNotificationSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userNotificationSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListingApplication.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organizationUserSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <locals>");
}),
"[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JobListingApplicationTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingApplicationTable"]),
    "JobListingTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingTable"]),
    "OrganizationTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"]),
    "OrganizationUserSettingsTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationUserSettingsTable"]),
    "UserNotificationSettingsTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userNotificationSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserNotificationSettingsTable"]),
    "UserResumeTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserResumeTable"]),
    "UserTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"]),
    "applicationStageEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationStageEnum"]),
    "applicationStages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationStages"]),
    "experienceLevelEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experienceLevelEnum"]),
    "experienceLevels": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experienceLevels"]),
    "jobListingApplicationRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobListingApplicationRelations"]),
    "jobListingReferences": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobListingReferences"]),
    "jobListingStatusEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobListingStatusEnum"]),
    "jobListingStatuses": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobListingStatuses"]),
    "jobListingTypeEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobListingTypeEnum"]),
    "jobListingTypes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobListingTypes"]),
    "locationRequirementEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationRequirementEnum"]),
    "locationRequirements": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationRequirements"]),
    "organizationRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["organizationRelations"]),
    "organizationUserSettingsRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["organizationUserSettingsRelations"]),
    "userNotificationSettingsRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userNotificationSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userNotificationSettingsRelations"]),
    "userRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userRelations"]),
    "userResumeRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userResumeRelations"]),
    "wageIntervalEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wageIntervalEnum"]),
    "wageIntervals": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wageIntervals"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organization.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userResume.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userNotificationSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userNotificationSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$jobListingApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/jobListingApplication.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organizationUserSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organizationUserSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <locals>");
}),
"[project]/src/drizzle/schema.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JobListingApplicationTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["JobListingApplicationTable"]),
    "JobListingTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["JobListingTable"]),
    "OrganizationTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OrganizationTable"]),
    "OrganizationUserSettingsTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OrganizationUserSettingsTable"]),
    "UserNotificationSettingsTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["UserNotificationSettingsTable"]),
    "UserResumeTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["UserResumeTable"]),
    "UserTable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["UserTable"]),
    "applicationStageEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["applicationStageEnum"]),
    "applicationStages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["applicationStages"]),
    "experienceLevelEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["experienceLevelEnum"]),
    "experienceLevels": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["experienceLevels"]),
    "jobListingApplicationRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["jobListingApplicationRelations"]),
    "jobListingReferences": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["jobListingReferences"]),
    "jobListingStatusEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["jobListingStatusEnum"]),
    "jobListingStatuses": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["jobListingStatuses"]),
    "jobListingTypeEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["jobListingTypeEnum"]),
    "jobListingTypes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["jobListingTypes"]),
    "locationRequirementEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["locationRequirementEnum"]),
    "locationRequirements": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["locationRequirements"]),
    "organizationRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["organizationRelations"]),
    "organizationUserSettingsRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["organizationUserSettingsRelations"]),
    "userNotificationSettingsRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["userNotificationSettingsRelations"]),
    "userRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["userRelations"]),
    "userResumeRelations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["userResumeRelations"]),
    "wageIntervalEnum": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["wageIntervalEnum"]),
    "wageIntervals": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["wageIntervals"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <exports>");
}),
"[project]/src/drizzle/db.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/env/server.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/node-postgres/driver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drizzle"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$env$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"].DATABASE_URL, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/dataCache.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getGlobalTag": (()=>getGlobalTag),
    "getIdTag": (()=>getIdTag),
    "getJobListingTag": (()=>getJobListingTag),
    "getOrganizationTag": (()=>getOrganizationTag)
});
function getGlobalTag(tag) {
    return `global:${tag}`;
}
function getJobListingTag(tag, jobListingId) {
    return `jobListing:${jobListingId}-${tag}`;
}
function getOrganizationTag(tag, organizationId) {
    return `organization:${organizationId}-${tag}`;
}
function getIdTag(tag, id) {
    return `id:${id}-${tag}`;
}
}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[project]/src/features/organizations/db/cache/organizations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getOrganizationGlobalTag": (()=>getOrganizationGlobalTag),
    "getOrganizationIdTag": (()=>getOrganizationIdTag),
    "revalidateOrganizationCache": (()=>revalidateOrganizationCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dataCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-ssr] (ecmascript)");
;
;
function getOrganizationGlobalTag() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalTag"])("organizations");
}
function getOrganizationIdTag(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIdTag"])("organizations", id);
}
function revalidateOrganizationCache(id) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalidateTag"])(getOrganizationGlobalTag());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalidateTag"])(getOrganizationIdTag(id));
}
}),
"[project]/src/features/users/db/cache/users.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getUserGlobalTag": (()=>getUserGlobalTag),
    "getUserIdTag": (()=>getUserIdTag),
    "revalidateUserCache": (()=>revalidateUserCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dataCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-ssr] (ecmascript)");
;
;
function getUserGlobalTag() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalTag"])("users");
}
function getUserIdTag(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIdTag"])("users", id);
}
function revalidateUserCache(id) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalidateTag"])(getUserGlobalTag());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalidateTag"])(getUserIdTag(id));
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/src/services/clerk/lib/getCurrentAuth.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "getCurrentOrganization": (()=>getCurrentOrganization),
    "getCurrentUser": (()=>getCurrentUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/organization.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$organizations$2f$db$2f$cache$2f$organizations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/organizations/db/cache/organizations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$users$2f$db$2f$cache$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/users/db/cache/users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/use-cache/cache-tag.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
async function getCurrentUser({ allData = false } = {}) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"])();
    return {
        userId,
        user: allData && userId != null ? await getUser(userId) : undefined
    };
}
async function getCurrentOrganization({ allData = false } = {}) {
    const { orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"])();
    return {
        orgId,
        organization: allData && orgId != null ? await getOrganization(orgId) : undefined
    };
}
async function getUser(id) {
    "use cache";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$users$2f$db$2f$cache$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserIdTag"])(id));
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].query.UserTable.findFirst({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserTable"].id, id)
    });
}
async function getOrganization(id) {
    "use cache";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$organizations$2f$db$2f$cache$2f$organizations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrganizationIdTag"])(id));
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].query.OrganizationTable.findFirst({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$organization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrganizationTable"].id, id)
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/features/users/db/cache/userResumes.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getUserResumeGlobalTag": (()=>getUserResumeGlobalTag),
    "getUserResumeIdTag": (()=>getUserResumeIdTag),
    "revalidateUserResumeCache": (()=>revalidateUserResumeCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dataCache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-ssr] (ecmascript)");
;
;
function getUserResumeGlobalTag() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalTag"])("userResumes");
}
function getUserResumeIdTag(userId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dataCache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIdTag"])("userResumes", userId);
}
function revalidateUserResumeCache(userId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalidateTag"])(getUserResumeGlobalTag());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalidateTag"])(getUserResumeIdTag(userId));
}
}),
"[externals]/next-mdx-remote/rsc [external] (next-mdx-remote/rsc, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("next-mdx-remote/rsc");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/components/markdown/MarkdownRenderer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "MarkdownRenderer": (()=>MarkdownRenderer),
    "markdownClassNames": (()=>markdownClassNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2f$rsc__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2f$rsc$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-mdx-remote/rsc [external] (next-mdx-remote/rsc, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2f$rsc__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2f$rsc$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2f$rsc__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2f$rsc$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const markdownClassNames = "max-w-none prose prose-neutral dark:prose-invert font-sans";
function MarkdownRenderer({ className, options, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(markdownClassNames, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote$2f$rsc__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2f$rsc$2c$__esm_import$29$__["MDXRemote"], {
            ...props,
            options: {
                mdxOptions: {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                        ...options?.mdxOptions?.remarkPlugins ?? []
                    ],
                    ...options?.mdxOptions
                }
            }
        }, void 0, false, {
            fileName: "[project]/src/components/markdown/MarkdownRenderer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/markdown/MarkdownRenderer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(job-seeker)/user-settings/resume/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>UserResumePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$job$2d$seeker$292f$user$2d$settings$2f$resume$2f$_DropzoneClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(job-seeker)/user-settings/resume/_DropzoneClient.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/clerk/lib/getCurrentAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$users$2f$db$2f$cache$2f$userResumes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/users/db/cache/userResumes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/drizzle/schema.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/drizzle/schema/userResume.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/use-cache/cache-tag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$markdown$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/markdown/MarkdownRenderer.tsx [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$markdown$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$markdown$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
"use client";
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
function UserResumePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto py-8 space-y-6 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold",
                children: "Upload Your Resume"
            }, void 0, false, {
                fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$job$2d$seeker$292f$user$2d$settings$2f$resume$2f$_DropzoneClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropzoneClient"], {}, void 0, false, {
                            fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumeDetails, {}, void 0, false, {
                            fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AISummaryCard, {}, void 0, false, {
                    fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
async function ResumeDetails() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (userId == null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    const userResume = await getUserResume(userId);
    if (userResume == null) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: userResume.resumeFileUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "View Resume"
            }, void 0, false, {
                fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
async function AISummaryCard() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$clerk$2f$lib$2f$getCurrentAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    console.log("userId", userId);
    if (userId == null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    const userResume = await getUserResume(userId);
    if (userResume == null || userResume.aiSummary == null) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "AI Summary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "This is an AI-generated summary of your resume. This is used by employers to quickly understand your qualifications and experience."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$markdown$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownRenderer"], {
                    source: userResume.aiSummary
                }, void 0, false, {
                    fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(job-seeker)/user-settings/resume/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
async function getUserResume(userId) {
    "use cache";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$use$2d$cache$2f$cache$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheTag"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$users$2f$db$2f$cache$2f$userResumes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserResumeIdTag"])(userId));
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].query.UserResumeTable.findFirst({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$drizzle$2f$schema$2f$userResume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserResumeTable"].userId, userId)
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e8a526af._.js.map