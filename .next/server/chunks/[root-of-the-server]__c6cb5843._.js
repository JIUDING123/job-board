module.exports = {

"[externals]/node:crypto [external] (node:crypto, cjs, async loader)": ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/node:crypto [external] (node:crypto, cjs)");
    });
});
}),
"[project]/node_modules/@react-email/render/dist/node/index.mjs [app-route] (ecmascript, async loader)": ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules_next_dist_compiled_react-dom-experimental_server_4afdfe51.js",
  "server/chunks/node_modules_76f07914._.js",
  "server/chunks/[root-of-the-server]__02325f31._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/@react-email/render/dist/node/index.mjs [app-route] (ecmascript)");
    });
});
}),

};