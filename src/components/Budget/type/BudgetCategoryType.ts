export type BudgetCategoryType = {
  id: string;
  created_at: Date | null;
  category: string;
  amount: number;
  user_id: string;
  budget_id: string;
};
