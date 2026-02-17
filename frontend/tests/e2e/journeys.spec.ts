import { expect, test } from "@playwright/test";

test.describe("KoreVitta critical journeys", () => {
  test("mock login routes by role", async ({ page }) => {
    await page.goto("/login");

    await page.getByRole("button", { name: "Profissional" }).click();
    await page.getByLabel("E-mail").fill("profissional@korevitta.com");
    await page.getByLabel("Senha").fill("Teste@123");
    await page.getByRole("button", { name: /Entrar e continuar|Entrar/i }).click();
    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(page.getByRole("heading", { name: "Dashboard CRM" })).toBeVisible();

    await page.goto("/login");
    await page.getByRole("button", { name: "Paciente" }).click();
    await page.getByLabel("E-mail").fill("paciente@korevitta.com");
    await page.getByLabel("Senha").fill("Teste@123");
    await page.getByRole("button", { name: /Entrar e continuar|Entrar/i }).click();
    await expect(page).toHaveURL(/\/home$/);
    await expect(page.getByRole("heading", { name: "Início" })).toBeVisible();
  });

  test("landing and auth entry points", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "KoreVitta" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Começar grátis" }).first()).toBeVisible();

    await page.getByRole("link", { name: "Entrar" }).click();
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole("heading", { name: "Acessar conta" })).toBeVisible();

    await page.goto("/register");
    await expect(page.getByRole("heading", { name: "Criar conta profissional" })).toBeVisible();
  });

  test("professional journey: dashboard to patient messages", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.getByRole("heading", { name: "Dashboard CRM" })).toBeVisible();

    await page.goto("/patients");
    await expect(page.getByRole("heading", { name: "Pacientes", level: 1 })).toBeVisible();
    await expect(page.getByRole("button", { name: /Criar e enviar convite|Novo Paciente/i }).first()).toBeVisible();

    await page.goto("/patients/pat_001/messages");
    await expect(page.getByRole("heading", { name: "Mensagens" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Conversa ativa" })).toBeVisible();
  });

  test("patient journey: today and messages", async ({ page }) => {
    await page.goto("/today");
    await expect(page.getByRole("heading", { name: /Bom dia,/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Hidratação" })).toBeVisible();

    await page.goto("/messages");
    await expect(page.getByRole("heading", { name: "Mensagens" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Conversa com/i })).toBeVisible();
  });

  test("theme toggle persists preference", async ({ page }) => {
    await page.goto("/");

    const root = page.locator("html");
    const toggle = page.getByRole("button", { name: /ativar tema/i }).first();

    await expect(toggle).toBeVisible();

    const wasDark = await root.evaluate((element) => element.classList.contains("dark"));

    await toggle.click();
    await expect
      .poll(async () => root.evaluate((element) => element.classList.contains("dark")))
      .toBe(!wasDark);

    await page.reload();
    await expect
      .poll(async () => root.evaluate((element) => element.classList.contains("dark")))
      .toBe(!wasDark);
  });
});
