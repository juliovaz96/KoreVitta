import type { TodayView } from "@/types/today";

export const mockTodayView: TodayView = {
  greetingName: "Ana",
  objective: "Perder 8kg",
  weekProgressLabel: "Semana 4/12",
  statusLabel: "Em dia",
  nextCheckinLabel: "Sex 14/02",
  tasks: [
    { id: "tsk_001", type: "meal", label: "Café da manhã", completed: true },
    { id: "tsk_002", type: "meal", label: "Almoço", completed: false },
    { id: "tsk_003", type: "training", label: "Treino A", completed: false },
    { id: "tsk_004", type: "supplement", label: "Creatina 5g", completed: false },
  ],
  waterCurrentMl: 1200,
  waterTargetMl: 3000,
};
