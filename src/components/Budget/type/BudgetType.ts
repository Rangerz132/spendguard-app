export type BudgetType = {
  id: string;
  name: string | undefined;
  description?: string;
  created_at: string | Date | null | undefined;
  from: string | Date | null | undefined;
  to: string | Date | null | undefined;
  user_id: string | null | undefined;
};
