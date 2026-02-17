import type { MessageItem, ThreadSummary } from "@/types/communication";

export const mockThreads: ThreadSummary[] = [
  {
    id: "thr_001",
    patientId: "pat_001",
    patientName: "Ana Silva",
    lastMessage: "Consegui seguir 80% do plano hoje.",
    lastMessageAt: "2026-02-14T18:20:00.000Z",
    unreadCount: 1,
  },
  {
    id: "thr_002",
    patientId: "pat_002",
    patientName: "Bruno Costa",
    lastMessage: "Podemos ajustar o treino de pernas?",
    lastMessageAt: "2026-02-14T15:00:00.000Z",
    unreadCount: 0,
  },
];

export const mockMessagesByThread: Record<string, MessageItem[]> = {
  thr_001: [
    {
      id: "msg_001",
      threadId: "thr_001",
      sender: "patient",
      content: "Consegui seguir 80% do plano hoje.",
      createdAt: "2026-02-14T18:20:00.000Z",
    },
    {
      id: "msg_002",
      threadId: "thr_001",
      sender: "professional",
      content: "Excelente. Vamos manter consistência até o check-in.",
      createdAt: "2026-02-14T18:30:00.000Z",
    },
  ],
};
