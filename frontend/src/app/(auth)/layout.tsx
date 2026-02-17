import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 py-2 md:px-4 md:py-4">
      <header className="kv-surface mx-auto w-full max-w-6xl rounded-2xl px-6 py-4">
        <div className="mx-auto flex w-full items-center justify-between">
          <Link href="/" className="font-semibold">
            <Wordmark size="md" />
          </Link>
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link className="rounded-lg px-2 py-1 hover:bg-accent hover:text-foreground" href="/login">Login</Link>
            <Link className="rounded-lg px-2 py-1 hover:bg-accent hover:text-foreground" href="/register">Cadastro</Link>
            <Link className="rounded-lg px-2 py-1 hover:bg-accent hover:text-foreground" href="/forgot-password">Recuperar senha</Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
