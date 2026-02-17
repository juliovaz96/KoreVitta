export type UserRole = "professional" | "patient";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
};

export type ProfessionalProfile = {
  userId: string;
  profession: string;
  licenseType: "CRN" | "CREF" | "CRM";
  licenseNumber: string;
  onboardingCompleted: boolean;
};
