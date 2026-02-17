(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/brand/wordmark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wordmark",
    ()=>Wordmark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const sizeMap = {
    xs: "h-[18px]",
    sm: "h-5",
    md: "h-6",
    lg: "h-7"
};
function Wordmark(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "0253dcd679b72882db83aef92a2a78edef0d67037c3ccbd42a0c2758c70e3b23") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0253dcd679b72882db83aef92a2a78edef0d67037c3ccbd42a0c2758c70e3b23";
    }
    const { className, size: t1, priority: t2 } = t0;
    const size = t1 === undefined ? "md" : t1;
    const priority = t2 === undefined ? false : t2;
    let t3;
    if ($[1] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex shrink-0 select-none items-center leading-none", className);
        $[1] = className;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = sizeMap[size];
    let t5;
    if ($[3] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-auto", t4);
        $[3] = t4;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] !== priority || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/logo.png",
            alt: "KoreVitta",
            width: 582,
            height: 217,
            priority: priority,
            className: t5
        }, void 0, false, {
            fileName: "[project]/src/components/brand/wordmark.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = priority;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t3 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t3,
            "aria-label": "KoreVitta",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/brand/wordmark.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_c = Wordmark;
var _c;
__turbopack_context__.k.register(_c, "Wordmark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-[background-color,color,border-color,transform,box-shadow] duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
            outline: "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
            ghost: "text-muted-foreground hover:bg-accent hover:text-foreground"
        },
        size: {
            default: "h-10 px-4",
            sm: "h-9 px-3 text-xs",
            lg: "h-11 px-6 text-sm"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 38,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/theme/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STORAGE_KEY = "korevitta-theme";
function getCurrentTheme() {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.classList.contains("light") ? "light" : "dark";
}
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "41edce8359e359d2083e3e3ce766c9bf45b70acd7070b7601ccf0189dd8f26e1") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "41edce8359e359d2083e3e3ce766c9bf45b70acd7070b7601ccf0189dd8f26e1";
    }
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_ThemeToggleUseState);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[applyTheme]": (nextTheme)=>{
                const root = document.documentElement;
                root.classList.remove("dark", "light");
                root.classList.add(nextTheme);
                localStorage.setItem(STORAGE_KEY, nextTheme);
                setTheme(nextTheme);
            }
        })["ThemeToggle[applyTheme]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const applyTheme = t0;
    let t1;
    if ($[2] !== theme) {
        t1 = ({
            "ThemeToggle[toggleTheme]": ()=>{
                const nextTheme_0 = theme === "dark" ? "light" : "dark";
                applyTheme(nextTheme_0);
            }
        })["ThemeToggle[toggleTheme]"];
        $[2] = theme;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const toggleTheme = t1;
    const t2 = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";
    const t3 = theme === "dark" ? "Tema escuro ativo" : "Tema claro ativo";
    let t4;
    if ($[4] !== theme) {
        t4 = theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/theme/theme-toggle.tsx",
            lineNumber: 56,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/theme/theme-toggle.tsx",
            lineNumber: 56,
            columnNumber: 59
        }, this);
        $[4] = theme;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t2 || $[7] !== t3 || $[8] !== t4 || $[9] !== toggleTheme) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            className: "rounded-full",
            onClick: toggleTheme,
            "aria-label": t2,
            title: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/theme/theme-toggle.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = toggleTheme;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(ThemeToggle, "hvTMhZzfBFQud2weY8HaEY9zwkE=");
_c = ThemeToggle;
function _ThemeToggleUseState() {
    return getCurrentTheme();
}
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/professional-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfessionalShell",
    ()=>ProfessionalShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$wordmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/wordmark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme/theme-toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const mainLinks = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/patients",
        label: "Pacientes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/templates",
        label: "Templates",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        href: "/analytics",
        label: "Painel de análises",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    }
];
const settingsLinks = [
    {
        href: "/settings/profile",
        label: "Perfil",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"]
    },
    {
        href: "/settings/branding",
        label: "Identidade visual",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    {
        href: "/settings/subscription",
        label: "Assinatura e upgrade",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    }
];
const getQuickActions = (pathname)=>{
    if (pathname.startsWith("/patients")) {
        return [
            {
                href: "/patients/new",
                label: "+ Novo paciente"
            },
            {
                href: "/templates/apply",
                label: "Aplicar template"
            }
        ];
    }
    if (pathname.startsWith("/templates")) {
        return [
            {
                href: "/templates/apply",
                label: "Aplicar template"
            },
            {
                href: "/patients",
                label: "Ver pacientes"
            }
        ];
    }
    if (pathname.startsWith("/analytics")) {
        return [
            {
                href: "/analytics/audit",
                label: "Auditoria"
            },
            {
                href: "/analytics/protocol-effectiveness",
                label: "Efetividade"
            }
        ];
    }
    if (pathname.startsWith("/settings")) {
        return [
            {
                href: "/settings/profile",
                label: "Perfil"
            },
            {
                href: "/settings/branding",
                label: "Marca"
            }
        ];
    }
    return [
        {
            href: "/patients/new",
            label: "+ Novo paciente"
        },
        {
            href: "/patients",
            label: "Ver pacientes"
        }
    ];
};
function ProfessionalShell(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "96624fa75c8a709d06fdb296bf0d74ce4a9080660ebccdaf41d1c89e2207b2c1") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "96624fa75c8a709d06fdb296bf0d74ce4a9080660ebccdaf41d1c89e2207b2c1";
    }
    const { children } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== pathname) {
        const quickActions = getQuickActions(pathname);
        const isActive = {
            "ProfessionalShell[isActive]": (href)=>pathname === href || pathname.startsWith(`${href}/`)
        }["ProfessionalShell[isActive]"];
        t11 = "min-h-screen bg-background px-2 py-2 md:px-4 md:py-4";
        t9 = "mx-auto grid min-h-screen w-full max-w-7xl gap-4 md:grid-cols-[272px_1fr]";
        let t12;
        let t13;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/dashboard",
                className: "mb-6 inline-flex items-center gap-2 text-lg font-semibold tracking-tight",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$wordmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wordmark"], {
                    size: "lg",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/professional-shell.tsx",
                    lineNumber: 117,
                    columnNumber: 122
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this);
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
                children: "Profissional"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this);
            $[13] = t12;
            $[14] = t13;
        } else {
            t12 = $[13];
            t13 = $[14];
        }
        let t14;
        if ($[15] !== isActive) {
            t14 = mainLinks.map({
                "ProfessionalShell[mainLinks.map()]": (link)=>{
                    const Icon = link.icon;
                    const active = isActive(link.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        "aria-current": active ? "page" : undefined,
                        className: `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-primary/14 text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/professional-shell.tsx",
                                lineNumber: 131,
                                columnNumber: 307
                            }, this),
                            link.label
                        ]
                    }, link.href, true, {
                        fileName: "[project]/src/components/layout/professional-shell.tsx",
                        lineNumber: 131,
                        columnNumber: 18
                    }, this);
                }
            }["ProfessionalShell[mainLinks.map()]"]);
            $[15] = isActive;
            $[16] = t14;
        } else {
            t14 = $[16];
        }
        let t15;
        if ($[17] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-1",
                children: t14
            }, void 0, false, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this);
            $[17] = t14;
            $[18] = t15;
        } else {
            t15 = $[18];
        }
        let t16;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 mt-6 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
                children: "Configurações"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this);
            $[19] = t16;
        } else {
            t16 = $[19];
        }
        let t17;
        if ($[20] !== isActive) {
            t17 = settingsLinks.map({
                "ProfessionalShell[settingsLinks.map()]": (link_0)=>{
                    const Icon_0 = link_0.icon;
                    const active_0 = isActive(link_0.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link_0.href,
                        "aria-current": active_0 ? "page" : undefined,
                        className: `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${active_0 ? "bg-primary/14 text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_0, {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/professional-shell.tsx",
                                lineNumber: 160,
                                columnNumber: 315
                            }, this),
                            link_0.label
                        ]
                    }, link_0.href, true, {
                        fileName: "[project]/src/components/layout/professional-shell.tsx",
                        lineNumber: 160,
                        columnNumber: 18
                    }, this);
                }
            }["ProfessionalShell[settingsLinks.map()]"]);
            $[20] = isActive;
            $[21] = t17;
        } else {
            t17 = $[21];
        }
        let t18;
        if ($[22] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-1",
                children: t17
            }, void 0, false, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this);
            $[22] = t17;
            $[23] = t18;
        } else {
            t18 = $[23];
        }
        if ($[24] !== t15 || $[25] !== t18) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "kv-surface sticky top-4 hidden h-[calc(100vh-2rem)] rounded-2xl px-4 py-6 md:block",
                children: [
                    t12,
                    t13,
                    t15,
                    t16,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 177,
                columnNumber: 13
            }, this);
            $[24] = t15;
            $[25] = t18;
            $[26] = t10;
        } else {
            t10 = $[26];
        }
        t8 = "flex min-h-screen flex-col";
        t7 = "kv-surface rounded-2xl px-4 py-3 md:px-6";
        t4 = "flex items-center justify-between";
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/dashboard",
                className: "font-semibold md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$wordmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wordmark"], {
                            size: "sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/professional-shell.tsx",
                            lineNumber: 188,
                            columnNumber: 123
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-muted-foreground",
                            children: "• Pro"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/professional-shell.tsx",
                            lineNumber: 188,
                            columnNumber: 145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/professional-shell.tsx",
                    lineNumber: 188,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 188,
                columnNumber: 12
            }, this);
            $[27] = t5;
        } else {
            t5 = $[27];
        }
        let t19;
        if ($[28] !== isActive) {
            t19 = mainLinks.map({
                "ProfessionalShell[mainLinks.map()]": (link_1)=>{
                    const Icon_1 = link_1.icon;
                    const active_1 = isActive(link_1.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link_1.href,
                        "aria-current": active_1 ? "page" : undefined,
                        className: `inline-flex whitespace-nowrap rounded-full border px-3 py-1 transition-colors ${active_1 ? "border-primary/40 bg-primary/15 text-foreground" : "border-border bg-card text-muted-foreground"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-1.5 inline-flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_1, {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/professional-shell.tsx",
                                    lineNumber: 199,
                                    columnNumber: 360
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/professional-shell.tsx",
                                lineNumber: 199,
                                columnNumber: 310
                            }, this),
                            link_1.label
                        ]
                    }, link_1.href, true, {
                        fileName: "[project]/src/components/layout/professional-shell.tsx",
                        lineNumber: 199,
                        columnNumber: 18
                    }, this);
                }
            }["ProfessionalShell[mainLinks.map()]"]);
            $[28] = isActive;
            $[29] = t19;
        } else {
            t19 = $[29];
        }
        if ($[30] !== t19) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex gap-2 overflow-x-auto text-sm md:hidden",
                children: t19
            }, void 0, false, {
                fileName: "[project]/src/components/layout/professional-shell.tsx",
                lineNumber: 208,
                columnNumber: 12
            }, this);
            $[30] = t19;
            $[31] = t6;
        } else {
            t6 = $[31];
        }
        t3 = "flex items-center gap-2";
        t1 = "hidden items-center gap-1 md:flex";
        t2 = quickActions.map(_ProfessionalShellQuickActionsMap);
        $[1] = pathname;
        $[2] = t1;
        $[3] = t10;
        $[4] = t11;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t1 = $[2];
        t10 = $[3];
        t11 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t12;
    if ($[32] !== t1 || $[33] !== t2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[32] = t1;
        $[33] = t2;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    let t14;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/patients/new",
            className: "hidden rounded-xl border border-primary bg-primary px-3 py-2 text-sm font-medium text-primary-foreground md:inline-flex",
            children: "+ Novo Paciente"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[35] = t13;
        $[36] = t14;
    } else {
        t13 = $[35];
        t14 = $[36];
    }
    let t15;
    if ($[37] !== t12 || $[38] !== t3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[37] = t12;
        $[38] = t3;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== t15 || $[41] !== t4 || $[42] !== t5 || $[43] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[40] = t15;
        $[41] = t4;
        $[42] = t5;
        $[43] = t6;
        $[44] = t16;
    } else {
        t16 = $[44];
    }
    let t17;
    if ($[45] !== t16 || $[46] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t7,
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[45] = t16;
        $[46] = t7;
        $[47] = t17;
    } else {
        t17 = $[47];
    }
    let t18;
    if ($[48] !== children) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 px-2 py-6 md:px-3 md:py-7",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[48] = children;
        $[49] = t18;
    } else {
        t18 = $[49];
    }
    let t19;
    if ($[50] !== t17 || $[51] !== t18 || $[52] !== t8) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[50] = t17;
        $[51] = t18;
        $[52] = t8;
        $[53] = t19;
    } else {
        t19 = $[53];
    }
    let t20;
    if ($[54] !== t10 || $[55] !== t19 || $[56] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[54] = t10;
        $[55] = t19;
        $[56] = t9;
        $[57] = t20;
    } else {
        t20 = $[57];
    }
    let t21;
    if ($[58] !== t11 || $[59] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/layout/professional-shell.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[58] = t11;
        $[59] = t20;
        $[60] = t21;
    } else {
        t21 = $[60];
    }
    return t21;
}
_s(ProfessionalShell, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ProfessionalShell;
function _ProfessionalShellQuickActionsMap(action) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: action.href,
        className: "inline-flex items-center rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        children: action.label
    }, action.href, false, {
        fileName: "[project]/src/components/layout/professional-shell.tsx",
        lineNumber: 331,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProfessionalShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/data-states.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState,
    "ErrorState",
    ()=>ErrorState,
    "LoadingState",
    ()=>LoadingState,
    "PermissionState",
    ()=>PermissionState,
    "SuccessState",
    ()=>SuccessState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
;
;
;
function LoadingState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49";
    }
    const { label: t1 } = t0;
    const label = t1 === undefined ? "Carregamento em andamento..." : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "size-4 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 inline-flex items-center gap-2 text-sm font-semibold",
            children: [
                t2,
                label
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[2] = label;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-40 animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 33,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-full animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 33,
                    columnNumber: 96
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-2/3 animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 33,
                    columnNumber: 157
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 w-full animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 33,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "kv-surface rounded-2xl p-5",
            "aria-live": "polite",
            "aria-busy": "true",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = LoadingState;
function EmptyState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49";
    }
    const { title, description, ctaLabel, onCta } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "size-4 text-chart-2"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "inline-flex items-center gap-2 text-sm font-semibold tracking-tight",
            children: [
                t1,
                title
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[2] = title;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== description) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-muted-foreground",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[4] = description;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== ctaLabel || $[7] !== onCta) {
        t4 = ctaLabel && onCta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "mt-4",
            variant: "outline",
            onClick: onCta,
            children: ctaLabel
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 87,
            columnNumber: 30
        }, this) : null;
        $[6] = ctaLabel;
        $[7] = onCta;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t2 || $[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "kv-surface rounded-2xl p-5",
            "aria-live": "polite",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c1 = EmptyState;
function ErrorState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49";
    }
    const { description, onRetry } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "inline-flex items-center gap-2 text-sm font-semibold text-destructive",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 120,
                    columnNumber: 95
                }, this),
                "Erro"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-muted-foreground",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[2] = description;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onRetry) {
        t3 = onRetry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "mt-4",
            onClick: onRetry,
            children: "Tentar novamente"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 135,
            columnNumber: 20
        }, this) : null;
        $[4] = onRetry;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "kv-surface rounded-2xl border-destructive/35 bg-destructive/5 p-5",
            "aria-live": "assertive",
            role: "alert",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c2 = ErrorState;
function SuccessState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49";
    }
    const { message: t1 } = t0;
    const message = t1 === undefined ? "A\xE7\xE3o conclu\xEDda com sucesso." : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "size-4 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== message) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "kv-surface rounded-2xl p-5",
            "aria-live": "polite",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-medium text-foreground",
                children: [
                    t2,
                    message
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/data-states.tsx",
                lineNumber: 173,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, this);
        $[2] = message;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c3 = SuccessState;
function PermissionState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c2ed450690bef891db0c54474d1f3c5f4fb0c27f82e7c6f599baf0ff7eb8fb49";
    }
    const { title: t1, description: t2, ctaLabel, onCta } = t0;
    const title = t1 === undefined ? "Sem permiss\xE3o" : t1;
    const description = t2 === undefined ? "Voc\xEA n\xE3o tem acesso a esta \xE1rea." : t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
            className: "size-4 text-chart-4"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "inline-flex items-center gap-2 text-sm font-semibold tracking-tight",
            children: [
                t3,
                title
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 206,
            columnNumber: 10
        }, this);
        $[2] = title;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-muted-foreground",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 214,
            columnNumber: 10
        }, this);
        $[4] = description;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== ctaLabel || $[7] !== onCta) {
        t6 = ctaLabel && onCta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "mt-4",
            variant: "outline",
            onClick: onCta,
            children: ctaLabel
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 222,
            columnNumber: 30
        }, this) : null;
        $[6] = ctaLabel;
        $[7] = onCta;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t4 || $[10] !== t5 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "kv-surface rounded-2xl p-5",
            "aria-live": "assertive",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 231,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_c4 = PermissionState;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "LoadingState");
__turbopack_context__.k.register(_c1, "EmptyState");
__turbopack_context__.k.register(_c2, "ErrorState");
__turbopack_context__.k.register(_c3, "SuccessState");
__turbopack_context__.k.register(_c4, "PermissionState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mock-auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUTH_USER_STORAGE_KEY",
    ()=>AUTH_USER_STORAGE_KEY,
    "ROLE_STORAGE_KEY",
    ()=>ROLE_STORAGE_KEY,
    "authenticateMockUser",
    ()=>authenticateMockUser,
    "getDefaultRouteByRole",
    ()=>getDefaultRouteByRole,
    "mockLoginUsers",
    ()=>mockLoginUsers
]);
const ROLE_STORAGE_KEY = "korevitta-role";
const AUTH_USER_STORAGE_KEY = "korevitta-auth-user";
const mockLoginUsers = [
    {
        id: "usr_pro_001",
        name: "Dr. Lucas Almeida",
        email: "profissional@korevitta.com",
        password: "Teste@123",
        role: "professional"
    },
    {
        id: "usr_pat_001",
        name: "Ana Silva",
        email: "paciente@korevitta.com",
        password: "Teste@123",
        role: "patient"
    }
];
function getDefaultRouteByRole(role) {
    return role === "professional" ? "/dashboard" : "/home";
}
function authenticateMockUser(email, password, role) {
    const normalizedEmail = email.trim().toLowerCase();
    const user = mockLoginUsers.find((item)=>item.email.toLowerCase() === normalizedEmail && item.password === password);
    if (!user) return null;
    if (role && user.role !== role) return null;
    return user;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/role-gate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleGate",
    ()=>RoleGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/data-states.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function safeGetRole() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const value = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_STORAGE_KEY"]);
    if (value === "professional" || value === "patient" || value === "admin") return value;
    return null;
}
function safeSetRole(role) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_STORAGE_KEY"], role);
}
function RoleGate(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "810fa4c3339964e4e17948132e7c36e6c28a74b7c8a573864d323a34762c044a") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "810fa4c3339964e4e17948132e7c36e6c28a74b7c8a573864d323a34762c044a";
    }
    const { allowedRoles, fallbackHref, fallbackLabel, children } = t0;
    let t1;
    if ($[1] !== allowedRoles[0]) {
        t1 = ({
            "RoleGate[useState()]": ()=>safeGetRole() ?? allowedRoles[0]
        })["RoleGate[useState()]"];
        $[1] = allowedRoles[0];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const primaryAllowedRole = allowedRoles[0];
    const persistedRole = safeGetRole();
    if (!persistedRole) {
        safeSetRole(role);
    }
    const hasPermission = allowedRoles.includes(role);
    if (!hasPermission) {
        let t2;
        if ($[3] !== primaryAllowedRole) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PermissionState"], {
                title: "Acesso restrito",
                description: "Seu perfil atual n\xE3o possui acesso a esta \xE1rea.",
                ctaLabel: "Usar perfil desta \xE1rea",
                onCta: {
                    "RoleGate[<PermissionState>.onCta]": ()=>{
                        safeSetRole(primaryAllowedRole);
                        setRole(primaryAllowedRole);
                    }
                }["RoleGate[<PermissionState>.onCta]"]
            }, void 0, false, {
                fileName: "[project]/src/components/auth/role-gate.tsx",
                lineNumber: 54,
                columnNumber: 12
            }, this);
            $[3] = primaryAllowedRole;
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        let t3;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "Você também pode retornar para a área compatível com seu perfil atual."
            }, void 0, false, {
                fileName: "[project]/src/components/auth/role-gate.tsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        let t4;
        if ($[6] !== fallbackLabel) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                children: fallbackLabel
            }, void 0, false, {
                fileName: "[project]/src/components/auth/role-gate.tsx",
                lineNumber: 74,
                columnNumber: 12
            }, this);
            $[6] = fallbackLabel;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        let t5;
        if ($[8] !== fallbackHref || $[9] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kv-surface rounded-2xl p-5",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: fallbackHref,
                        className: "mt-4 inline-flex",
                        children: t4
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/role-gate.tsx",
                        lineNumber: 82,
                        columnNumber: 60
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/role-gate.tsx",
                lineNumber: 82,
                columnNumber: 12
            }, this);
            $[8] = fallbackHref;
            $[9] = t4;
            $[10] = t5;
        } else {
            t5 = $[10];
        }
        let t6;
        if ($[11] !== t2 || $[12] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto flex w-full max-w-5xl flex-col gap-6 py-2",
                children: [
                    t2,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/role-gate.tsx",
                lineNumber: 91,
                columnNumber: 12
            }, this);
            $[11] = t2;
            $[12] = t5;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        return t6;
    }
    let t2;
    if ($[14] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[14] = children;
        $[15] = t2;
    } else {
        t2 = $[15];
    }
    return t2;
}
_s(RoleGate, "ztFIkQSZUY9CWIRwgPZDoRfLIcY=");
_c = RoleGate;
var _c;
__turbopack_context__.k.register(_c, "RoleGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ffeecba9._.js.map