import { BudgetCategoryType } from "../../components/Budget/type/BudgetCategoryType";
import supabase from "../../config/supabaseConfig";
import { getBudgetById } from "./budgetService";

// GET
export const getBudgetCategories = async (): Promise<BudgetCategoryType[]> => {
  const dataUser = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("budget_category")
    .select()
    .eq("user_id", dataUser.data.user?.id);

  if (error) {
    console.error("Error fetching budget categories:", error);
    return [];
  }

  return data ?? [];
};

// GET
export const getBudgetCategoriesByBudgetId = async (
  budgetId: string
): Promise<BudgetCategoryType[]> => {
  const budget = await getBudgetById(budgetId);

  if (!budget) {
    return [];
  }

  const { data, error } = await supabase
    .from("budget_category")
    .select()
    .eq("user_id", budget.user_id)
    .eq("budget_id", budget.id);

  if (error) {
    console.error("Error fetching budget categories:", error);
    return [];
  }

  return data ?? [];
};

// GET
export const getBudgetCategoryById = async (
  budgetCategoryId: string
): Promise<BudgetCategoryType | null> => {
  const { data, error } = await supabase
    .from("budget")
    .select()
    .eq("id", budgetCategoryId)
    .single();

  if (error) {
    console.error("Error fetching budget categories:", error);
    return null;
  }

  return data as BudgetCategoryType;
};

// POST
export const createBudgetCategory = async (
  budgetCategory: BudgetCategoryType
): Promise<BudgetCategoryType | null> => {
  const { data, error } = await supabase
    .from("budget_category")
    .insert([budgetCategory])
    .select()
    .single();

  if (error) {
    console.error("Error creating budget category:", error);
    return null;
  }

  return data;
};

// POST
export const createBudgetCategories = async (
  budgetCategories: BudgetCategoryType[]
): Promise<BudgetCategoryType[] | null> => {
  const { data, error } = await supabase
    .from("budget_category")
    .insert(budgetCategories)
    .select();

  if (error) {
    console.error("Error creating budget categories:", error);
    return null;
  }

  return data;
};
