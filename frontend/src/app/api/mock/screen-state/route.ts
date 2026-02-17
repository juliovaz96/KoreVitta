import { NextResponse } from "next/server";
import { resolveScreenState } from "@/lib/mock-screen-state";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pathname = searchParams.get("pathname") ?? "/";

  await new Promise((resolve) => setTimeout(resolve, 450));

  const state = resolveScreenState(pathname);

  if (state === "error") {
    return NextResponse.json({ state, message: "Falha simulada ao carregar dados" }, { status: 500 });
  }

  return NextResponse.json({ state });
}
