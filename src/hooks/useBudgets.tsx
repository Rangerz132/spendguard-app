import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useBudgets = () => {
  const budgets = useSelector((store: RootState) => store.budgets);
  const budgetCategories = useSelector(
    (store: RootState) => store.budgetCategories
  );

  /** Return the total expenses amount */
  const getAmountByBudget = (budgetId: string): number => {
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

  return {
    getAmountByBudget,
    budgets,
  };
};

export default useBudgets;
