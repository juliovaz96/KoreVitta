(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/fixtures/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fixtures/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fixtures/checkins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fixtures/communication.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fixtures/patients.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fixtures/protocols.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fixtures/today.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$checkins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/checkins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$communication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/communication.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$patients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/patients.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$protocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/protocols.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$today$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fixtures/today.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/api.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function getDataSource() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DATA_SOURCE === "http" ? "http" : "mock";
}
async function simulateLatency(minMs = 180, maxMs = 560) {
    const timeout = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    await new Promise((resolve)=>setTimeout(resolve, timeout));
}
function notFound(detail) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"]({
        type: "https://api.korevitta.com/errors/not-found",
        title: "Not Found",
        status: 404,
        detail
    });
}
const mockClient = {
    async getMe () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAuthUser"];
    },
    async getProfessionalProfile () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProfessionalProfile"];
    },
    async getAnalyticsDashboard () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAnalyticsDashboard"];
    },
    async listPatients (filters) {
        await simulateLatency();
        let result = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$patients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPatients"]
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
        const patient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$patients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPatientDetails"][patientId];
        if (!patient) notFound("Paciente não encontrado");
        return patient;
    },
    async listPatientCheckins (patientId) {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$checkins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockCheckinsByPatient"][patientId] ?? [];
    },
    async listPendingReview () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$checkins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPendingReview"];
    },
    async listProtocols () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$protocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProtocols"];
    },
    async listTemplates () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$protocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockTemplates"];
    },
    async getToday () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$today$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockTodayView"];
    },
    async listThreads () {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$communication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockThreads"];
    },
    async listMessages (threadId) {
        await simulateLatency();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fixtures$2f$communication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockMessagesByThread"][threadId] ?? [];
    }
};
async function fetchJson(path, init) {
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL ?? "";
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"](problem);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-resource.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResource",
    ()=>useResource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useResource(loader, t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "7412c9e2e81a2faeee04623bba81c4c3057d922e3a5d592f65716c9a52966cd7") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7412c9e2e81a2faeee04623bba81c4c3057d922e3a5d592f65716c9a52966cd7";
    }
    const dependencyKey = t0 === undefined ? "default" : t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            data: null,
            loading: true,
            error: null
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== loader) {
        t2 = ({
            "useResource[reload]": async ()=>{
                setState(_useResourceReloadSetState);
                ;
                try {
                    const data = await loader();
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                } catch (t3) {
                    const error = t3;
                    setState({
                        data: null,
                        loading: false,
                        error: error instanceof Error ? error.message : "Erro desconhecido"
                    });
                }
            }
        })["useResource[reload]"];
        $[2] = loader;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const reload = t2;
    let t3;
    if ($[4] !== loader) {
        t3 = ({
            "useResource[useEffect()]": ()=>{
                let isActive = true;
                const run = {
                    "useResource[useEffect() > run]": async ()=>{
                        await Promise.resolve();
                        if (!isActive) {
                            return;
                        }
                        setState(_useResourceUseEffectRunSetState);
                        ;
                        try {
                            const data_0 = await loader();
                            if (!isActive) {
                                return;
                            }
                            setState({
                                data: data_0,
                                loading: false,
                                error: null
                            });
                        } catch (t4) {
                            const error_0 = t4;
                            if (!isActive) {
                                return;
                            }
                            setState({
                                data: null,
                                loading: false,
                                error: error_0 instanceof Error ? error_0.message : "Erro desconhecido"
                            });
                        }
                    }
                }["useResource[useEffect() > run]"];
                run();
                return ()=>{
                    isActive = false;
                };
            }
        })["useResource[useEffect()]"];
        $[4] = loader;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== dependencyKey || $[7] !== loader) {
        t4 = [
            loader,
            dependencyKey
        ];
        $[6] = dependencyKey;
        $[7] = loader;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[9] !== reload || $[10] !== state) {
        t5 = {
            ...state,
            reload
        };
        $[9] = reload;
        $[10] = state;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_s(useResource, "thmyqKoqfT95L6XLuWa7szQ9CF8=");
function _useResourceUseEffectRunSetState(previous_0) {
    return {
        ...previous_0,
        loading: true,
        error: null
    };
}
function _useResourceReloadSetState(previous) {
    return {
        ...previous,
        loading: true,
        error: null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-patients.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePatientDetails",
    ()=>usePatientDetails,
    "usePatients",
    ()=>usePatients
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-resource.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function usePatients(filters) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "7d4245a4d498398798eeffe5a1ebfe84518df7ec176129229743c3cc2b18656f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d4245a4d498398798eeffe5a1ebfe84518df7ec176129229743c3cc2b18656f";
    }
    let t0;
    if ($[1] !== filters) {
        t0 = ({
            "usePatients[loader]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].listPatients(filters)
        })["usePatients[loader]"];
        $[1] = filters;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const loader = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResource"])(loader, `patients-${filters?.search ?? ""}-${filters?.status ?? ""}-${filters?.sort ?? ""}`);
}
_s(usePatients, "xSJT3Bg8baofBRL2vAM/ILmt1Dg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResource"]
    ];
});
function usePatientDetails(patientId) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "7d4245a4d498398798eeffe5a1ebfe84518df7ec176129229743c3cc2b18656f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d4245a4d498398798eeffe5a1ebfe84518df7ec176129229743c3cc2b18656f";
    }
    let t0;
    if ($[1] !== patientId) {
        t0 = ({
            "usePatientDetails[loader]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].getPatientById(patientId)
        })["usePatientDetails[loader]"];
        $[1] = patientId;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const loader = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResource"])(loader, `patient-details-${patientId}`);
}
_s1(usePatientDetails, "xSJT3Bg8baofBRL2vAM/ILmt1Dg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$resource$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResource"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("kv-surface rounded-3xl", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xl font-semibold tracking-tight text-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = CardTitle;
function CardDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = CardDescription;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21d16444269e9981a9c4143234dda69547e6403c9da4431970f92d910a6efa7c";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 pb-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = CardContent;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type = "text", ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-xl border border-input/80 bg-card/70 px-3 py-2 text-sm placeholder:text-muted-foreground/90 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--background)_60%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
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
    ()=>LoadingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
function LoadingState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "2eac519f6b97154eaae161807684ea1e9941a87acc098ea685a1c5609b77c5e6") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2eac519f6b97154eaae161807684ea1e9941a87acc098ea685a1c5609b77c5e6";
    }
    const { label: t1 } = t0;
    const label = t1 === undefined ? "Carregando..." : t1;
    let t2;
    if ($[1] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 text-sm font-semibold",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-40 animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 25,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-full animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 25,
                    columnNumber: 96
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-2/3 animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 25,
                    columnNumber: 157
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 w-full animate-pulse rounded bg-muted"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/data-states.tsx",
                    lineNumber: 25,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "kv-surface rounded-3xl p-5",
            "aria-live": "polite",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = LoadingState;
function EmptyState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "2eac519f6b97154eaae161807684ea1e9941a87acc098ea685a1c5609b77c5e6") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2eac519f6b97154eaae161807684ea1e9941a87acc098ea685a1c5609b77c5e6";
    }
    const { title, description, ctaLabel, onCta } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-muted-foreground",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== ctaLabel || $[6] !== onCta) {
        t3 = ctaLabel && onCta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "mt-4",
            variant: "outline",
            onClick: onCta,
            children: ctaLabel
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 72,
            columnNumber: 30
        }, this) : null;
        $[5] = ctaLabel;
        $[6] = onCta;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t1 || $[9] !== t2 || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "kv-surface rounded-3xl p-5",
            "aria-live": "polite",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
}
_c1 = EmptyState;
function ErrorState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2eac519f6b97154eaae161807684ea1e9941a87acc098ea685a1c5609b77c5e6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2eac519f6b97154eaae161807684ea1e9941a87acc098ea685a1c5609b77c5e6";
    }
    const { description, onRetry } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-destructive",
            children: "Erro"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 105,
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
            lineNumber: 112,
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
            lineNumber: 120,
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
            className: "kv-surface rounded-3xl border-destructive/35 p-5",
            "aria-live": "assertive",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/data-states.tsx",
            lineNumber: 128,
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
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LoadingState");
__turbopack_context__.k.register(_c1, "EmptyState");
__turbopack_context__.k.register(_c2, "ErrorState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(professional)/patients/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientsListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$patients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-patients.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/data-states.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function PatientsListPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "184200b3d3508bad94152c2d18b2bbaec1844ac1db9127f25cde0eb9ba79bf21") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "184200b3d3508bad94152c2d18b2bbaec1844ac1db9127f25cde0eb9ba79bf21";
    }
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("risk_desc");
    const t0 = status === "all" ? undefined : status;
    let t1;
    if ($[1] !== search || $[2] !== sort || $[3] !== t0) {
        t1 = {
            search,
            status: t0,
            sort
        };
        $[1] = search;
        $[2] = sort;
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const filters = t1;
    const { data, loading, error, reload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$patients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePatients"])(filters);
    if (loading) {
        let t2;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingState"], {
                label: "Carregando pacientes"
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 48,
                columnNumber: 12
            }, this);
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        return t2;
    }
    if (error) {
        let t2;
        if ($[6] !== reload) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorState"], {
                description: "N\xE3o foi poss\xEDvel carregar a lista de pacientes.",
                onRetry: {
                    "PatientsListPage[<ErrorState>.onRetry]": ()=>{
                        reload();
                    }
                }["PatientsListPage[<ErrorState>.onRetry]"]
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 58,
                columnNumber: 12
            }, this);
            $[6] = reload;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        return t2;
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "kv-pill inline-flex",
                    children: "PRO-02"
                }, void 0, false, {
                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                    lineNumber: 72,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-3 text-2xl font-semibold tracking-tight",
                    children: "Lista de Pacientes"
                }, void 0, false, {
                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                    lineNumber: 72,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted-foreground",
                    children: "Gestão de pacientes com busca, filtros e priorização por risco."
                }, void 0, false, {
                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                    lineNumber: 72,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "kv-surface rounded-3xl p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/patients/new",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            children: "Novo Paciente"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(professional)/patients/page.tsx",
                            lineNumber: 79,
                            columnNumber: 144
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(professional)/patients/page.tsx",
                        lineNumber: 79,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 79,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "PatientsListPage[<Input>.onChange]": (event)=>setSearch(event.target.value)
        })["PatientsListPage[<Input>.onChange]"];
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== search) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: "Buscar paciente",
            value: search,
            onChange: t4
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[11] = search;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t10;
    let t11;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "PatientsListPage[<select>.onChange]": (event_0)=>setStatus(event_0.target.value)
        })["PatientsListPage[<select>.onChange]"];
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "all",
            children: "Todos os status"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "active",
            children: "Ativo"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "at_risk",
            children: "Em risco"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "paused",
            children: "Pausado"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "inactive",
            children: "Inativo"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t11;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        t10 = $[13];
        t11 = $[14];
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
        t9 = $[18];
    }
    let t12;
    if ($[19] !== status) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "h-10 rounded-xl border border-input/80 bg-card/70 px-3 text-sm",
            value: status,
            onChange: t6,
            children: [
                t7,
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[19] = status;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    let t14;
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "PatientsListPage[<select>.onChange]": (event_1)=>setSort(event_1.target.value)
        })["PatientsListPage[<select>.onChange]"];
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "risk_desc",
            children: "Risco (maior primeiro)"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "name_asc",
            children: "Nome (A-Z)"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t14;
        $[23] = t15;
    } else {
        t13 = $[21];
        t14 = $[22];
        t15 = $[23];
    }
    let t16;
    if ($[24] !== sort) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "h-10 rounded-xl border border-input/80 bg-card/70 px-3 text-sm",
            value: sort,
            onChange: t13,
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[24] = sort;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== reload) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: {
                "PatientsListPage[<Button>.onClick]": ()=>{
                    reload();
                }
            }["PatientsListPage[<Button>.onClick]"],
            children: "Atualizar"
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[26] = reload;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== t12 || $[29] !== t16 || $[30] !== t17 || $[31] !== t5) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-4",
                    children: [
                        t5,
                        t12,
                        t16,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                    lineNumber: 177,
                    columnNumber: 47
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 177,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t16;
        $[30] = t17;
        $[31] = t5;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "Pacientes"
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 188,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== data) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: data && data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-border/70 text-left text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 font-medium",
                                                children: "Nome"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 214
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 font-medium",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 261
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 font-medium",
                                                children: "Risco"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 310
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 font-medium",
                                                children: "Protocolo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 358
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 font-medium",
                                                children: "Próx. Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 410
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 font-medium",
                                                children: "Ações"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 467
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 140
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 133
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: data.map(_PatientsListPageDataMap)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 528
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(professional)/patients/page.tsx",
                            lineNumber: 195,
                            columnNumber: 95
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(professional)/patients/page.tsx",
                        lineNumber: 195,
                        columnNumber: 62
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$data$2d$states$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        title: "Nenhum paciente encontrado",
                        description: "Ajuste os filtros ou adicione um novo paciente para come\xE7ar.",
                        ctaLabel: "Adicionar paciente",
                        onCta: _PatientsListPageEmptyStateOnCta
                    }, void 0, false, {
                        fileName: "[project]/src/app/(professional)/patients/page.tsx",
                        lineNumber: 195,
                        columnNumber: 596
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                    lineNumber: 195,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[34] = data;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== t18 || $[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto flex w-full max-w-6xl flex-col gap-5",
            children: [
                t3,
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(professional)/patients/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[36] = t18;
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    return t21;
}
_s(PatientsListPage, "iYhTVNQhqhakQv9M5E5BJVDzgYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$patients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePatients"]
    ];
});
_c = PatientsListPage;
function _PatientsListPageEmptyStateOnCta() {
    window.location.href = "/patients/new";
}
function _PatientsListPageDataMap(patient) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-border/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-2 py-3 font-medium",
                children: patient.name
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 216,
                columnNumber: 69
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-2 py-3 capitalize",
                children: patient.status.replace("_", " ")
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 216,
                columnNumber: 126
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-2 py-3",
                children: patient.riskScore
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 216,
                columnNumber: 202
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-2 py-3",
                children: patient.activeProtocolName ?? "\u2014"
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 216,
                columnNumber: 252
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-2 py-3",
                children: patient.nextCheckinLabel ?? "\u2014"
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 216,
                columnNumber: 323
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-2 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/patients/${patient.id}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                children: "Perfil"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                lineNumber: 216,
                                columnNumber: 485
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(professional)/patients/page.tsx",
                            lineNumber: 216,
                            columnNumber: 446
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/patients/${patient.id}/messages`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "ghost",
                                children: "Mensagem"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                                lineNumber: 216,
                                columnNumber: 591
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(professional)/patients/page.tsx",
                            lineNumber: 216,
                            columnNumber: 543
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(professional)/patients/page.tsx",
                    lineNumber: 216,
                    columnNumber: 418
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(professional)/patients/page.tsx",
                lineNumber: 216,
                columnNumber: 392
            }, this)
        ]
    }, patient.id, true, {
        fileName: "[project]/src/app/(professional)/patients/page.tsx",
        lineNumber: 216,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PatientsListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a70b4fde._.js.map