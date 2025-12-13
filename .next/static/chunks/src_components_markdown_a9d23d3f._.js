(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/markdown/MarkdownRenderer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MarkdownRenderer": (()=>MarkdownRenderer),
    "markdownClassNames": (()=>markdownClassNames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2f$rsc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-mdx-remote/rsc.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2f$dist$2f$rsc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-mdx-remote/dist/rsc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
;
;
;
;
const markdownClassNames = "max-w-none prose prose-neutral dark:prose-invert font-sans";
function MarkdownRenderer({ className, options, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(markdownClassNames, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$2f$dist$2f$rsc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MDXRemote"], {
            ...props,
            options: {
                mdxOptions: {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
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
_c = MarkdownRenderer;
var _c;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/markdown/_MarkdownEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InternalMarkdownEditor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsDarkMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$BlockTypeSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/toolbar/components/BlockTypeSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$BoldItalicUnderlineToggles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/toolbar/components/BoldItalicUnderlineToggles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$headings$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/headings/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$InsertTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/toolbar/components/InsertTable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$InsertThematicBreak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/toolbar/components/InsertThematicBreak.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$lists$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/lists/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$ListsToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/toolbar/components/ListsToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$markdown$2d$shortcut$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/markdown-shortcut/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$MDXEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/MDXEditor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$quote$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/quote/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/table/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$thematic$2d$break$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/thematic-break/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdxeditor/editor/dist/plugins/toolbar/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$markdown$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/markdown/MarkdownRenderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function InternalMarkdownEditor({ ref, className, ...props }) {
    _s();
    const isDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDarkMode"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$MDXEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MDXEditor"], {
        ...props,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$markdown$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markdownClassNames"], isDarkMode && "dark-theme", className),
        suppressHtmlProcessing: true,
        plugins: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$headings$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingsPlugin"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$lists$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listsPlugin"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$quote$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotePlugin"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$thematic$2d$break$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thematicBreakPlugin"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$markdown$2d$shortcut$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markdownShortcutPlugin"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tablePlugin"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toolbarPlugin"])({
                toolbarContents: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$BlockTypeSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockTypeSelect"], {}, void 0, false, {
                                fileName: "[project]/src/components/markdown/_MarkdownEditor.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$BoldItalicUnderlineToggles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoldItalicUnderlineToggles"], {}, void 0, false, {
                                fileName: "[project]/src/components/markdown/_MarkdownEditor.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$ListsToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListsToggle"], {}, void 0, false, {
                                fileName: "[project]/src/components/markdown/_MarkdownEditor.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$InsertThematicBreak$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertThematicBreak"], {}, void 0, false, {
                                fileName: "[project]/src/components/markdown/_MarkdownEditor.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdxeditor$2f$editor$2f$dist$2f$plugins$2f$toolbar$2f$components$2f$InsertTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertTable"], {}, void 0, false, {
                                fileName: "[project]/src/components/markdown/_MarkdownEditor.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true)
            })
        ]
    }, void 0, false, {
        fileName: "[project]/src/components/markdown/_MarkdownEditor.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(InternalMarkdownEditor, "lOswsGE9JxN6RtwOM/ApCDGsRSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDarkMode"]
    ];
});
_c = InternalMarkdownEditor;
var _c;
__turbopack_context__.k.register(_c, "InternalMarkdownEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/markdown/_MarkdownEditor.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/markdown/_MarkdownEditor.tsx [app-client] (ecmascript)"));
}),
}]);

//# sourceMappingURL=src_components_markdown_a9d23d3f._.js.map