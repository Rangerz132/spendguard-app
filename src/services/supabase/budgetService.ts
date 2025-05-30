import { BudgetCategoryType } from "../../components/Budget/type/BudgetCategoryType";
import { BudgetType } from "../../components/Budget/type/BudgetType";
import supabase from "../../config/supabaseConfig";

// GET
export const getUserBudgets = async (): Promise<BudgetType[]> => {
  const dataUser = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("budget")
    .select()
    .eq("user_id", dataUser.data.user?.id);

  if (error) {
    console.error("Error fetching budgets:", error);
    return [];
  }

  return data ?? [];
};

// GET
export const getBudgetById = async (
  budgetId: string
): Promise<BudgetType | null> => {
  const { data, error } = await supabase
    .from("budget")
    .select()
    .eq("id", budgetId)
    .single();

  if (error) {
    console.error("Error fetching budget:", error);
    return null;
  }

  return data as BudgetType;
};

// GET
export const getBudgetAmountById = async (
  budgetId: string
): Promise<BudgetCategoryType[] | null> => {
  const { data, error } = await supabase
    .from("budget_category")
    .select()
    .eq("id", budgetId);

  if (error) {
    console.error("Error fetching budget categories:", error);
    return null;
  }

  return data as BudgetCategoryType[];
};

// POST
export const createBudget = async (
  budget: BudgetType
): Promise<BudgetType | null> => {
  const { data, error } = await supabase
    .from("budget")
    .insert([budget])
    .select()
    .single();

  if (error) {
    console.error("Error creating budget:", error);
    return null;
  }

  return data;
};

// PUT
export const updateBudget = async (
  budget: BudgetType
): Promise<BudgetType | null> => {
  const { data, error } = await supabase
    .from("budget")
    .update(budget)
    .eq("id", budget.id)
    .select()
    .single();

  if (error) {
    console.error("Error updating budget:", error);
    return null;
  }

  return data;
};

// DELETE
export const deleteBudget = async (
  budgetId: string
): Promise<BudgetType | null> => {
  const { data, error } = await supabase
    .from("budget")
    .delete()
    .eq("id", budgetId);

  if (error) {
    console.error("Error deleting budget:", error);
    return null;
  }

  return data;
};
