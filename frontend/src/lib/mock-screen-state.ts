export type ScreenState =
  | "ready"
  | "loading"
  | "empty"
  | "error"
  | "success"
  | "permission";

const routeStateMap: Record<string, ScreenState> = {
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
  "/hydration": "ready",
};

export function normalizeRoutePath(pathname: string): string {
  if (!pathname) return "/";

  const reviewRegex = /^\/patients\/[^/]+\/checkins\/[^/]+\/review$/;
  if (reviewRegex.test(pathname)) {
    return "/patients/[id]/checkins/[checkinId]/review";
  }

  const dynamicPatterns: Array<[RegExp, string]> = [
    [/^\/patients\/[^/]+\/protocol$/, "/patients/[id]/protocol"],
    [/^\/patients\/[^/]+\/checkins$/, "/patients/[id]/checkins"],
    [/^\/patients\/[^/]+\/progress$/, "/patients/[id]/progress"],
    [/^\/patients\/[^/]+\/messages$/, "/patients/[id]/messages"],
    [/^\/patients\/[^/]+\/hydration$/, "/patients/[id]/hydration"],
    [/^\/patients\/[^/]+\/measurements$/, "/patients/[id]/measurements"],
    [/^\/patients\/[^/]+\/photos$/, "/patients/[id]/photos"],
    [/^\/patients\/[^/]+\/biomarkers$/, "/patients/[id]/biomarkers"],
    [/^\/patients\/[^/]+$/, "/patients/[id]"],
    [/^\/protocols\/[^/]+\/nutrition$/, "/protocols/[id]/nutrition"],
    [/^\/protocols\/[^/]+\/training$/, "/protocols/[id]/training"],
    [/^\/protocols\/[^/]+$/, "/protocols/[id]"],
    [/^\/invite\/[^/]+$/, "/invite/[token]"],
  ];

  for (const [pattern, normalized] of dynamicPatterns) {
    if (pattern.test(pathname)) return normalized;
  }

  return pathname;
}

export function resolveScreenState(pathname: string): ScreenState {
  const normalized = normalizeRoutePath(pathname);
  return routeStateMap[normalized] ?? "ready";
}
