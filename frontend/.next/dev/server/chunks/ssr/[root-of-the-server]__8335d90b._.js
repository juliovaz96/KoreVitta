module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/src/lib/fixtures/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAnalyticsDashboard",
    ()=>mockAnalyticsDashboard
]);
const mockAnalyticsDashboard = {
    kpi: {
        activePatients: 42,
        atRiskPatients: 9,
        pendingReviews: 6,
        adherence7dPct: 74
    },
    topRisk: [
        {
            patientId: "pat_002",
            patientName: "Bruno Costa",
            riskScore: 68
        },
        {
            patientId: "pat_010",
            patientName: "Diego Lima",
            riskScore: 63
        },
        {
            patientId: "pat_014",
            patientName: "Juliana Alves",
            riskScore: 58
        }
    ]
};
}),
"[project]/src/lib/fixtures/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAuthUser",
    ()=>mockAuthUser,
    "mockProfessionalProfile",
    ()=>mockProfessionalProfile
]);
const mockAuthUser = {
    id: "usr_pro_001",
    name: "Dr. Lucas Almeida",
    email: "lucas@korevitta.com",
    role: "professional"
};
const mockProfessionalProfile = {
    userId: "usr_pro_001",
    profession: "Nutricionista",
    licenseType: "CRN",
    licenseNumber: "CRN-12345",
    onboardingCompleted: true
};
}),
"[project]/src/lib/fixtures/checkins.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockCheckinsByPatient",
    ()=>mockCheckinsByPatient,
    "mockPendingReview",
    ()=>mockPendingReview
]);
const mockCheckinsByPatient = {
    pat_001: [
        {
            id: "chk_001",
            status: "completed",
            scheduledAt: "2026-02-10T08:00:00.000Z",
            completedAt: "2026-02-10T08:30:00.000Z",
            adherenceNutrition: 4,
            adherenceTraining: 4
        },
        {
            id: "chk_002",
            status: "pending",
            scheduledAt: "2026-02-17T08:00:00.000Z"
        }
    ]
};
const mockPendingReview = [
    {
        id: "chk_010",
        patientId: "pat_002",
        patientName: "Bruno Costa",
        scheduledAt: "2026-02-13T08:00:00.000Z"
    }
];
}),
"[project]/src/lib/fixtures/communication.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockMessagesByThread",
    ()=>mockMessagesByThread,
    "mockThreads",
    ()=>mockThreads
]);
const mockThreads = [
    {
        id: "thr_001",
        patientId: "pat_001",
        patientName: "Ana Silva",
        lastMessage: "Consegui seguir 80% do plano hoje.",
        lastMessageAt: "2026-02-14T18:20:00.000Z",
        unreadCount: 1
    },
    {
        id: "thr_002",
        patientId: "pat_002",
        patientName: "Bruno Costa",
        lastMessage: "Podemos ajustar o treino de pernas?",
        lastMessageAt: "2026-02-14T15:00:00.000Z",
        unreadCount: 0
    }
];
const mockMessagesByThread = {
    thr_001: [
        {
            id: "msg_001",
            threadId: "thr_001",
            sender: "patient",
            content: "Consegui seguir 80% do plano hoje.",
            createdAt: "2026-02-14T18:20:00.000Z"
        },
        {
            id: "msg_002",
            threadId: "thr_001",
            sender: "professional",
            content: "Excelente. Vamos manter consistência até o check-in.",
            createdAt: "2026-02-14T18:30:00.000Z"
        }
    ]
};
}),
"[project]/src/lib/fixtures/patients.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockPatientDetails",
    ()=>mockPatientDetails,
    "mockPatients",
    ()=>mockPatients
]);
const mockPatients = [
    {
        id: "pat_001",
        name: "Ana Silva",
        status: "active",
        riskScore: 12,
        primaryGoal: "Perder 8kg",
        activeProtocolName: "Cutting 12 semanas",
        nextCheckinLabel: "em 2 dias",
        tags: [
            "cutting",
            "consistente"
        ]
    },
    {
        id: "pat_002",
        name: "Bruno Costa",
        status: "at_risk",
        riskScore: 68,
        primaryGoal: "Recomposição corporal",
        activeProtocolName: "Recomp 8 semanas",
        nextCheckinLabel: "atrasado",
        tags: [
            "alto-risco"
        ]
    },
    {
        id: "pat_003",
        name: "Carla Souza",
        status: "active",
        riskScore: 5,
        primaryGoal: "Manutenção",
        activeProtocolName: "Lifestyle",
        nextCheckinLabel: "em 5 dias",
        tags: [
            "manutenção"
        ]
    }
];
const mockPatientDetails = {
    pat_001: {
        id: "pat_001",
        name: "Ana Silva",
        status: "active",
        riskScore: 12,
        primaryGoal: "Perder 8kg",
        startedAt: "2026-01-06T10:00:00.000Z",
        nextCheckinAt: "2026-02-17T10:00:00.000Z",
        activeProtocolName: "Cutting 12 semanas",
        timeline: [
            {
                id: "evt_001",
                type: "checkin",
                title: "Check-in concluído",
                occurredAt: "2026-02-10T08:30:00.000Z"
            },
            {
                id: "evt_002",
                type: "protocol",
                title: "Protocolo atualizado para v3",
                occurredAt: "2026-02-08T16:45:00.000Z"
            },
            {
                id: "evt_003",
                type: "message",
                title: "Mensagem enviada pelo paciente",
                occurredAt: "2026-02-08T12:20:00.000Z"
            }
        ]
    }
};
}),
"[project]/src/lib/fixtures/protocols.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockProtocols",
    ()=>mockProtocols,
    "mockTemplates",
    ()=>mockTemplates
]);
const mockProtocols = [
    {
        id: "proto_001",
        name: "Cutting 12 semanas",
        version: 3,
        status: "active",
        modules: [
            "nutrition",
            "training"
        ],
        startsAt: "2026-01-10",
        endsAt: "2026-04-05"
    }
];
const mockTemplates = [
    {
        id: "tpl_001",
        name: "Cutting Base 12s",
        tags: [
            "cutting",
            "iniciante"
        ],
        usageCount: 8,
        updatedAt: "2026-02-11T11:30:00.000Z"
    },
    {
        id: "tpl_002",
        name: "Recomp 8s",
        tags: [
            "recomp"
        ],
        usageCount: 5,
        updatedAt: "2026-02-09T09:10:00.000Z"
    }
];
}),
"[project]/src/lib/fixtures/today.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockTodayView",
    ()=>mockTodayView
]);
const mockTodayView = {
    greetingName: "Ana",
    objective: "Perder 8kg",
    weekProgressLabel: "Semana 4/12",
    statusLabel: "Em dia",
    nextCheckinLabel: "Sex 14/02",
    tasks: [
        {
            id: "tsk_001",
            type: "meal",
            label: "Café da manhã",
            completed: true
        },
        {
            id: "tsk_002",
            type: "meal",
            label: "Almoço",
            completed: false
        },
        {
            id: "tsk_003",
            type: "training",
            label: "Treino A",
            completed: false
        },
        {
            id: "tsk_004",
            type: "supplement",
            label: "Creatina 5g",
            completed: false
        }
    ],
    waterCurrentMl: 1200,
    waterTargetMl: 3000
};
}),
"[project]/src/types/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError
]);
class ApiError extends Error {
    problem;
    constructor(problem){
        super(problem.detail);
        this.problem = problem;
        this.name = "ApiError";
    }
}
}),
"[project]/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$checkins$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/checkins.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$communication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/communication.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$patients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/patients.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$protocols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/protocols.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$today$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/today.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/api.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function getDataSource() {
    return process.env.NEXT_PUBLIC_DATA_SOURCE === "http" ? "http" : "mock";
}
async function simulateLatency(minMs = 180, maxMs = 560) {
    const timeout = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    await new Promise((resolve)=>setTimeout(resolve, timeout));
}
function notFound(detail) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"]({
        type: "https://api.korevitta.com/errors/not-found",
        title: "Not Found",
        status: 404,
        detail
    });
}
const mockClient = {
    async getMe () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAuthUser"];
    },
    async getProfessionalProfile () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProfessionalProfile"];
    },
    async getAnalyticsDashboard () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAnalyticsDashboard"];
    },
    async listPatients (filters) {
        await simulateLatency();
        let result = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$patients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPatients"]
        ];
        if (filters?.search) {
            const needle = filters.search.toLowerCase();
            result = result.filter((patient)=>patient.name.toLowerCase().includes(needle));
        }
        if (filters?.status) {
            result = result.filter((patient)=>patient.status === filters.status);
        }
        if (filters?.sort === "risk_desc") {
            result.sort((a, b)=>b.riskScore - a.riskScore);
        }
        if (filters?.sort === "name_asc") {
            result.sort((a, b)=>a.name.localeCompare(b.name));
        }
        return result;
    },
    async getPatientById (patientId) {
        await simulateLatency();
        const patient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$patients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPatientDetails"][patientId];
        if (!patient) notFound("Paciente não encontrado");
        return patient;
    },
    async listPatientCheckins (patientId) {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$checkins$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCheckinsByPatient"][patientId] ?? [];
    },
    async listPendingReview () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$checkins$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPendingReview"];
    },
    async listProtocols () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$protocols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocols"];
    },
    async listTemplates () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$protocols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockTemplates"];
    },
    async getToday () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$today$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockTodayView"];
    },
    async listThreads () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$communication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockThreads"];
    },
    async listMessages (threadId) {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$communication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockMessagesByThread"][threadId] ?? [];
    }
};
async function fetchJson(path, init) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
    const response = await fetch(`${baseUrl}${path}`, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...init?.headers ?? {}
        }
    });
    if (!response.ok) {
        let problem;
        try {
            problem = await response.json();
        } catch  {
            problem = {
                type: "https://api.korevitta.com/errors/unexpected",
                title: "Unexpected Error",
                status: response.status,
                detail: "Erro inesperado ao comunicar com a API"
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"](problem);
    }
    const payload = await response.json();
    return payload.data;
}
const httpClient = {
    getMe: ()=>fetchJson("/v1/auth/me/"),
    getProfessionalProfile: ()=>fetchJson("/v1/professional/profile/"),
    getAnalyticsDashboard: ()=>fetchJson("/v1/analytics/dashboard"),
    listPatients: (filters)=>{
        const query = new URLSearchParams();
        if (filters?.search) query.set("search", filters.search);
        if (filters?.status) query.set("status", filters.status);
        const suffix = query.toString() ? `?${query.toString()}` : "";
        return fetchJson(`/v1/patients/${suffix}`);
    },
    getPatientById: (patientId)=>fetchJson(`/v1/patients/${patientId}/`),
    listPatientCheckins: (patientId)=>fetchJson(`/v1/patients/${patientId}/checkins/`),
    listPendingReview: ()=>fetchJson("/v1/checkins/pending-review/"),
    listProtocols: (patientId)=>fetchJson(`/v1/patients/${patientId}/protocols/`),
    listTemplates: ()=>fetchJson("/v1/templates/"),
    getToday: ()=>fetchJson("/v1/me/today/"),
    listThreads: ()=>fetchJson("/v1/threads/"),
    listMessages: (threadId)=>fetchJson(`/v1/threads/${threadId}/messages/`)
};
const apiClient = getDataSource() === "http" ? httpClient : mockClient;
}),
"[project]/src/hooks/use-resource.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResource",
    ()=>useResource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function normalizeDependencyKey(dependencyKey) {
    return Array.isArray(dependencyKey) ? dependencyKey : [
        dependencyKey
    ];
}
function useResource(loader, dependencyKey = "default") {
    const normalizedKey = normalizeDependencyKey(dependencyKey);
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "resource",
            ...normalizedKey
        ],
        queryFn: loader
    });
    const reload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await query.refetch();
    }, [
        query
    ]);
    return {
        data: query.data ?? null,
        loading: query.isPending || query.isFetching,
        error: query.error ? query.error instanceof Error ? query.error.message : "Erro desconhecido" : null,
        reload
    };
}
}),
"[project]/src/hooks/use-patients.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePatientDetails",
    ()=>usePatientDetails,
    "usePatients",
    ()=>usePatients
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-resource.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function usePatients(filters) {
    const loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].listPatients(filters), [
        filters
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResource"])(loader, [
        "patients",
        filters?.search ?? "",
        filters?.status ?? "",
        filters?.sort ?? ""
    ]);
}
function usePatientDetails(patientId) {
    const loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getPatientById(patientId), [
        patientId
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResource"])(loader, [
        "patient-details",
        patientId
    ]);
}
}),
"[project]/src/hooks/use-protocols.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePatientProtocols",
    ()=>usePatientProtocols,
    "useTemplates",
    ()=>useTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-resource.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function usePatientProtocols(patientId) {
    const loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].listProtocols(patientId), [
        patientId
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResource"])(loader, [
        "patient-protocols",
        patientId
    ]);
}
function useTemplates() {
    const loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].listTemplates(), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResource"])(loader, [
        "protocol-templates"
    ]);
}
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("kv-surface rounded-3xl transition-transform duration-200 hover:-translate-y-0.5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pb-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold tracking-tight text-foreground md:text-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm leading-relaxed text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/(professional)/patients/[id]/protocol/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientProtocolPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$patients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-patients.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$protocols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-protocols.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/data-states.tsx [app-ssr] (ecmascript)");
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
const allModules = [
    "nutrition",
    "training",
    "supplementation",
    "hydration"
];
function PatientProtocolPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const patientId = params.id;
    const patient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$patients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePatientDetails"])(patientId);
    const protocols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$protocols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePatientProtocols"])(patientId);
    const [saveMessage, setSaveMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeProtocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(protocols.data ?? []).find((protocol)=>protocol.status === "active") ?? null, [
        protocols.data
    ]);
    const [selectedModules, setSelectedModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(activeProtocol?.modules ?? [
        "nutrition",
        "training"
    ]);
    if (patient.loading || protocols.loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingState"], {
            label: "Carregando editor de protocolo"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
            lineNumber: 31,
            columnNumber: 12
        }, this);
    }
    if (patient.error || protocols.error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorState"], {
            description: "Não foi possível carregar o protocolo do paciente.",
            onRetry: ()=>{
                void patient.reload();
                void protocols.reload();
            }
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    if (!patient.data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
            title: "Paciente não encontrado",
            description: "Não foi possível carregar os dados para edição de protocolo."
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    const toggleModule = (module)=>{
        setSelectedModules((previous)=>previous.includes(module) ? previous.filter((item)=>item !== module) : [
                ...previous,
                module
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto flex w-full max-w-5xl flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "kv-surface rounded-3xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "kv-pill inline-flex",
                        children: "PRO-07"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-3 text-2xl font-semibold tracking-tight",
                        children: "Protocolo Integrado (Editor)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-muted-foreground",
                        children: [
                            "Paciente: ",
                            patient.data.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            saveMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuccessState"], {
                message: saveMessage
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                lineNumber: 69,
                columnNumber: 22
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Configuração do protocolo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Protocolo atual: ",
                                    activeProtocol?.name ?? "Sem protocolo ativo",
                                    activeProtocol ? ` • versão ${activeProtocol.version}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2 md:grid-cols-2",
                                children: allModules.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 rounded-xl border border-border/70 px-3 py-2 text-sm capitalize",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: selectedModules.includes(module),
                                                onChange: ()=>toggleModule(module)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            module
                                        ]
                                    }, module, true, {
                                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: async ()=>{
                                            await new Promise((resolve)=>setTimeout(resolve, 300));
                                            setSaveMessage("Rascunho salvo com sucesso.");
                                        },
                                        children: "Salvar rascunho"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: async ()=>{
                                            await new Promise((resolve)=>setTimeout(resolve, 300));
                                            setSaveMessage("Protocolo ativado para o paciente com sucesso.");
                                        },
                                        disabled: selectedModules.length === 0,
                                        children: "Ativar protocolo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/protocols/proto_001",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            children: "Abrir visão detalhada"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(professional)/patients/[id]/protocol/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8335d90b._.js.map