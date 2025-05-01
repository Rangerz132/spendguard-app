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
    .select("*")
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
  // Step 1: Get all IDs from the new categories
  const newIds = budgetCategories.map((cat) => cat.id);

  // Step 2: Check which IDs already exist in the database
  const { data: existingCategories, error: fetchError } = await supabase
    .from("budget_category")
    .select("id")
    .in("id", newIds);

  if (fetchError) {
    console.error("Error checking existing categories:", fetchError);
    return null;
  }

  // Step 3: Filter out categories that already exist
  const existingIds = new Set((existingCategories || []).map((cat) => cat.id));
  const categoriesToInsert = budgetCategories.filter(
    (cat) => !existingIds.has(cat.id)
  );

  // If there’s nothing new to insert, return an empty array
  if (categoriesToInsert.length === 0) {
    return [];
  }

  // Step 4: Insert only new categories
  const { data, error } = await supabase
    .from("budget_category")
    .insert(categoriesToInsert)
    .select();

  if (error) {
    console.error("Error creating budget categories:", error);
    return null;
  }

  return data;
};

// PUT
export const updateBudgetCategory = async (
  budgetCategory: BudgetCategoryType
): Promise<BudgetCategoryType | null> => {
  const { data, error } = await supabase
    .from("budget_category")
    .update(budgetCategory)
    .eq("id", budgetCategory.id)
    .select()
    .single();

  if (error) {
    return null;
  }

  return data;
};

// PUT
export const updateBudgetCategories = async (
  budgetCategories: BudgetCategoryType[]
): Promise<BudgetCategoryType[] | null> => {
  const updatedBudgetCategories: BudgetCategoryType[] = [];

  for (const budgetCategory of budgetCategories) {
    const updated = await updateBudgetCategory(budgetCategory);
    updatedBudgetCategories.push(updated as BudgetCategoryType);
  }

  return updatedBudgetCategories;
};
