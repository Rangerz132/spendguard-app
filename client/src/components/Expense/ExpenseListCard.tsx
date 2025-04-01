import useActivities from "../../hooks/useActivities";
import ExpenseCard from "./ExpenseCard";
import { ExpenseType } from "./type/expenseType";

const ExpenseListCard = () => {
  const { getExpensesAmountByCategories } = useActivities();

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div className="flex flex-row space-x-4 overflow-x-auto scrolling-touch -mr-4 pr-4">
        {Array.from(getExpensesAmountByCategories()).map(
          ([key, value]: [string, ExpenseType]) => (
            <ExpenseCard key={key} category={key} value={value} />
          )
        )}
      </div>
    </div>
  );
};

export default ExpenseListCard;
