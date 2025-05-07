import useActivities from "../../hooks/useActivities";
import ExpenseCard from "./ExpenseCard";

const ExpenseListCard = (props: { query?: string }) => {
  const { getExpensesAmountByCategories } = useActivities();

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="carousel scrollbar-hidden">
        {Array.from(getExpensesAmountByCategories()).map(
          ([key, value]: [string, number]) => (
            <ExpenseCard
              key={key}
              category={key}
              value={value}
              query={props.query}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ExpenseListCard;
