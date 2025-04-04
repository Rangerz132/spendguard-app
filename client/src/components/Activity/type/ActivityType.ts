export type ActivityType = {
  id: string;
  name: string | undefined;
  description?: string;
  amount: number;
  isExpense: boolean;
  category: string;
  createdAt: string;
};
