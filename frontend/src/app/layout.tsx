import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem('korevitta-theme');
    const theme = stored === 'light' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  } catch {
    document.documentElement.classList.add('dark');
  }
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://app.korevitta.com"),
  title: {
    default: "KoreVitta | Acompanhamento nutricional online com clareza e retenção",
    template: "%s | KoreVitta",
  },
  description:
    "Plataforma moderna para nutricionistas e preparadores físicos organizarem pacientes, check-ins e evolução com experiência clara para o paciente.",
  applicationName: "KoreVitta",
  keywords: [
    "acompanhamento nutricional online",
    "software para nutricionista",
    "crm para nutricionista",
    "check-in nutricional",
    "app para paciente",
    "nutrição online",
    "preparador físico",
  ],
  category: "health",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://app.korevitta.com",
    siteName: "KoreVitta",
    title: "KoreVitta | Acompanhamento nutricional online com clareza e retenção",
    description:
      "Organize pacientes, automatize check-ins, acompanhe evolução e reduza abandono com uma plataforma moderna para profissionais da nutrição.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KoreVitta | Acompanhamento nutricional online",
    description:
      "CRM simples, protocolos estruturados, check-ins automáticos e evolução visual para aumentar retenção.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
