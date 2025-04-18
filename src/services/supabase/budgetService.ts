import { BudgetType } from "../../components/Budget/type/BudgetType";
import supabase from "../../config/supabaseConfig";

// GET
export const getBudgets = async (): Promise<BudgetType[]> => {
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
