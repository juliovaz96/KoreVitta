export type ThreadSummary = {
  id: string;
  patientId: string;
  patientName: string;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
};

export type MessageItem = {
  id: string;
  threadId: string;
  sender: "professional" | "patient" | "system";
  content: string;
  createdAt: string;
};
