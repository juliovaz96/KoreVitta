"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, LayoutDashboard, Palette, Settings2, Sparkles, UsersRound } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const mainLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/patients", label: "Pacientes", icon: UsersRound },
  { href: "/templates", label: "Templates", icon: Sparkles },
  { href: "/analytics", label: "Painel de análises", icon: BarChart3 },
];

const settingsLinks = [
  { href: "/settings/profile", label: "Perfil", icon: Settings2 },
  { href: "/settings/branding", label: "Identidade visual", icon: Palette },
  { href: "/settings/subscription", label: "Assinatura e upgrade", icon: BarChart3 },
];

const getQuickActions = (pathname: string) => {
  if (pathname.startsWith("/patients")) {
    return [
      { href: "/patients/new", label: "+ Novo paciente" },
      { href: "/templates/apply", label: "Aplicar template" },
    ];
  }

  if (pathname.startsWith("/templates")) {
    return [
      { href: "/templates/apply", label: "Aplicar template" },
      { href: "/patients", label: "Ver pacientes" },
    ];
  }

  if (pathname.startsWith("/analytics")) {
    return [
      { href: "/analytics/audit", label: "Auditoria" },
      { href: "/analytics/protocol-effectiveness", label: "Efetividade" },
    ];
  }

  if (pathname.startsWith("/settings")) {
    return [
      { href: "/settings/profile", label: "Perfil" },
      { href: "/settings/branding", label: "Marca" },
    ];
  }

  return [
    { href: "/patients/new", label: "+ Novo paciente" },
    { href: "/patients", label: "Ver pacientes" },
  ];
};

export function ProfessionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const quickActions = getQuickActions(pathname);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="min-h-screen bg-background px-2 py-2 md:px-4 md:py-4">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-4 md:grid-cols-[272px_1fr]">
        <aside className="kv-surface sticky top-4 hidden h-[calc(100vh-2rem)] rounded-2xl px-4 py-6 md:block">
          <Link href="/dashboard" className="mb-6 inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Wordmark size="lg" priority />
          </Link>

          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Profissional
          </p>
          <nav className="space-y-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary/14 text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <p className="mb-2 mt-6 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Configurações
          </p>
          <nav className="space-y-1">
            {settingsLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary/14 text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="kv-surface rounded-2xl px-4 py-3 md:px-6">
            <div className="flex items-center justify-between">
              <Link href="/dashboard" className="font-semibold md:hidden">
                <span className="inline-flex items-center gap-1.5"><Wordmark size="sm" /><span className="text-xs text-muted-foreground">• Pro</span></span>
              </Link>
              <nav className="flex gap-2 overflow-x-auto text-sm md:hidden">
                {mainLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-flex whitespace-nowrap rounded-full border px-3 py-1 transition-colors ${
                        active
                          ? "border-primary/40 bg-primary/15 text-foreground"
                          : "border-border bg-card text-muted-foreground"
                      }`}
                    >
                      <span className="mr-1.5 inline-flex items-center"><Icon className="size-3.5" /></span>
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1 md:flex">
                  {quickActions.map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="inline-flex items-center rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
                <ThemeToggle />
                <Link
                  href="/patients/new"
                  className="hidden rounded-xl border border-primary bg-primary px-3 py-2 text-sm font-medium text-primary-foreground md:inline-flex"
                >
                  + Novo Paciente
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 px-2 py-6 md:px-3 md:py-7">{children}</main>
        </div>
      </div>
    </div>
  );
}
