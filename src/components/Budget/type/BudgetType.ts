export type BudgetType = {
  id: string;
  name: string | undefined;
  description?: string;
  created_at: string | Date | null;
  user_id: string | null;
};
