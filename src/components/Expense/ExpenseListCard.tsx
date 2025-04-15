import useActivities from "../../hooks/useActivities";
import ExpenseCard from "./ExpenseCard";

const ExpenseListCard = () => {
  const { getExpensesAmountByCategories } = useActivities();

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="carousel">
        {Array.from(getExpensesAmountByCategories()).map(
          ([key, value]: [string, number]) => (
            <ExpenseCard key={key} category={key} value={value} />
          )
        )}
      </div>
    </div>
  );
};

export default ExpenseListCard;
