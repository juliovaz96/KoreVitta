"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, ChartLine, ClipboardCheck, Home, MessageSquare, ScrollText } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const patientLinks = [
  { href: "/home", label: "Início", icon: Home },
  { href: "/today", label: "Hoje", icon: CalendarDays },
  { href: "/checkin", label: "Check-in", icon: ClipboardCheck },
  { href: "/progress", label: "Progresso", icon: ChartLine },
  { href: "/protocol", label: "Protocolo", icon: ScrollText },
  { href: "/messages", label: "Mensagens", icon: MessageSquare },
];

const getPatientQuickActions = (pathname: string) => {
  if (pathname.startsWith("/messages")) {
    return [{ href: "/checkin", label: "Enviar check-in" }];
  }

  if (pathname.startsWith("/checkin")) {
    return [{ href: "/today", label: "Voltar para hoje" }];
  }

  if (pathname.startsWith("/protocol") || pathname.startsWith("/progress")) {
    return [
      { href: "/checkin", label: "Enviar check-in" },
      { href: "/messages", label: "Falar com profissional" },
    ];
  }

  return [
    { href: "/checkin", label: "Enviar check-in" },
    { href: "/messages", label: "Mensagens" },
  ];
};

export function PatientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const quickActions = getPatientQuickActions(pathname);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="min-h-screen bg-background px-2 py-2 md:px-4 md:py-4">
      <header className="kv-surface rounded-2xl px-4 py-3 md:px-5">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
          <Link href="/home" className="font-semibold tracking-tight">
            <span className="inline-flex items-center gap-1.5"><Wordmark size="sm" /><span className="text-xs text-muted-foreground">• Paciente</span></span>
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 rounded-xl border border-border bg-card p-1 md:flex" aria-label="Navegação desktop do paciente">
              {patientLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                      active ? "bg-primary/12 text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
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
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-2 py-6 pb-24 md:px-3">{children}</main>

      <nav className="fixed inset-x-0 bottom-2 z-20 px-2 md:hidden" aria-label="Navegação principal do paciente">
        <div className="kv-surface mx-auto grid max-w-4xl grid-cols-6 gap-1 rounded-2xl px-2 py-2">
          {patientLinks.slice(0, 6).map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center justify-center rounded-lg px-1 py-2 text-center text-[11px] font-medium transition-colors ${
                  active
                    ? "bg-primary/14 text-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <span className="inline-flex flex-col items-center gap-1">
                  <Icon className="size-3.5" />
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
