import type { AuthUser, ProfessionalProfile } from "@/types/auth";

export const mockAuthUser: AuthUser = {
  id: "usr_pro_001",
  name: "Dr. Lucas Almeida",
  email: "lucas@korevitta.com",
  role: "professional",
};

export const mockProfessionalProfile: ProfessionalProfile = {
  userId: "usr_pro_001",
  profession: "Nutricionista",
  licenseType: "CRN",
  licenseNumber: "CRN-12345",
  onboardingCompleted: true,
};
