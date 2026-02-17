import Link from "next/link";
import { Activity, CircleCheckBig, Target } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { ThemeToggle } from "@/components/theme/theme-toggle";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-65px)] w-full max-w-6xl items-center px-6 py-10 md:py-12">
      <div className="grid w-full gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <section className="kv-surface rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <p className="kv-pill inline-flex items-center gap-1.5">
              <Wordmark size="xs" />
            </p>
            <ThemeToggle />
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground md:text-[15px]">{subtitle}</p>
          <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2"><CircleCheckBig className="size-4 text-chart-2" /> Simplicidade acima de tudo</li>
            <li className="inline-flex items-center gap-2"><Target className="size-4 text-chart-1" /> Fluxo orientado à retenção</li>
            <li className="inline-flex items-center gap-2"><Activity className="size-4 text-chart-3" /> Clareza diária para o paciente</li>
            <li className="inline-flex items-center gap-2"><CircleCheckBig className="size-4 text-chart-4" /> Eficiência operacional para o profissional</li>
          </ul>
        </section>
        <section className="kv-surface rounded-2xl p-8 md:p-9">
          {children}
          {footer ? <div className="mt-6 text-sm text-muted-foreground">{footer}</div> : null}
          <div className="mt-4 text-sm text-muted-foreground">
            <Link href="/" className="underline underline-offset-4">
              Voltar para a página inicial
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
