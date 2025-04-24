import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import useActivities from "./useActivities";

const useBudgets = () => {
  const budgets = useSelector((root: RootState) => root.budgets);
  const budgetCategories = useSelector(
    (root: RootState) => root.budgetCategories
  );
  const { getExpensesAmountByCategory } = useActivities();

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
    const validBudgetCategories = budgetCategories.filter(
      (budgetCategory) => budgetCategory.budget_id === budgetId
    );

    let amount = 0;
    for (let i = 0; i < validBudgetCategories.length; i++) {
      amount += getExpensesAmountByCategory(validBudgetCategories[i].category);
    }

    return amount;
  };

  return {
    getMaxAmountByBudget,
    getCurrentAmountByBudget,
    budgets,
  };
};

export default useBudgets;
