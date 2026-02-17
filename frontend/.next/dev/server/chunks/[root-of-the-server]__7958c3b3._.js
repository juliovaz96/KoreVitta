module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/mock-screen-state.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeRoutePath",
    ()=>normalizeRoutePath,
    "resolveScreenState",
    ()=>resolveScreenState
]);
const routeStateMap = {
    "/dashboard": "ready",
    "/patients": "empty",
    "/patients/new": "success",
    "/patients/[id]": "ready",
    "/patients/[id]/protocol": "ready",
    "/patients/[id]/checkins": "ready",
    "/patients/[id]/checkins/[checkinId]/review": "ready",
    "/patients/[id]/progress": "ready",
    "/patients/[id]/messages": "ready",
    "/patients/[id]/hydration": "empty",
    "/patients/[id]/measurements": "empty",
    "/patients/[id]/photos": "empty",
    "/patients/[id]/biomarkers": "error",
    "/protocols/[id]": "ready",
    "/protocols/[id]/nutrition": "ready",
    "/protocols/[id]/training": "ready",
    "/templates": "empty",
    "/templates/apply": "ready",
    "/analytics": "error",
    "/analytics/protocol-effectiveness": "empty",
    "/analytics/audit": "permission",
    "/settings/profile": "ready",
    "/settings/branding": "ready",
    "/settings/subscription": "ready",
    "/home": "ready",
    "/today": "ready",
    "/checkin": "ready",
    "/progress": "empty",
    "/protocol": "ready",
    "/messages": "ready",
    "/hydration": "ready"
};
function normalizeRoutePath(pathname) {
    if (!pathname) return "/";
    const reviewRegex = /^\/patients\/[^/]+\/checkins\/[^/]+\/review$/;
    if (reviewRegex.test(pathname)) {
        return "/patients/[id]/checkins/[checkinId]/review";
    }
    const dynamicPatterns = [
        [
            /^\/patients\/[^/]+\/protocol$/,
            "/patients/[id]/protocol"
        ],
        [
            /^\/patients\/[^/]+\/checkins$/,
            "/patients/[id]/checkins"
        ],
        [
            /^\/patients\/[^/]+\/progress$/,
            "/patients/[id]/progress"
        ],
        [
            /^\/patients\/[^/]+\/messages$/,
            "/patients/[id]/messages"
        ],
        [
            /^\/patients\/[^/]+\/hydration$/,
            "/patients/[id]/hydration"
        ],
        [
            /^\/patients\/[^/]+\/measurements$/,
            "/patients/[id]/measurements"
        ],
        [
            /^\/patients\/[^/]+\/photos$/,
            "/patients/[id]/photos"
        ],
        [
            /^\/patients\/[^/]+\/biomarkers$/,
            "/patients/[id]/biomarkers"
        ],
        [
            /^\/patients\/[^/]+$/,
            "/patients/[id]"
        ],
        [
            /^\/protocols\/[^/]+\/nutrition$/,
            "/protocols/[id]/nutrition"
        ],
        [
            /^\/protocols\/[^/]+\/training$/,
            "/protocols/[id]/training"
        ],
        [
            /^\/protocols\/[^/]+$/,
            "/protocols/[id]"
        ],
        [
            /^\/invite\/[^/]+$/,
            "/invite/[token]"
        ]
    ];
    for (const [pattern, normalized] of dynamicPatterns){
        if (pattern.test(pathname)) return normalized;
    }
    return pathname;
}
function resolveScreenState(pathname) {
    const normalized = normalizeRoutePath(pathname);
    return routeStateMap[normalized] ?? "ready";
}
}),
"[project]/src/app/api/mock/screen-state/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$screen$2d$state$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-screen-state.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const pathname = searchParams.get("pathname") ?? "/";
    await new Promise((resolve)=>setTimeout(resolve, 450));
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$screen$2d$state$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveScreenState"])(pathname);
    if (state === "error") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            state,
            message: "Falha simulada ao carregar dados"
        }, {
            status: 500
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        state
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7958c3b3._.js.map