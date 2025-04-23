export type BudgetCategoryType = {
  id: string;
  created_at: Date | string | null;
  category: string;
  amount: number;
  user_id: string | null;
  budget_id: string | null;
};
