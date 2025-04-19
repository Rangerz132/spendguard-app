import { useEffect, useState } from "react";
import useActivities from "../../../hooks/useActivities";
import { BudgetType } from "../../../components/Budget/type/BudgetType";
import { getBudgets } from "../../../services/supabase/budgetService";
import ViewMore from "../../../components/UI/ViewMore";
import Card from "../../../components/Card/Card";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";
import LatestActivityCard from "../../../components/Activity/LatestActivityCard";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Home = () => {
  const { getExpensesAmount, getIncomesAmount, getBalanceAmount, activities } =
    useActivities();
  // const [budgets, setBudgets] = useState<BudgetType[]>([]);
  const navigate = useNavigate();
  const activityShownAmount = 5;

  // useEffect(() => {
  //   const fetchBudgets = async () => {
  //     const budgetList = await getBudgets();
  //     setBudgets(budgetList);
  //   };

  //   fetchBudgets();
  // }, []);

  return (
    <div className="wrapper page-wrapper">
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Overview title */}
          <h2 className="text-white theme-light:text-black">Overview</h2>
          {/** View more */}
          <ViewMore path={"/analytics"} />
        </div>
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
        <div className="flex flex-row justify-between items-center">
          {/** Latest activity title */}
          <h2 className="text-white theme-light:text-black">
            Latest activities
          </h2>
          {/** View more */}
          <ViewMore path={"/activities"} />
        </div>
        {/** Activities */}
        {activities.length > 0 ? (
          <LatestActivityCard
            activitySlotVisibleAmount={activityShownAmount}
            activities={activities}
          />
        ) : (
          <EmptyCard
            title={"You don't have any activities"}
            description={"List of activities you've created will appear here."}
            button={<LinkButton path={"/addActivity"}>Add activity</LinkButton>}
          />
        )}
      </section>
    </div>
  );
};

export default Home;
