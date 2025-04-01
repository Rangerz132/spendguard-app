import Card from "../components/Card/Card";
import ExpenseCard from "../components/Expense/ExpenseCard";
import ExpenseListCard from "../components/Expense/ExpenseListCard";
import useActivities from "../hooks/useActivities";

const Analytics = () => {
  const {
    getExpensesAmount,
    getIncomesAmount,
    getBalanceAmount,
    getExpensesAmountByCategories,
    activityCategories,
  } = useActivities();
  return (
    <div className="wrapper page-wrapper">
      <section>
        {/** Analytics title */}
        <h2 className="text-white">Analytics</h2>
        {/** Balance title */}
        <Card
          className="w-full"
          data={{
            title: "Total balance",
            value: getBalanceAmount(),
            compared: {
              value: 5,
              isIncreasing: true,
            },
          }}
        />
        <div className="flex flex-row space-x-4">
          {/** Incomes title */}
          <Card
            className="basis-1/2"
            data={{
              title: "Incomes",
              value: getIncomesAmount(),
              compared: {
                value: 3,
                isIncreasing: true,
              },
            }}
          />
          {/** Expenses title */}
          <Card
            className="basis-1/2"
            data={{
              title: "Expenses",
              value: getExpensesAmount(),
              compared: {
                value: 7,
                isIncreasing: false,
              },
            }}
          />
        </div>
      </section>
      <section>
        <div className="flex flex-col space-y-1">
          {/** Expenses title */}
          <h2 className="text-white">Expenses this month</h2>
          {/** Expenses subtitle */}
          <h4 className="text-grey text-sm">
            You spend money in{" "}
            <span className="font-semibold text-white">
              {getExpensesAmountByCategories().size}
            </span>{" "}
            categories.
          </h4>
        </div>
        <ExpenseListCard />
      </section>
    </div>
  );
};

export default Analytics;
