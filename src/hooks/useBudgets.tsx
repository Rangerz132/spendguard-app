import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { BudgetType } from "../components/Budget/type/BudgetType";
import { BudgetCategoryType } from "../components/Budget/type/BudgetCategoryType";
import useActivities from "./useActivities";

const useBudgets = () => {
  const budgets = useSelector((root: RootState) => root.budgets);
  const budgetCategories = useSelector(
    (root: RootState) => root.budgetCategories
  );
  const { getExpensesAmountByCategoryWithinDateRange } = useActivities();

  /** Return the total budget amount */
  const getBudgetById = (budgetId: string): BudgetType | null => {
    const budget = budgets.find((budget) => budget.id === budgetId);
    if (!budget) {
      return null;
    }

    return budget;
  };

  const getBudgetCategoriesByBudgetId = (
    budgetId: string
  ): BudgetCategoryType[] => {
    return budgetCategories.filter(
      (budgetCategory) => budgetCategory.budget_id === budgetId
    );
  };

  /** Return the total budget amount */
  const getMaxAmountByBudget = (budgetId: string): number => {
    if (budgets.length === 0) {
      return 0;
    } else {
      const validBudgetCategories = budgetCategories.filter(
        (budgetCategory) => budgetCategory.budget_id === budgetId
      );
      return validBudgetCategories.reduce(
        (acc, budgetCategory) => acc + (Number(budgetCategory.amount) || 0),
        0
      );
    }
  };

  const getCurrentAmountByBudget = (budgetId: string): number => {
    const budget = getBudgetById(budgetId);
    if (!budget) {
      return 0;
    }

    const validBudgetCategories = budgetCategories.filter(
      (budgetCategory) => budgetCategory.budget_id === budgetId
    );

    let amount = 0;
    for (let i = 0; i < validBudgetCategories.length; i++) {
      amount += getExpensesAmountByCategoryWithinDateRange(
        validBudgetCategories[i].category,
        budget.from as string | Date,
        budget.to as string | Date
      );
    }

    return amount;
  };

  return {
    getBudgetById,
    getBudgetCategoriesByBudgetId,
    getMaxAmountByBudget,
    getCurrentAmountByBudget,
    budgets,
  };
};

export default useBudgets;
