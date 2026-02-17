import type { UserRole } from "@/types/auth";

export type AppRole = UserRole | "admin";

export const ROLE_STORAGE_KEY = "korevitta-role";
export const AUTH_USER_STORAGE_KEY = "korevitta-auth-user";

export type MockLoginUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

export const mockLoginUsers: MockLoginUser[] = [
  {
    id: "usr_pro_001",
    name: "Dr. Lucas Almeida",
    email: "profissional@korevitta.com",
    password: "Teste@123",
    role: "professional",
  },
  {
    id: "usr_pat_001",
    name: "Ana Silva",
    email: "paciente@korevitta.com",
    password: "Teste@123",
    role: "patient",
  },
];

export function getDefaultRouteByRole(role: UserRole): string {
  return role === "professional" ? "/dashboard" : "/home";
}

export function authenticateMockUser(email: string, password: string, role?: UserRole): MockLoginUser | null {
  const normalizedEmail = email.trim().toLowerCase();
  const user = mockLoginUsers.find((item) => item.email.toLowerCase() === normalizedEmail && item.password === password);

  if (!user) return null;
  if (role && user.role !== role) return null;

  return user;
}
