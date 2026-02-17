import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  ChartLine,
  CheckCircle2,
  ClipboardList,
  Layers3,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Landing",
  description:
    "KoreVitta organiza o acompanhamento nutricional online com CRM, protocolos integrados, check-ins e progresso visual para aumentar retenção e capacidade de atendimento.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KoreVitta | Plataforma de acompanhamento nutricional online",
    description:
      "Menos operação manual para o profissional e mais clareza diária para o paciente: CRM, check-ins, protocolos e progresso em um único fluxo.",
    url: "https://app.korevitta.com",
  },
  twitter: {
    title: "KoreVitta | Plataforma de acompanhamento nutricional online",
    description:
      "Organize pacientes, reduza abandono e entregue experiência moderna com KoreVitta.",
  },
};

export default function LandingPage() {
  const productPillars = [
    {
      icon: ClipboardList,
      title: "Gestão em uma tela",
      description: "CRM com status, risco e próximo check-in para você saber quem precisa de ação agora.",
    },
    {
      icon: Layers3,
      title: "Execução sem fricção",
      description: "Protocolos de nutrição, treino, suplementação e hidratação em fluxo único.",
    },
    {
      icon: ChartLine,
      title: "Retenção com dados",
      description: "Evolução de check-ins e progresso visual para manter paciente ativo por mais tempo.",
    },
  ];

  const howItWorks = [
    {
      icon: Users,
      title: "1) Configure seu método",
      description: "Cadastre seu perfil, branding e a cadência de check-ins padrão do seu atendimento.",
    },
    {
      icon: Layers3,
      title: "2) Estruture o protocolo",
      description: "Monte módulos integrados e ative o plano para gerar tarefas diárias do paciente.",
    },
    {
      icon: CalendarCheck2,
      title: "3) Acompanhe e ajuste",
      description: "Revise check-ins, acompanhe risco e faça ajustes com base em aderência e progresso.",
    },
  ];

  const revenueDrivers = [
    {
      icon: Wallet,
      title: "Aumente capacidade sem aumentar caos",
      description: "Com menos operação manual, você acompanha mais pacientes com o mesmo padrão de qualidade.",
    },
    {
      icon: CalendarCheck2,
      title: "Reduza perda de pacientes",
      description: "Check-ins estruturados e score de risco ajudam a agir antes do abandono silencioso.",
    },
    {
      icon: CheckCircle2,
      title: "Entregue mais valor percebido",
      description: "Paciente enxerga rotina, progresso e orientação em um app claro, o que sustenta a mensalidade.",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      description: "Para validar seu método no digital",
      features: [
        "Até 5 pacientes",
        "CRM com status e risco",
        "Protocolos (nutrição + treino)",
        "Check-ins e tela Hoje",
        "Mensagens no app",
      ],
      cta: "Começar grátis",
      highlight: false,
    },
    {
      name: "Core",
      price: "R$ 79,90/mês",
      description: "Para escalar atendimento com consistência",
      features: [
        "Pacientes ilimitados",
        "Tudo do Free",
        "Templates de protocolo",
        "Branding básico",
        "Fluxo completo de check-ins",
      ],
      cta: "Escolher Core",
      highlight: true,
    },
    {
      name: "Pro",
      price: "R$ 99,90/mês",
      description: "Para operação avançada e gestão por dados",
      features: [
        "Tudo do Core",
        "Analytics do profissional",
        "Branding customizado",
        "Exportação de dados",
        "Recursos avançados",
      ],
      cta: "Escolher Pro",
      highlight: false,
    },
  ];

  const faqItems = [
    {
      question: "Preciso instalar app?",
      answer: "Não. O acesso é via web app responsivo para profissional e paciente.",
    },
    {
      question: "Posso começar no plano Free?",
      answer: "Sim, com até 5 pacientes e sem cartão de crédito.",
    },
    {
      question: "KoreVitta é software hospitalar?",
      answer: "Não. O foco é acompanhamento nutricional digital simples e escalável.",
    },
    {
      question: "Vai ter IA?",
      answer:
        "Sim, em fase evolutiva pós-MVP para apoiar check-ins e retenção sem substituir o profissional.",
    },
    {
      question: "Como isso ajuda no faturamento?",
      answer:
        "Com KoreVitta, você reduz trabalho operacional, aumenta capacidade de atendimento e melhora retenção com acompanhamento consistente.",
    },
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "KoreVitta",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Core",
        price: "79.90",
        priceCurrency: "BRL",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "99.90",
        priceCurrency: "BRL",
      },
    ],
    description:
      "Plataforma para nutricionistas e preparadores físicos organizarem acompanhamento online com CRM, protocolos, check-ins e progresso visual para aumentar retenção.",
    url: "https://app.korevitta.com",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KoreVitta",
    url: "https://app.korevitta.com",
    description:
      "Infraestrutura digital para acompanhamento nutricional online no Brasil com foco em clareza, organização e retenção.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-8 md:gap-12 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="flex items-center justify-between">
        <h1 className="inline-flex items-center text-lg font-semibold tracking-tight"><Wordmark size="md" priority /></h1>
        <nav className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="ghost">Entrar</Button>
          </Link>
          <Link href="/register">
            <Button>Começar grátis</Button>
          </Link>
        </nav>
      </header>

      <section className="kv-surface rounded-2xl p-8 md:p-12">
        <p className="kv-pill inline-flex items-center gap-1.5">
          <Sparkles className="size-3.5" />
          Para nutricionistas e preparadores físicos que atendem online
        </p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
          Organize o acompanhamento, retenha mais pacientes e escale seu faturamento com menos fricção.
        </h2>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
          KoreVitta centraliza CRM, protocolo, check-ins e progresso em um único fluxo. Você ganha tempo operacional, entrega uma experiência profissional e sustenta crescimento com previsibilidade.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/register">
            <Button size="lg" className="gap-2">
              Começar grátis
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="gap-2">
              Ver produto
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-background/55 p-4">
            <p className="text-2xl font-semibold tracking-tight">10–60</p>
            <p className="mt-1 text-sm text-muted-foreground">pacientes ativos no ICP principal</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/55 p-4">
            <p className="text-2xl font-semibold tracking-tight">2.000–3.000</p>
            <p className="mt-1 text-sm text-muted-foreground">profissionais pagos no Ano 1</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/55 p-4">
            <p className="text-2xl font-semibold tracking-tight">&gt;70%</p>
            <p className="mt-1 text-sm text-muted-foreground">meta de check-ins completados</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {productPillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <Card key={pillar.title}>
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2">
                  <Icon className="size-5 text-chart-1" />
                  {pillar.title}
                </CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Como funciona na prática</CardTitle>
            <CardDescription>Fluxo simples para operar bem desde o primeiro paciente.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {howItWorks.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-background/55 p-4">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Icon className="size-4 text-chart-2" />
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Como isso melhora resultado financeiro</CardTitle>
            <CardDescription>Receita cresce quando capacidade e retenção crescem juntas.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {revenueDrivers.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-background/55 p-4">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Icon className="size-4 text-chart-3" />
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
            <div className="rounded-2xl border border-border/60 bg-background/55 p-4 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Lógica de crescimento:</span> receita mensal = pacientes ativos × ticket médio.
              </p>
              <p className="mt-1.5">
                KoreVitta atua nos dois lados: ajuda você a manter mais pacientes ativos e aumentar capacidade sem perder qualidade.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="kv-surface rounded-2xl p-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="kv-title">Planos com recursos claros</h3>
            <p className="kv-subtitle mt-2 max-w-2xl">
              Escolha pelo estágio do seu negócio. Sem cobrança por paciente no Core e Pro.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.highlight ? "kv-glow" : ""}>
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2">
                  {plan.name}
                  {plan.highlight && <span className="kv-pill">Mais escolhido</span>}
                </CardTitle>
                <CardDescription>{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{plan.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-chart-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="mt-5 block">
                  <Button className="w-full" variant={plan.name === "Free" ? "outline" : "default"}>
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="kv-surface rounded-2xl p-8">
        <h3 className="text-xl font-semibold">O que você entrega com excelência no dia a dia</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-background/55 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Padronização sem perder personalização</p>
            <p className="mt-1.5">Use estrutura de protocolo e templates para ganhar velocidade sem perder ajuste individual.</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/55 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Comunicação no contexto certo</p>
            <p className="mt-1.5">Mensagens ligadas ao acompanhamento para evitar ruído e manter foco em aderência.</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/55 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Prioridade clínica mais objetiva</p>
            <p className="mt-1.5">Status e risco orientam quais pacientes demandam ação primeiro.</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/55 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Experiência moderna para o paciente</p>
            <p className="mt-1.5">Tela Hoje, checklist e progresso visual aumentam clareza, consistência e continuidade.</p>
          </div>
        </div>
      </section>

      <section className="kv-surface rounded-2xl p-8">
        <h3 className="text-xl font-semibold">FAQ rápido</h3>
        <div className="mt-4 space-y-4 text-sm text-muted-foreground">
          {faqItems.map((item) => (
            <p key={item.question}>
              <span className="font-medium text-foreground">{item.question}</span> {item.answer}
            </p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href="/register">
            <Button size="lg" className="gap-2">
              Criar conta gratuita
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="ghost">Já tenho conta</Button>
          </Link>
        </div>
      </section>

      <footer className="pb-6 text-center text-sm text-muted-foreground">
        <span className="inline-flex items-center justify-center gap-2">
          <Wordmark size="xs" />
          <span>• Clareza, organização e retenção para acompanhamento nutricional online.</span>
        </span>
      </footer>
    </main>
  );
}
