export type BudgetType = {
  id: string;
  name: string | undefined;
  description?: string;
  created_at: Date | null;
  user_id: string | null;
};
