import Card from "../components/Card/Card";
import ExpenseListCard from "../components/Expense/ExpenseListCard";
import useActivities from "../hooks/useActivities";
import CustomLineChart from "../components/Chart/CustomLineChart";
import { useEffect, useState } from "react";
import CustomBarChart from "../components/Chart/CustomBarCart";

const Analytics = () => {
  const [balanceTrends, setBalanceTrends] = useState<any[]>([]);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [incomes, setIncomes] = useState<any[]>([]);
  const [expensesByCategory, setExpensesByCategory] = useState<any[]>([]);

  const {
    getExpensesAmount,
    getIncomesAmount,
    getBalanceAmount,
    getExpensesAmountByCategories,
    getExpensesAmountByDates,
    getIncomesAmountByDates,
  } = useActivities();

  useEffect(() => {
    const expenseData = Array.from(getExpensesAmountByDates()).map(
      ([date, value]) => ({
        value1: date,
        value2: value,
      })
    );

    const incomeData = Array.from(getIncomesAmountByDates()).map(
      ([date, value]) => ({
        value1: date,
        value2: value,
      })
    );

    const expensesByCategoryData = Array.from(
      getExpensesAmountByCategories()
    ).map(([date, value]) => ({
      value1: date,
      value2: value,
    }));

    setExpenses(expenseData);
    setIncomes(incomeData);
    setExpensesByCategory(expensesByCategoryData);
    setBalanceTrends(expenseData);
  }, [
    getExpensesAmountByDates,
    getIncomesAmountByDates,
    getExpensesAmountByCategories,
  ]);

  const handleBalanceTrends = (e) => {
    setBalanceTrends(e.target.value === "incomes" ? incomes : expenses);
  };

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
        {/** Balance Chart */}
        <div className="card">
          <div className="card-inner">
            <div className="flex flex-row justify-between items-center">
              {/** Chart title */}
              <h3 className="text-grey">Activity trends</h3>
              {/** Activity type selection */}
              <select
                className="text-xs"
                onChange={(e) => handleBalanceTrends(e)}
              >
                <option value="expenses">Expenses</option>
                <option value="incomes">Incomes</option>
              </select>
            </div>
            {/** Chart */}
            <CustomLineChart data={balanceTrends} />
          </div>
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
        {/** Chart */}
        <div className="card">
          <div className="card-inner">
            {/** Chart title */}
            <h3 className="text-grey">Expenses category trends</h3>
            <CustomBarChart data={expensesByCategory} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
