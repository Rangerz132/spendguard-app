export type BudgetType = {
  id: string;
  name: string | undefined;
  description?: string;
  created_at: string | Date | null;
  from: string | Date | null;
  to: string | Date | null;
  user_id: string | null;
};
