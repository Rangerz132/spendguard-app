import { BiChevronRight } from "react-icons/bi";
import useActivities from "../../../hooks/useActivities";
import ViewMore from "../../../components/UI/ViewMore";
import Card from "../../../components/Card/Card";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";
import LatestActivityCard from "../../../components/Activity/LatestActivityCard";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import BudgetLimitCard from "../../../components/Budget/BudgetLimitCard";

const Home = () => {
  const { getExpensesAmount, getIncomesAmount, getBalanceAmount, activities } =
    useActivities();
  const budgets = useSelector((root: RootState) => root.budgets);
  const navigate = useNavigate();
  const activityShownAmount = 5;

  return (
    <div className="wrapper page-wrapper">
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Overview title */}
          <h2 className="text-white theme-light:text-black">Overview</h2>
          {/** View more */}
          <LinkButton path={"/analytics"}>
            <BiChevronRight className="text-theme-dark-grey icon " />
          </LinkButton>
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
        {/** Budgets */}

        {/** Title */}
        <div className="flex flex-row justify-between items-center">
          {/** Latest activity title */}
          <h2 className="text-white theme-light:text-black">Budget</h2>
          {/** View more */}
          <LinkButton path={"/budgets"}>
            <BiChevronRight className="text-theme-dark-grey icon " />
          </LinkButton>
        </div>
        {budgets.length > 0 ? (
          budgets
            .slice(-1)
            .map((budget) => (
              <BudgetLimitCard
                budget={budget}
                budgetTitle={budget.name || budget.id}
                key={budget.id}
                onClick={() => navigate(`/budget/${budget.id}`)}
              />
            ))
        ) : (
          <EmptyCard
            title={"You don't have any budget"}
            description={"Your budget statistics would appear here"}
            button={
              <LinkButton path={"/addBudget"} className="cta">
                Add a budget
              </LinkButton>
            }
          />
        )}
      </section>
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Latest activity title */}
          <h2 className="text-white theme-light:text-black">
            Latest activities
          </h2>
          {/** View more */}
          <LinkButton path={"/activities"}>
            <BiChevronRight className="text-theme-dark-grey icon " />
          </LinkButton>
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
            button={
              <LinkButton path={"/addActivity"} className="cta">
                Add activity
              </LinkButton>
            }
          />
        )}
      </section>
    </div>
  );
};

export default Home;
