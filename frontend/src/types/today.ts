export type DailyTaskType = "meal" | "training" | "supplement" | "hydration";

export type DailyTask = {
  id: string;
  type: DailyTaskType;
  label: string;
  completed: boolean;
};

export type TodayView = {
  greetingName: string;
  objective: string;
  weekProgressLabel: string;
  statusLabel: string;
  nextCheckinLabel: string;
  tasks: DailyTask[];
  waterCurrentMl: number;
  waterTargetMl: number;
};
